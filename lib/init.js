const {promisify} = require('util')
//大号字体
const figlet = promisify(require('figlet'))
//清除屏幕
const clear = require('clear')
//粉笔效果
const chalk = require('chalk')
//命令行
const Prompt = require("inquirer");
const {clone} = require('./download')
const initQuestions = name => [
    {
        type: "confirm",
        name: "isInit",
        message: `确定要在${chalk.green(name)}文件夹下创建项目?`,
        prefix: "?"
    },{
        type: 'input',
        message: '请输入文件夹名:',
        name:'name',
        when: function(answers) { // 当watch为true的时候才会提问当前问题
            return !answers.isInit
        },
        default:name
    }
];
module.exports = async name => {
    clear()
    const data = await figlet('welcome my-cli')
    console.log(chalk.green(data))
    try {
        const option = await Prompt.prompt(initQuestions(name));
        if(option.isInit){
            await clone(name)
        }else{
            await clone(option.name)
        }
    }catch (e) {
        console.log(chalk.red(e));
    }

}