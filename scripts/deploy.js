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
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

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
