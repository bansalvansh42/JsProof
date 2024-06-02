/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

const NFTHolder = [];
function mintNFT (_actorName, _actressName, _songName, _movieName) {
    const NFT = {
        "actorName": _actorName,
        "actressName": _actressName,
        "songName": _songName,
        "movieName": _movieName
    }
    NFTHolder.push(NFT);
    console.log("Minted: "+ _actorName);
}

function listNFTs () {
    for(let i = 0; i < NFTHolder.length; ++i){
        console.log();
        console.log("Actor Name: \t\t" + NFTHolder[i].actorName);
        console.log("Actress Name: \t\t" + NFTHolder[i].actressName);
        console.log("Song Name: \t\t" + NFTHolder[i].songName);
        console.log("Movie Name: \t\t" + NFTHolder[i].movieName);
    }
}
function getTotalSupply() {
    console.log("\nTotal number NFTs held: "+NFTHolder.length);
}


mintNFT("Salman", "Katrina", "Ruaan", "Tiger 3");
mintNFT("ShahRukh", "Katrina", "Challa", "Jab Tak Hai Jaan");
mintNFT("Akshay", "Katrina", "Hoth Rasiley", "Welcome");
listNFTs();
getTotalSupply();
