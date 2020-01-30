const exec = require('child_process').exec;
const config = require('../config/config');

module.exports = async function (filepath, targetPath) {
  return new Promise((resolve, reject) => {
    // 调用优酷的ffmpeg库拆包kux文件
    exec(`"${config.youkuFfmpegFilepath}" -y -i "${filepath}" -c:v copy -c:a copy -threads 2 "${targetPath}"`,
      (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        resolve(targetPath);
      });
  });
};
