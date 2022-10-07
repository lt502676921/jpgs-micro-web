export const fetchResource = async url => await (await fetch(url)).text()
