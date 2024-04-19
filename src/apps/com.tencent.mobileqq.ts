import { defineGkdApp } from "@gkd-kit/define";

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      excludeActivityIds: [
        'com.tencent.mobileqq.activity.ChatActivity', // 在聊天界面禁用
        'com.tencent.mobileqq.search.activity.UniteSearchActivity', // 在搜索页面禁用
      ],
      rules: {
        excludeMatches: '[vid="chat_item_content_layout"]', // 在聊天界面禁用
        matches: 'TextView[text^="跳过"][text.length<=10][vid!="title"]',
      },
      snapshotUrls: [
        'https://i.gkd.li/i/13062244',
        'https://i.gkd.li/i/13093155',
        'https://i.gkd.li/i/13207731',
        'https://i.gkd.li/i/13217807', // 避免在聊天界面误触
        'https://i.gkd.li/i/13856647', // 误触
        'https://i.gkd.li/i/13868177', // 误触
      ],
    },
    {
      key: 1,
      name: '局部广告-消息页面顶部横幅广告',
      desc: '点击关闭',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        {
          key: 0,
          matches:
            'TextView[text!=null] < LinearLayout + ImageView[desc="关闭"]', // 原@语法会出现两个选项可能会导致误触
          snapshotUrls: [
            'https://i.gkd.li/i/12892726',
            'https://i.gkd.li/i/12774870',
            'https://i.gkd.li/i/13207766',
            'https://i.gkd.li/i/13386518',
          ],
        },
        {
          key: 1,
          name: '消息页面-顶部惊喜礼包',
          quickFind: true,
          matches:
            '@ImageView[childCount=0][visibleToUser=true] - FrameLayout - [text*="惊喜礼包"]',
          snapshotUrls: 'https://i.gkd.li/i/13426912',
        },
        {
          key: 2,
          matches:
            'ImageView + RelativeLayout[childCount=2] > TextView[text!=null] + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13476400',
        },
        {
          key: 3,
          name: '稀有龙鹅卡掉落/瓜分现金',
          matches:
            'RelativeLayout[childCount=2] > ImageView + RelativeLayout[childCount=2] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/14155603',
            'https://i.gkd.li/i/14217033',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '综合广告-好友动态-广告卡片',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
          matches: 'View[desc="广告"] + ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12847842',
            'https://i.gkd.li/i/13787345',
          ],
        },
        {
          key: 4,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          quickFind: true,
          matches: 'ImageView[clickable=true] < * -2 * >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14138557',
        },
        {
          preKeys: [0, 4],
          key: 1,
          activityIds: [
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
            'com.tencent.mobileqq.activity.SplashActivity',
          ],
          quickFind: true,
          matches: '@* > ImageView + [text="关闭此条广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12840889',
            'https://i.gkd.li/i/13831867', //activityId: 'com.tencent.mobileqq.activity.SplashActivity'
            'https://i.gkd.li/i/14138556',
          ],
        },
        {
          preKeys: 0,
          key: 2,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
          quickFind: true,
          matches: '@[clickable=true] > * > ImageView + [text="隐藏此条动态"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13761147',
            'https://i.gkd.li/i/13849730',
          ],
        },
        {
          key: 3,
          quickFind: true,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
          matches: '@ImageView[clickable=true] - [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12749584',
            'https://i.gkd.li/i/13627967',
          ],
        },
        {
          key: 5,
          quickFind: true,
          position: {
            left: 'width * 0.9534',
            top: 'width * 0.0805',
          },
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            '@View[clickable=false] <<3 LinearLayout <<n LinearLayout[childCount=4] <<3 FrameLayout + * >2 [text="动态"]',
          exampleUrls:
            'https://m.gkd.li/57941037/940f4965-0058-4101-ab62-20d131e9c1d1',
          snapshotUrls: 'https://i.gkd.li/i/14732983',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog',
          ],
          matches:
            'ImageView[id="com.tencent.mobileqq:id/close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206663', // com.tencent.mobileqq.activity.SplashActivity
            'https://i.gkd.li/i/12642081', // com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog
          ],
        },
        {
          key: 1,
          name: '钱包页面弹窗广告',
          activityIds: 'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
          matches: '[desc="弹窗推荐活动"] + [desc="关闭"]',
          exampleUrls:
            'https://m.gkd.li/57941037/11e8f456-4c88-431a-ad58-f626bee61df9',
          snapshotUrls: 'https://i.gkd.li/i/14822290',
        },
        {
          key: 2,
          name: '黄钻页面弹窗广告',
          activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
          matches:
            'TextView[text.length=0&&clickable=true&&visibleToUser=true] + View > Button[text.length=0&&focusable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12914978',
            'https://i.gkd.li/i/12914886',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-顶部SVIP广告',
      desc: '消息界面-搜索框和消息记录之间的广告卡片,点击关闭右侧x',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules:
        'LinearLayout > TextView[text*="SVIP"||text*="超级会员"] + FrameLayout[childCount<=2] + [name$="ImageView"||name$="Button"][id!=null][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/12706907',
        'https://i.gkd.li/i/13107298',
        'https://i.gkd.li/i/12793359',
        'https://i.gkd.li/i/12855048',
        'https://i.gkd.li/i/13228108',
      ],
    },
    {
      key: 5,
      name: '分段广告-动态页-好友热播',
      desc: '好友动态中的好友热播，自动选择“减少好友热播” - 默认关闭',
      quickFind: true,
      activityIds: [
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
        'com.tencent.mobileqq.activity.SplashActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击 [好友热播] 卡片右上角菜单按钮',
          matches: '@Button[clickable=true] - [text="好友热播"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12721427',
            'https://i.gkd.li/i/14822579',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击[减少好友热播]',
          matches: '@[clickable=true] >2 [text="减少好友热播"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12721433',
            'https://i.gkd.li/i/14822576',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '功能类-扫一扫登录确认',
      desc: '自动点击登录。包括 PC 登录确认、QQ 互联登录确认。',
      quickFind: true,
      rules: [
        {
          key: 1,
          name: '点击登录',
          activityIds: [
            'com.tencent.biz.qrcode.activity.QRLoginAuthActivity',
            'com.tencent.mobileqq.activity.DevlockQuickLoginActivity',
            'com.tencent.mobileqq.activity.DevLockQuickVerifyActivity',
          ],
          matches:
            'Button[text*="登录"][clickable=true][visibleToUser=true][text.length<10]',
          snapshotUrls: [
            'https://i.gkd.li/i/13623520',
            'https://i.gkd.li/i/12789287',
            'https://i.gkd.li/i/13063027',
            'https://i.gkd.li/i/13166314',
          ],
        },
        {
          key: 2,
          name: '点击同意',
          activityIds:
            'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
          matches: 'Button[text="同意"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14752498',
        },
        {
          preKeys: [2],
          key: 3,
          name: '点击确认',
          activityIds:
            'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
          matches: 'Button[text="确认"]',
          snapshotUrls: 'https://i.gkd.li/i/14752519',
        },
      ],
    },
    {
      key: 8,
      name: '功能类-消息页面顶部-无法接收新消息通知',
      desc: '消息界面-搜索框和消息记录之间的通知卡片,点击关闭右侧x',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: 'RelativeLayout > [text^="当前无法接收"] + ImageView',
      snapshotUrls: 'https://i.gkd.li/i/12855441',
    },
    {
      key: 9,
      name: '局部广告-浮窗广告',
      activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
      rules: [
        {
          key: 0,
          matches:
            'TextView[text="QQ等级规则"] + View > TextView[id=null&&text.length=0]',
          snapshotUrls: 'https://i.gkd.li/i/12914734',
        },
        {
          key: 1,
          name: '右侧悬浮广告',
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            'FrameLayout[desc="发表帖子"] - LinearLayout[id!=null] >3 ImageView[id!=null][clickable=false] - View[id!=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12708844',
        },
      ],
    },
    {
      key: 10,
      name: '功能类-自动勾选原图',
      desc: '发送图片时自动勾选原图',
      quickFind: true,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.tencent.qqnt.qbasealbum.WinkHomeActivity',
        'com.tencent.mobileqq.activity.photo.album.NewPhotoListActivity',
      ],
      rules: '@CheckBox[checked=false] + [text="原图"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12705556', // 未勾选原图
        'https://i.gkd.li/i/12705559', // 已勾选原图
        'https://i.gkd.li/i/13295142', // com.tencent.qqnt.qbasealbum.WinkHomeActivity
        'https://i.gkd.li/i/13476247', // com.tencent.mobileqq.activity.photo.album.NewPhotoListActivity
      ],
    },
    {
      key: 11,
      name: '功能类-自动查看原图',
      desc: '查看图片时自动点击原图',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.tencent.richframework.gallery.QQGalleryActivity',
          matches: '[text^="查看原图"]',
          snapshotUrls: 'https://i.gkd.li/i/14757735',
        },
      ],
    },
    {
      key: 12,
      name: '分段广告-小世界评论区广告',
      desc: '点击广告-弹出原因框-关闭此条广告',
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.tencent.biz.qqcircle.activity.QCircleFolderActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            'RelativeLayout[childCount=5] > @LinearLayout[clickable=true][childCount=2][id!=null] > TextView[text="广告"][id!=null]',
          snapshotUrls: 'https://i.gkd.li/i/12847819',
        },
        {
          preKeys: 0,
          matches:
            '@LinearLayout[clickable=true] > TextView[text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12847821',
        },
      ],
    },
    {
      key: 13,
      name: '开屏广告-QQ小程序开屏广告',
      desc: '点击右下角跳过',
      activityIds: [
        'com.tencent.mobileqq.mini.appbrand.ui.AppBrandUI',
        'com.tencent.mobileqq.activity.miniaio.MiniChatActivity',
      ],
      rules: [
        {
          matches:
            'TextView[text = "广告"] < RelativeLayout + RelativeLayout TextView[text = "跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12877215',
            'https://i.gkd.li/i/12919195',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '分段广告-好友动态-为你推荐',
      quickFind: true,

      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '@ImageView[clickable=true] - [text="为你推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12929620',
            'https://i.gkd.li/i/13387606', // activityIds: 'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          matches:
            '@LinearLayout[id!=null][clickable=true] > LinearLayout > [text="减少此类推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12929619',
            'https://i.gkd.li/i/13387605',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: '@[desc="关闭"] - * > [text="发现新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/13386719',
        },
        {
          key: 1,
          matches: '@[text="稍后处理"] +2 [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/14724108',
        },
      ],
    },
    {
      key: 18,
      name: '更新提示-消息页面-顶部',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches: '@ImageView[clickable=true] <n * > [text*="版本更新"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13255493', //desc值为 null 快照
            'https://i.gkd.li/i/13843140',
            'https://i.gkd.li/i/14138340',
            'https://i.gkd.li/i/13931212',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '更新提示-内测邀请弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '@[desc="关闭"] - * > [text="QQ测试版"]',
          snapshotUrls: 'https://i.gkd.li/i/13526551',
        },
      ],
    },
    {
      key: 20,
      name: '分段广告-钱包页卡片广告',
      quickFind: true,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
      ],
      rules: [
        {
          key: 0,
          matches: 'ViewGroup[childCount=6] > [text="广告"]',
          snapshotUrls: ['https://i.gkd.li/i/13695087'],
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@LinearLayout > [text="关闭此条广告"]',
          snapshotUrls: ['https://i.gkd.li/i/13699701'],
        },
      ],
    },
    {
      key: 21,
      name: '全屏广告-广告弹窗',
      activityIds: 'com.tencent.mobileqq.activity.QPublicTransFragmentActivity',
      rules: [
        {
          key: 0,
          name: '元梦之星广告弹窗',
          matches:
            'ViewGroup[childCount=2] > ViewGroup[childCount=3][index=1] > ViewGroup[clickable=true][visibleToUser=true][index=1][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13797876',
        },
        {
          key: 1,
          name: '现金瓜分弹窗',
          matches:
            'RelativeLayout >5 ViewGroup[childCount=6] > ViewGroup[index=2][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/a9fe74db-07b4-47e6-beed-80983f61d2e3',
          snapshotUrls: 'https://i.gkd.li/i/14207286',
        },
      ],
    },
    {
      key: 22,
      name: '分段广告-天气页卡片广告',
      desc: '点击关闭-点击关闭此条广告',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: 'com.tencent.mobileqq.activity.QPublicFragmentActivity',
          matches: '[id="com.tencent.mobileqq:id/nca"]',
          snapshotUrls: 'https://i.gkd.li/i/14019384',
        },
        {
          preKeys: 0,
          key: 1,
          quickFind: true,
          activityIds: 'com.tencent.mobileqq.activity.QPublicFragmentActivity',
          matches: '@LinearLayout[childCount=3] > [text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14019401',
        },
        {
          key: 2,
          activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
          matches: [
            // 限定
            'ViewGroup[desc="返回"]',
            'ViewGroup[desc="首页"]',
            'ViewGroup[desc="分享"]',
            'ViewGroup[childCount=6] > ViewGroup[childCount=2][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14549503',
        },
        {
          key: 3,
          preKeys: 2,
          activityIds: 'com.tencent.mobileqq.activity.QPublicFragmentActivity',
          matches:
            'View < @ViewGroup[clickable=true][visibleToUser=true] - ViewGroup > ViewGroup[childCount=6] > ViewGroup[childCount=2]',
          snapshotUrls: 'https://i.gkd.li/i/14549504',
        },
      ],
    },
    {
      key: 23,
      name: '全屏广告-个人主页浮层广告',
      rules: [
        {
          key: 0,
          name: '个性装扮浮层广告',
          activityIds:
            'com.tencent.mobileqq.profilecard.activity.FriendProfileCardActivity',
          matches: '[desc="关闭浮层"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14074727',
        },
      ],
    },
    {
      key: 24,
      name: '局部广告-聊天页-顶部活动浮窗',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        {
          key: 0,
          excludeMatches: ['[text*="正在语音通话"]', '[text*="正在一起听歌"]'],
          matches:
            'FrameLayout[childCount=2] >4 FrameLayout[childCount=2] > FrameLayout[index=1] > RelativeLayout[childCount=4] > TextView[index=1] +2 ImageView',
          exampleUrls:
            'https://m.gkd.li/57941037/3bf709fc-eefc-4d66-9a00-475738934cd7',
          snapshotUrls: [
            'https://i.gkd.li/i/14178667',
            'https://i.gkd.li/i/14193973', // 误触
            'https://i.gkd.li/i/14734790', // 误触
          ],
        },
      ],
    },
  ],
});
