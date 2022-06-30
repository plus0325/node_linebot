// 預設匯出 export default 記得將flex模板貼過來時補上這個。這樣我們用的Eslint會自動修復成jS的物件(原本是Json格式前面是雙引號)
// export default 匯出物件是最常見的使用方式

export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://www.tfam.museum/File/Exhibition/Main/702/20220524170944961065.jpg',
    size: 'full',
    aspectRatio: '84:33',
    aspectMode: 'cover'
  },
  body: {
    type: 'box',
    layout: 'vertical',
    spacing: 'md',
    contents: [
      {
        type: 'text',
        text: '李義弘：回顧展',
        size: 'xl',
        weight: 'bold'
      },
      {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            contents: [
              {
                type: 'icon',
                url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png'
              },
              {
                type: 'text',
                text: '一樓1A~1B',
                weight: 'bold',
                margin: 'sm',
                flex: 0
              }
            ]
          }
        ]
      },
      {
        type: 'text',
        text: '臺北市立美術館 當期展覽',
        wrap: true,
        color: '#aaaaaa',
        size: 'xxs',
        offsetTop: 'md'
      }
    ]
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'button',
        style: 'primary',
        color: '#DEDEDE',
        margin: 'xxl',
        action: {
          type: 'uri',
          label: '點擊前往',
          uri: 'https://linecorp.com'
        },
        offsetBottom: 'none'
      }
    ]
  },
  size: 'kilo'
}
