import axios from 'axios'
import cheerio from 'cheerio'
// 因為我們把LINEBOT_flex的模板用js格式。好處可以直接引入。如果是Json檔的話還要用其他的套件來轉換
import template from './template.js'
import templateComingARTs from './templateComingARTs.js'
import fs from 'fs'
// import * as cheerio from 'cheerio'
const shuffleArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
}
// const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random())

const contentARTs = []
const comingARTs = []

// 非同步 (取得資料)
const fetchData = async () => {
  try {
    // 展覽進行中
    for (let i = 1; i < 10; i++) {
      const { data } = await axios.get(`https://artemperor.tw/tidbits?sort=1&page=${i}`)
      const $ = cheerio.load(data)
      $('.list_box').each((i, el) => {
        // const $el = $(el)
        const info = {
          link: $(el).find('a').attr('href'),
          img: $(el).find('.pic').css('background-image').slice(4).slice(0, -6),
          title: $(el).find('h2').text().trim(),
          date: $(el).find('p').text().slice(15, -7).trim(),
          region: $(el).find('p').text().slice(-3).trim(),
          place: $(el).find('h3').text().trim(),
          left: $(el).find('.note').text().slice(0, -10).trim()
        }
        contentARTs.push(info)
        // console.log(info.left)
      })
    }

    // 展覽即將到來
    for (let i = 1; i < 3; i++) {
      const { data } = await axios.get(`https://artemperor.tw/tidbits?sort=2&page=${i}`)
      const $ = cheerio.load(data)
      $('.list_box').each((i, el) => {
        // const $el = $(el)
        const info = {
          link: $(el).find('a').attr('href'),
          img: $(el).find('.pic').css('background-image').slice(4).slice(0, -6),
          title: $(el).find('h2').text().trim(),
          start: 'Coming：' + $(el).find('p').text().slice(3, -20).trim(),
          end: $(el).find('p').text().slice(15, -7).trim(),
          region: $(el).find('p').text().slice(-3).trim(),
          place: $(el).find('h3').text().trim(),
          left: $(el).find('.note').text().trim()
        }
        comingARTs.push(info)
        // console.log(comingARTs)
      })
      // fs.writeFileSync('bubbles-SUFF.json', JSON.stringify(contentARTs, null, 2))
    }
  } catch (error) {
    // 如果有錯誤的話會顯示
    console.log(error)
  }
}

const shuffleContentARTs = (event) => {
  const bubbles = contentARTs.map(artObject => {
    const bubble = JSON.parse(JSON.stringify(template))
    // fs.writeFileSync('bubbles.json', JSON.stringify(bubbles, null, 2))
    bubble.body.contents[0].url = artObject.img + '%5E.jpg'
    bubble.body.contents[2].contents[0].contents[2].contents[0].contents[1].text = artObject.region
    bubble.body.contents[2].contents[0].contents[0].contents[0].text = artObject.title
    bubble.body.contents[2].contents[0].contents[1].contents[3].text = '結束：' + artObject.date
    bubble.body.contents[2].contents[0].contents[2].contents[0].contents[0].text = artObject.place
    bubble.action.uri = artObject.link

    return bubble
    // console.log(bubble)
    // console.log(JSON.stringify(bubbles, null, 2))
  })
  shuffleArray(bubbles)
  fs.writeFileSync('linelineline.json', JSON.stringify(bubbles, null, 2))

  event.reply([
    {
      type: 'flex',
      altText: '隨便',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(0, 5)
      }
    }
  ])
}

const leftContentARTs = (event) => {
  let message = ''
  // const firstLine = true
  contentARTs.forEach((artObject, index) => {
    if (artObject.left === '0') {
      message = message + '\n'
      message = message + (index + 1) + artObject.title + '\n' + artObject.region + '••' + artObject.place + '\n'
    }
  })
  event.reply({ type: 'text', text: message })
}

const shuffleComingARTs = (event) => {
  const bubbles = comingARTs.map(artObject => {
    const bubble = JSON.parse(JSON.stringify(templateComingARTs))
    bubble.body.contents[0].url = artObject.img + '%5E.jpg'
    bubble.body.contents[2].contents[0].contents[0].contents[0].text = artObject.title
    bubble.body.contents[2].contents[0].contents[1].contents[0].contents[1].text = artObject.start
    bubble.body.contents[2].contents[0].contents[1].contents[1].contents[0].text = artObject.place
    bubble.body.contents[2].contents[0].contents[1].contents[1].contents[1].text = artObject.region
    bubble.action.uri = artObject.link

    return bubble
  })
  shuffleArray(bubbles)
  // fs.writeFileSync('shuffleComingARTs.json', JSON.stringify(bubbles, null, 2))

  event.reply([
    {
      type: 'flex',
      altText: '預告',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(0, 10)
      }
    }
  ])
}

export default {
  fetchData,
  contentARTs,
  shuffleContentARTs,
  leftContentARTs,
  shuffleComingARTs
}

// 版本最後更新:220627:11:40
