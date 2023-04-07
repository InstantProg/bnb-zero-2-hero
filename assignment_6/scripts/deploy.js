// imports
const { ethers, run, network } = require("hardhat")

// async main
async function main() {
    const MYERC721Factory = await ethers.getContractFactory("MYERC721")
    console.log("Deploying contract...")




    const MYERC721 = await MYERC721Factory.deploy()
    // await MYERC721.deployed()
    // console.log(`Deployed contract to: ${MYERC721.address}`)






    // Update the current value
    const transactionResponse = await MYERC721.store(7)
    await transactionResponse.wait(1)
    const updatedValue = await MYERC721.retrieve()
    console.log(`Updated Value is: ${updatedValue}`)
}

// async function verify(contractAddress, args) {
const verify = async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}

// main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
