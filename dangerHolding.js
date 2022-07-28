const walletHelper = require("../app/helpers/wallet.helper");
const wallet = walletHelper.getWalletByIndex(1);
console.log(wallet.privateKey);
