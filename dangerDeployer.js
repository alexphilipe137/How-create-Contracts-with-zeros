const ethers = require("ethers");
const fs = require("fs");

function mnemonic() {
  try {
    return fs.readFileSync("./mnemonic.txt").toString().trim();
  } catch (e) {
    console.log("☢️ Error: No mnemonic file found.");
    process.exit();
  }
}

let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic());
console.log(mnemonicWallet.privateKey);
