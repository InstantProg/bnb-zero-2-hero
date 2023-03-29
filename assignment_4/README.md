# DogCoin Smart Contract
The DogCoin is a simple ERC20 token contract that allows users to transfer tokens between addresses and increase the total supply of tokens.

##Functions
**Constructor**: Sets the initial total supply and assigns tokens to the contract owner.
**IncreaseInStepThousand**: Increases the total supply by 1,000 (only accessible by the owner).
**Transfer**: Transfers DogCoin tokens from one address to another and updates the balances and payments mapping.
## Events
**TotalSupplyChanged**: Emitted when the total supply of DogCoin tokens is increased.
**SuccessfulTransfer**: Emitted when a transfer of DogCoin tokens is successful.
## Modifiers
**OnlyOwner**: Restricts certain functions to be accessed only by the contract owner.