// tags

class Tag {
    #_taglistStr
    #_tagList
    #_first

    get tagList() {
        return this.#_tagList;
    }

    set tagList(value) {
        this.#_tagList = value;
    }

    get first() {
        if (this.tagList.length > 0) {
            this.#_first = this.tagList[0]
        }
        return this.#_first;
    }

    get taglistStr() {
        return this.#_taglistStr;
    }

    set taglistStr(value) {
        this.#_taglistStr = value;
    }

    constructor(tags) {
        this.taglistStr = tags
        this.tagList = tags.trim().split('\n')
    }
}

module.exports = {Tag}