const {promisify} = require('util')
//下载
const download = promisify(require('download-git-repo'))
const ora = require('ora')
module.exports.clone = async (desc) => {

    //进度条

    const process = ora(`下载中...}`)
    process.start()
    try {
        const repo = 'github:yjj603/my-template'
        process.color = "green";
        await download(repo,desc)
        process.succeed()
    }catch (e) {
        process.color = "red";
        process.text = "下载失败";
        process.fail();
    }
}