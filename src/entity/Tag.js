// tags

class Tag {
    #_taglistStr
    get taglistStr() {
        return this.#_taglistStr;
    }

    set taglistStr(value) {
        this.#_taglistStr = value;
    }

    constructor(tags) {
        this.taglistStr = tags
    }
}

module.exports = {Tag}