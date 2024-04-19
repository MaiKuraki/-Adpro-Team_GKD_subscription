import { defineGkdApp } from "@gkd-kit/define";

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 0,
      name: '局部广告-阅读页面广告',
      activityIds: [
        'com.dragon.read.ad.banner.ui',
        'com.dragon.read.reader.ReaderActivity',
        'com.dragon.read.reader.ui.ReaderActivity',
      ],
      rules: [
        {
          key: 1,
          matches: '@ImageView - LinearLayout TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12908734',
        },
        {
          key: 2,
          matches:
            'HorizontalAndVerticalScrollView > FrameLayout[childCount=14] > [index=9] >5 ImageView[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/d2f7c62c-be88-4668-b276-68bb53edfaad',
          snapshotUrls: [
            'https://i.gkd.li/i/14193836',
            'https://i.gkd.li/i/13520314',
            'https://i.gkd.li/i/12908734',
          ],
        },
        {
          key: 3,
          quickFind: true,
          matches: '[text="关闭此条广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/cf9d0574-dc89-4f03-ba01-eb9bcc97925f',
          snapshotUrls: 'https://i.gkd.li/i/14540281',
        },
        {
          key: 4,
          matches:
            'HorizontalAndVerticalScrollView > FrameLayout[childCount>=13] >(7,8,9) @FrameLayout[index=2][clickable=true] > ImageView',
          exampleUrls: [
            'https://m.gkd.li/101449500/a8477c6e-433d-4903-9206-78391dad1d4c',
            'https://m.gkd.li/101449500/cae0141c-5fe3-4c73-a52c-eb38863dec99',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14548657',
            'https://i.gkd.li/i/14622531',
            'https://i.gkd.li/i/14810480',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-首页右侧悬浮广告',
      activityIds: [
        'com.dragon.read.pages.main.MainFragmentActivity',
        'com.dragon.read.ad.openingscreenad.OpeningScreenADActivity',
      ],
      rules: [
        {
          matches:
            '[id="android:id/content"] > FrameLayout[childCount=1] > RelativeLayout[childCount=1] >2 ImageView[id!=null][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12716506', //relativeLayout和ImageView之间是RelativeLayoutRelativeLayout
            'https://i.gkd.li/i/13318796', //relativeLayout和ImageView之间是ViewGroup
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-优惠券弹窗',
      rules: [
        {
          key: 0,
          name: '电商惊喜券',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          quickFind: true,
          matches:
            '@LynxFlattenUI[id=null][text=""][clickable=true] - [text="去逛商城"] -4 [text$="电商惊喜券"]',
          snapshotUrls: 'https://i.gkd.li/i/12910159',
        },
        {
          key: 1,
          name: '爆款好物一分购',
          quickFind: true,
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            '@ImageView[clickable=true] <2 LinearLayout[childCount=2] < [id="android:id/content"][childCount=1]',
          snapshotUrls: 'https://i.gkd.li/i/12878266',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-阅读页面-关注作者',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches: '@ImageView +2 FrameLayout >3 [text="关注"]',
          snapshotUrls: 'https://i.gkd.li/i/13399505',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-阅读页面广告',
      quickFind: true,
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules: [
        {
          key: 2,
          name: '点击[继续阅读下一页]',
          order: -1,
          matches: '[text="继续阅读下一页"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13674556',
            'https://i.gkd.li/i/13843155',
          ],
        },
        {
          key: 0,
          name: '点击[反馈]按钮',
          matches: '[text="反馈"][visibleToUser=true][name$="UIText"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13520160',
            'https://i.gkd.li/i/13816453',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击[不感兴趣]',
          matches: '[text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13520219',
            'https://i.gkd.li/i/13674550',
            'https://i.gkd.li/i/13816454',
            'https://i.gkd.li/i/14913207',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '通知提示',
      desc: '自动点击【取消】',
      activityIds: 'com.dragon.read.widget.ConfirmDialogBuilder',
      rules: '@[text="取消"] < * -2 * > [text="开启推送提醒"]',
      snapshotUrls: 'https://i.gkd.li/i/12716592',
    },
    {
      key: 12,
      name: '全屏广告-阅读翻页时的全屏广告',
      desc: '点击右上角【关闭】',
      quickFind: true,
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules: 'TextView[text="广告"] +2 Button[id="com.dragon.read:id/close"]',
      snapshotUrls: 'https://i.gkd.li/i/13191156',
    },
    {
      key: 13,
      name: '功能类-书城-底部继续阅读浮窗',
      desc: '点击【继续阅读】旁边的x',
      resetMatch: 'app',
      activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
      rules: '[vid="container"] > ImageView',
      snapshotUrls: 'https://i.gkd.li/i/14031943',
    },
    {
      key: 14,
      name: '功能类-阅读页面广告-点击下一页',
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules:
        '[id="com.dragon.read:id/readFlowNonRoundEntranceLayout"] [id="com.dragon.read:id/relativeRight"]',
      snapshotUrls: 'https://i.gkd.li/i/13674556',
    },
    {
      key: 15,
      name: '全屏广告-福利页面弹窗',
      activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
      rules: '@LynxFlattenUI[clickable=true] - [text="前往抽奖"]',
      snapshotUrls: 'https://i.gkd.li/i/14292475',
    },
    {
      key: 16,
      name: '评价提示',
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '@ImageView[clickable=true] +3 * > [text="五星好评"]',
      snapshotUrls: 'https://i.gkd.li/i/14395088',
    },
    {
      key: 17,
      name: '全屏广告-VIP免费领弹窗',
      desc: '点击x',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
      rules: '@UIImage[clickable=true] + [text="番茄VIP免费领"]',
      exampleUrls:
        'https://m.gkd.li/101449500/0c6e8831-9cde-47f1-8e4b-25ecfa5b2881',
      snapshotUrls: 'https://i.gkd.li/i/14539504',
    },
    {
      key: 19,
      name: '全屏广告-会员福利弹窗',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <n * > [text="领取限时福利"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14430326',
            'https://i.gkd.li/i/14969861',
          ],
        },
      ],
    },
  ],
});
