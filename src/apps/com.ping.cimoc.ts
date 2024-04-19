import { defineGkdApp } from "@gkd-kit/define";

export default defineGkdApp({
  id: 'com.ping.cimoc',
  name: '芝士漫画',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      activityIds: 'com.ping.cimoc.ui.activity.MainActivity',
      rules:
        'ImageView < FrameLayout + FrameLayout > FrameLayout[childCount=1] > ImageView',
      snapshotUrls: 'https://i.gkd.li/i/13187751',
    },
  ],
});
