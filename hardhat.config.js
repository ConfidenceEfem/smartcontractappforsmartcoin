require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: `${process.env.MY_RINKBY_URL}`,
      accounts: [`${process.env.MY_PRIVATE_KEY}`],
    } 
  }
};