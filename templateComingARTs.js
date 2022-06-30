// 預設匯出 export default 記得將flex模板貼過來時補上這個。這樣我們用的Eslint會自動修復成jS的物件(原本是Json格式前面是雙引號)
// export default 匯出物件是最常見的使用方式

export default {
  type: 'bubble',
  size: 'micro',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'image',
        url: 'https://d2onjhd726mt7c.cloudfront.net/images/datas/000/093/825/lt2su2vv09xui95k7o4ezhpn43m8h793_800x420%5E.jpg',
        size: 'full',
        aspectMode: 'cover',
        aspectRatio: '1:1',
        gravity: 'center'
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
        offsetEnd: '0px'
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
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    text: '【歲月靜好】陳映伶2022油畫個展',
                    size: 'xl',
                    color: '#ffffff',
                    wrap: true,
                    weight: 'bold',
                    align: 'start'
                  }
                ]
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                        size: 'xxs'
                      },
                      {
                        type: 'text',
                        text: 'Coming:undefined',
                        color: '#FFD700',
                        size: 'xxs'
                      }
                    ],
                    spacing: 'xs'
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'text',
                        text: '隱藝空間工作室',
                        color: '#ffffff',
                        size: 'xxs',
                        flex: 0,
                        align: 'end'
                      },
                      {
                        type: 'text',
                        text: '桃園市',
                        color: '#a9a9a9',
                        size: 'xxs',
                        align: 'end'
                      }
                    ],
                    spacing: 'lg'
                  }
                ],
                paddingTop: 'md'
              }
            ],
            justifyContent: 'flex-end'
          }
        ],
        position: 'absolute',
        offsetBottom: '0px',
        offsetStart: '0px',
        offsetEnd: '0px',
        paddingAll: '10px',
        offsetTop: '0px'
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: '預告',
            size: 'xxs',
            color: '#F0F0F0',
            weight: 'bold',
            contents: [],
            position: 'relative',
            align: 'center'
          }
        ],
        position: 'absolute',
        backgroundColor: '#FF000099',
        cornerRadius: 'xxl',
        width: '30px',
        height: '30px',
        justifyContent: 'center',
        offsetStart: '75%',
        offsetTop: '5%'
      }
    ],
    paddingAll: '0px'
  },
  action: {
    type: 'uri',
    label: 'action',
    uri: 'http://linecorp.com/'
  }
}
