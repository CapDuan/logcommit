// 解析器
const _ = require('lodash')

class Parser {
    result;
    output;

    buildOutput(input) {
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
                    commitListWithtype.forEach(commit => {
                        content += commit.shortMessage + '\n'
                    })
                }
            }
        })
        return content + footer
    }

    constructor(commitList) {
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
