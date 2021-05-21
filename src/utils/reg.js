const REG_PATTERN = {
    commit: /__LOGCOMMIT__COMMIT__([\s\S]*?)__LOGCOMMIT_MESSAGE__/g,
    hash: /hash:@\{([\s\S]*?)\}/g,
    date: /date:@\{([\s\S]*?)\}/g,
    author: /author:@\{([\s\S]*?)\}/g,
    authorEmail: /authorEmail:@\{([\s\S]*?)\}/g,
    message: /message:\n@\{([\s\S]*?)\}/g
}
module.exports = {
    REG_PATTERN
}