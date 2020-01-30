const kuxToMp4 = require('../src/kux_to_mp4');

const kuxFile = 'D:\\Program Files (x86)\\YouKu\\Youku Files\\download\\晓说 第一季\\揭秘奥斯卡黑幕‘’ 看奥斯卡如何走下“神坛”_1080p.kux';
const targetPath = 'D:\\Program Files (x86)\\YouKu\\Youku Files\\download\\晓说 第一季\\揭秘奥斯卡黑幕‘’ 看奥斯卡如何走下“神坛”_1080p.mp4';

kuxToMp4(kuxFile, targetPath).then(filepath => {
  console.log(`converted: ${filepath}`);
}).catch(err => {
  console.error(err);
});
