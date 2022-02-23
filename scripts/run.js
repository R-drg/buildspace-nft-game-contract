const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Johnny Lawrence", "Daniel Larusso", "Miguel Diaz"], // Names
    [
      "https://i.imgur.com/XQ0zMss.jpg", // Images
      "https://i.imgur.com/929Tz8h.jpg",
      "https://i.imgur.com/iKOeubL.jpg",
    ],
    [500, 1000, 750], // HP values
    [1000, 500, 750], // Attack damage values
    "John Kreese", // Boss name
    "https://i.imgur.com/YbLVbvC.jpg", // Boss image
    10000, // Boss hp
    75 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);

  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
