#!/usr/bin/env node

const fse = require('fs-extra');
const fs = require('fs').promises;
const path = require('path');
const kuxToMp4 = require('./kux_to_mp4');
const file_path = process.argv[2];

/**
 * 拆包kux成mp4
 * @param filepath kux文件路径
 * @returns {Promise<string>} 转换成功的文件路径
 */
async function convertKuxToMp4(filepath) {
  const stat = await fs.stat(filepath);
  if (!stat.isFile()) {
    throw new Error(`is not a file: ${filepath}`);
  }
  const file = await kuxToMp4(filepath, filepath + '.mp4');
  return Promise.resolve(file);
}

async function main() {
  const exists = await fse.pathExists(file_path);
  if (exists) {
    const stat = await fs.stat(file_path);
    if (stat.isDirectory()) { // 批量拆包一个文件夹下面的kux文件
      console.log(`convert files in directory: ${file_path}`);
      const files = fse.readdirSync(file_path);
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(file);
        let filepath = `${file_path}\\${file}`;
        if (path.extname(filepath) === '.kux') {
          const file = await convertKuxToMp4(filepath);
          console.log(`converted: ${file}`);
        }
      }
    } else { // 拆包一个kux文件
      console.log(`convert file: ${file_path}`);
      await convertKuxToMp4(file_path);
      return Promise.resolve();
    }
  } else {
    throw new Error(`file does not exit: ${file_path}`);
  }
}

main().then(
  () => {
  }
).catch(err => {
  console.error(err)
});





