// 預設匯出 export default 記得將flex模板貼過來時補上這個。這樣我們用的Eslint會自動修復成jS的物件(原本是Json格式前面是雙引號)
// export default 匯出物件是最常見的使用方式
export default {
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'image',
        url: 'https://d2onjhd726mt7c.cloudfront.net/images/datas/000/092/953/q1dxtlvuk3e4zk6fahadf7pish7t7in8_800x420%5E.jpg',
        size: 'full',
        aspectMode: 'cover',
        aspectRatio: '1:1'
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [],
        position: 'absolute',
        background: {
          type: 'linearGradient',
          angle: '0deg',
          endColor: '#00000099',
          startColor: '#00000099'
        },
        width: '100%',
        height: '100%',
        offsetBottom: '0px',
        offsetStart: '0px',
        offsetEnd: '0px',
        action: {
          type: 'postback',
          label: 'action',
          data: 'hello'
        }
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    size: 'xxl',
                    color: '#ffffff',
                    text: '非遊記',
                    wrap: true,
                    weight: 'bold'
                  }
                ]
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                    size: 'lg'
                  },
                  {
                    type: 'icon',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                    size: 'sm'
                  },
                  {
                    type: 'icon',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                    size: 'xxs'
                  },
                  {
                    type: 'text',
                    text: '結束：2022-07-17',
                    color: '#FFD700',
                    decoration: 'none',
                    weight: 'regular',
                    align: 'start',
                    offsetStart: 'md',
                    size: 'md'
                  }
                ],
                spacing: 'xs',
                margin: 'md'
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'text',
                        text: 'MoCA TAIPEI 台北當代藝術館',
                        color: '#ffffff',
                        size: 'xxs'
                      },
                      {
                        type: 'text',
                        text: '台北市',
                        color: '#8E8E8E',
                        size: 'xxs',
                        align: 'end',
                        weight: 'bold',
                        offsetTop: 'xs'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        position: 'absolute',
        offsetBottom: '0px',
        offsetStart: '0px',
        offsetEnd: '0px',
        paddingAll: '15px'
      }
    ],
    paddingAll: '0px'
  },
  action: {
    type: 'uri',
    label: 'action',
    uri: 'http://linecorp.com/'
  },
  size: 'giga'
}
