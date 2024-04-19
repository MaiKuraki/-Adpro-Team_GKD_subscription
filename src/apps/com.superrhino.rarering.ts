import { defineGkdApp } from "@gkd-kit/define";

export default defineGkdApp({
  id: 'com.superrhino.rarering',
  name: 'Nico',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      desc: '点击跳过',
      rules: [
        {
          matches:
            '@View[clickable=true] <3 * <2 * < FrameLayout[id="com.superrhino.rarering:id/fl_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13853858',
        },
      ],
    },
  ],
});
