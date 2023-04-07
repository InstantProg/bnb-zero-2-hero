const { expect, assert } = require("chai")

describe("MYERC721", async () => {
    // tell
    let user_owner
    let user2
    let user_3_nft_receiver
    let MYERC721Deployed
    beforeEach("deploy the smart contract with the given names", async () => {
        ;[user_owner, user2, user_3_nft_receiver] = await ethers.getSigners()
        const MYERC721Factory = await hre.ethers.getContractFactory(
            "MYERC721",
            {
                signer: user_owner,
            }
        )
        MYERC721Deployed = await MYERC721Factory.deploy("FarrukhCoin", "FC")
        await MYERC721Deployed.deployed()
        console.log("Contract Deployed")
        console.log(`The owner being: ${await user_owner.getAddress()}`)
        return MYERC721Deployed
    })
    it("Should return correct name", async function () {
        expect(await MYERC721Deployed.name()).to.equal("FarrukhCoin")
    })

    it("should return the symbol correctly", async function () {
        expect(await MYERC721Deployed.symbol()).to.equal("FC")
    })

    it("should mint new NFTs", async () => {
        MYERC721Deployed.mint(await user2.getAddress(), 1212, "first")
        expect(
            await MYERC721Deployed.balanceOf(await user2.getAddress())
        ).to.equal(1)
        console.log(
            `The amount of NFT of ${await user2.getAddress()} : ${await MYERC721Deployed.balanceOf(
                await user2.getAddress()
            )}`
        )
    })
    it("should transfer and NFT", async () => {
        await MYERC721Deployed.mint(await user2.getAddress(), 1212, "first")
        console.log(
            `The amount of NFT of  user2 (${await user2.getAddress()}) : ${await MYERC721Deployed.balanceOf(
                await user2.getAddress()
            )}`
        )
        await MYERC721Deployed.connect(user2).transferFrom(
            await user2.getAddress(),
            await user_3_nft_receiver.getAddress(),
            1212
        )

        console.log("Transfer went without error")
        expect(
            await MYERC721Deployed.balanceOf(
                await user_3_nft_receiver.getAddress()
            )
        ).to.equal(1)
        console.log(
            `The balance of the user_3_nft_receiver = ${await MYERC721Deployed.balanceOf(
                await user_3_nft_receiver.getAddress()
            )}`
        )
    })
})
