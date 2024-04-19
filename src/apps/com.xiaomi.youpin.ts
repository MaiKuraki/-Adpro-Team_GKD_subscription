import { defineGkdApp } from "@gkd-kit/define";

export default defineGkdApp({
  id: 'com.xiaomi.youpin',
  name: '小米有品',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          activityIds:
            'com.xiaomi.youpin.globalpopwindow.popwindow.PopWindowActivity',
          matches:
            'WebView[text="有品"] > View > View[childCount=2] > Image[index=1][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14964897',
            'https://i.gkd.li/i/12836727',
          ],
        },
      ],
    },
  ],
});
