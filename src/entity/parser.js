// 解析器
const _ = require('lodash')

class Parser {
    options = {}
    result;
    output;

    buildOutput(input) {
        let header = `生成时间：\`${new Date().toLocaleString()}\`\n`

        let title = ''
        let content = ''
        let footer = ''
        let keyList = ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert']
        let keyLabelList = ['新增', '修复', '文档', '代码格式化', '重构', '性能优化', '增加测试', '构建', '持续优化', '其他', '回退']
        keyList.forEach((val, index) => {
            title = keyLabelList[index]
            for (const inputKey in input) {
                let commitListWithtype = input[inputKey]
                if (val === inputKey) {
                    // TODO 解析
                    // console.log(title)
                    content += `## ${title}\n`
                    commitListWithtype.forEach((commit, index) => {
                        content += `- ${commit.shortMessage.replace(`${inputKey}(`, '').replace(`): `, ':')}\`${commit.author}\`    \n`
                        if (this.options.ifDetail) {
                            content += `> ${commit.message.replace(/\n/g, '  \n> ')}    \n`
                        }
                    })
                }
            }
        })
        return header + content + footer
    }

    constructor(commitList, options) {
        this.options = options
        this.result = _.groupBy(commitList, val => {
            return val.commitType
        })
        this.output = this.buildOutput(this.result)
        console.log(this.output)
    }
}

module.exports = {
    Parser
}
