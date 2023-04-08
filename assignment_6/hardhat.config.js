require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        sepolia: {
            url: SEPOLIA_RPC_URL,
            chainId: 11155111,
            accounts: [PRIVATE_KEY],
        },
    },
    solidity: "0.8.17",
}
