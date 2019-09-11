// const init = require('./init')
const os = require('os')

let homeDir = os.homedir()
let platform = os.platform()
let tmpDir = os.tmpdir()
let gameDir = homeDir

if (platform == "darwin") {
  gameDir += "/Games/World\ of\ Warcraft/_classic_/Interface/AddOns" 
}

$(".addons-path").val(gameDir)