import 'dotenv/config'
import linebot from 'linebot'
// 定時更新程式
// import schedule from 'node-schedule'
import data from './data.js'
import dataTfam from './dataTfam.js'

data.fetchData()
dataTfam.fetchDataTfam()

// 定時更新程式
// schedule.scheduleJob('0 0 * * *', () => {
//   data.fetchData()
//   dataTfam.fetchDataTfam()
// })

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// lineBot 訊息事件
bot.on('message', function (event) {
  const illustrate = '那個...目前我只聽懂' + '\n' + '\n' +
    '"隨便" 兩字' + '\n' + '★回你隨機5個正在展覽中的' + '\n' + '\n' +
    '"預告" 兩字' + '\n' + '★回你隨機介紹coming新展' + '\n' + '\n' +
    '"最後一天" 四字' + '\n' + '★回你今天截止的展' + '\n' + '\n' +
    '"台北美術館" 四字' + '\n' + '★回你北美館當期有哪些展' + '\n' + '\n' +
    '"北美館“ 三字' + '\n' + '★回你北美館當期有哪些展' + '\n'

  if (dataTfam.tfamExhibitions.length === 0) {
    event.reply('佈展中')
  } else if (event.message.type === 'text') {
    if (event.message.text === '北美館' || event.message.text === '台北美術館' || event.message.text === '臺北美術館' || event.message.text === '臺北市立美術館') {
      dataTfam.tfamCurrent(event)
    } else {
      event.reply(event.message.text + illustrate)
    }
  }

  if (data.contentARTs.length === 0) {
    event.reply('佈展中')
  } else if (event.message.type === 'text') {
    if (event.message.text === '隨便') {
      // line上打"隨便"字會回傳data(data.js)裡面的replyContentART(我們去將爬蟲內容套用line格式內)的事件
      data.shuffleContentARTs(event)
    } else if (event.message.text === '最後一天') {
      data.leftContentARTs(event)
    } else if (event.message.text === '預告') {
      data.shuffleComingARTs(event)
    }
  }
})

// lineBot 監聽
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人出動')
})

// 版本最後更新:220627:11:40
