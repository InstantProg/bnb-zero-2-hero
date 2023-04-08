const hre = require("hardhat")

const receiver_account = "0x23fCcD37427809B01c5fE14c4b5A95131995eA25"

async function main() {
    console.log("Starting to deploy....")
    const MYERC721 = await hre.ethers.getContractFactory("MYERC721")
    console.log(MYERC721)
    console.log("Waiting to be deployed...")
    const myERC721 = await MYERC721.deploy("FarrukhCoin", "FC")

    await myERC721.deployed()

    console.log(`Contract is deployed to ${await myERC721.address}`)

    console.log(
        `The balance of receiver BEFORE mint : ${await myERC721.balanceOf(
            receiver_account
        )}`
    )

    console.log("Passing balanceOF")

    console.log("Minting....")
    await myERC721.mint(receiver_account, 1212, "first")

    console.log("Minted")
    //check the balance of the receiver
    const address_receiver_pure = await myERC721.ownerOf(1212)
    console.log(
        `The balance of receiver AFTER mint : ${await myERC721.balanceOf(
            address_receiver_pure
        )}`
    )
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
