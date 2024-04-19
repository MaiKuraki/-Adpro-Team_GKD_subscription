import { defineGkdApp } from "@gkd-kit/define";

export default defineGkdApp({
  id: 'com.wibo.bigbang.ocr',
  name: '布丁扫描',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches:
            '[id="com.wibo.bigbang.ocr:id/vivo_upgrade_negative_btn"][text="忽略本次"]',
          snapshotUrls: 'https://i.gkd.li/i/13360281',
        },
      ],
    },
  ],
});
