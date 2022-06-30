// import axios from 'axios'
import cheerio from 'cheerio'
import puppeteer from 'puppeteer'
import templateTfam from './templateTfam.js'
// import fs from 'fs'

// 暫存北美館資料
const tfamExhibitions = []
// 取得資料(非同步)
const fetchDataTfam = async () => {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    // await page.setUserAgent(
    //   'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36'
    // )
    await page.goto('https://www.tfam.museum/Exhibition/Exhibition.aspx?ddlLang=zh-tw')
    // const userAgent = await page.evaluate(() => navigator.userAgent)
    // 取得新頁面的內容
    const html = await page.content()
    // fs.writeFile('content.html', html, _ => console.log('done'));
    // console.log(html)

    // 載入 html
    const $ = cheerio.load(html)
    const list = $('#ExList .Exhibition_list')
    for (let i = 0; i < list.length; i++) {
      const title = list.eq(i).find('h3').text()
      const img = list.eq(i).find('img').attr('src').replace(/\\/g, '/')
      const link = 'https://www.tfam.museum/' + list.eq(i).find('.more').attr('href')
      const add = '樓層：' + list.eq(i).find('p').text()

      tfamExhibitions.push({ title, img, link, add })
    }
    // fs.writeFileSync('tfamCurrent.json', JSON.stringify(tfamExhibitions, null, 2))
    // 關閉瀏覽器
    await browser.close()
  } catch (error) {
    // 如果有錯誤的話會顯示
    console.log(error)
  }
}

// 當期展覽(程式)
const tfamCurrent = (event) => {
  const bubbles = tfamExhibitions.map(tfamExhibition => {
    const bubble = JSON.parse(JSON.stringify(templateTfam))
    // fs.writeFileSync('bubbles.json', JSON.stringify(bubbles, null, 2))
    bubble.hero.url = tfamExhibition.img
    bubble.body.contents[0].text = tfamExhibition.title
    bubble.body.contents[1].contents[0].contents[1].text = tfamExhibition.add
    bubble.footer.contents[0].action.uri = tfamExhibition.link
    return bubble
  })
  console.log(tfamCurrent)

  event.reply([
    {
      type: 'flex',
      altText: '北美館',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(0, 10)
      }
    }
  ])
}

// 匯出給index.js使用
export default {
  fetchDataTfam,
  tfamExhibitions,
  tfamCurrent
}
