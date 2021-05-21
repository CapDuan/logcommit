// commit
const {REG_PATTERN} = require('../utils/reg')

class Commit {
    hash;
    shortHash;
    date;
    author;
    authorEmail;
    commitType;
    commitTypeLabel;
    message;
    shortMessage;

    /**
     *   @Description 解析commit类型
     *   @author wenchao
     *   @date: 2021/5/21
     */
    parserCommitType(message) {
        let type = 'chore';
        let typeLabel = '其他'
        let keyList = ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert']
        let keyLabelList = ['新增', '修复', '文档', '代码格式化', '重构', '性能优化', '增加测试', '构建', '持续优化', '其他', '回退']
        keyList.forEach((val, index) => {
            if ((message.toLowerCase()).startsWith(val)) {
                type = val;
                typeLabel = keyLabelList[index]
            }
        })

        return {
            type, typeLabel
        }
    }

    constructor(commitData) {
        let hash = new RegExp(REG_PATTERN.hash).exec(commitData) || ['', '']
        let date = new RegExp(REG_PATTERN.date).exec(commitData) || ['', '']
        let author = new RegExp(REG_PATTERN.author).exec(commitData) || ['', '']
        let authorEmail = new RegExp(REG_PATTERN.authorEmail).exec(commitData) || ['', '']
        let message = new RegExp(REG_PATTERN.message).exec(commitData) || ['', '']

        this.hash = hash[1]
        this.shortHash = this.hash.substring(0, 8)
        this.date = new Date(date[1])
        this.author = author[1]
        this.authorEmail = authorEmail[1]
        this.message = message[1]
        this.commitType = (this.parserCommitType(this.message)).type
        this.commitTypeLabel = this.parserCommitType(this.message).typeLabel
        this.shortMessage = this.message.split('\n')[0]
    }
}

module.exports = {Commit}

// let temp = `__LOGCOMMIT__COMMIT__
// hash:@{b36163d7f2cf417838d79bab2a2fca09d1678159}
// date:@{2021-05-18 16:29:46 +0800}
// author:@{段文超}
// authorEmail:@{duanwenchao@medlingker.com}
// message:
// @{docs(添加gitignore): 添加gitignore
//
// 添加gitignore
// }
// __LOGCOMMIT_MESSAGE__
// `
// console.log(temp.toLowerCase())