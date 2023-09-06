/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (vehicleName, vehicleBrand, vehicleType, vehicleColor, vehicleReleaseYear) {
    const carsNFT = {
        name        :   vehicleName,
        brand       :   vehicleBrand,
        type        :   vehicleType,
        color       :   vehicleColor,
        releaseYear :   vehicleReleaseYear,    
    }
    NFTs.push(carsNFT);
    console.log("Minted:\t",vehicleName);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("======== LIST OF CAR NFTs ========");
    for (let i = 0; i < NFTs.length; i++) {
        console.log("ID:\t",i+1);
        console.log("Vehicle Name:\t\t",NFTs[i].name);
        console.log("Vehicle Brand:\t\t",NFTs[i].brand);
        console.log("Vehicle Type:\t\t",NFTs[i].type);
        console.log("Vehicle Color:\t\t",NFTs[i].color);
        console.log("Vehicle Release:\t",NFTs[i].releaseYear,"\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("======== TOTAL SUPPLY NFTs ========");
    console.log("Total Supply:\t",NFTs.length);
}

// call your functions below this line
console.log("========  MINTED CAR NFTs  ========");
mintNFT("GR SUPRA","Toyota","Sports Car","White",2023);
mintNFT("Huracán","Lamborghini","Sports Car","Green",2023);
mintNFT("Vito Sport","Mercedez-Benz","Van","Black",2022);
mintNFT("Strada","Mitsubishi","Pick-up","Orange",2023);
console.log("")
listNFTs();
getTotalSupply();