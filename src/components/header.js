import React from "react";
import "../App.css";
import { useState } from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
// Import api
import alchemy from "../apis/alchemyapi";
// Import API tools
import { fromHex } from "alchemy-sdk";



export default function Header() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    // Step 3: Update state when input value changes
    setInputValue(e.target.value);
  };

  async function handleClick() {
    // Get inputted address
  
    console.log(inputValue);
    setInputValue("");
  
  
  
    // // Contract address ( Will need to set this to user inputted address)
    // const address = ["0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"];
    // // Get all NFTs
    // const response = await alchemy.core.getAssetTransfers({
    //   fromBlock: "0x0",
    //   contractAddresses: address,
    //   category: ["erc721"],
    //   excludeZeroValue: false,
    // });
    
  
  
    // // Will need to set this NFT ID to the one that is inputted
    // const nftId = 3;
  
    // // Get transactions for the NFT
    // let txns = response.transfers.filter(
    //   (txn) => fromHex(txn.erc721TokenId) === nftId
    // );
    // // Eventually instead of console logging we will show the transactions on the page
    // console.log(txns);
  }

  return (
    <div className="header">
      <h1>
        From Pixels to Profits <br></br>Tracking NFTs Through Time.
      </h1>
      <p className="spacer">
        Join us on a journey through time and technology, where pixels transform
        into profits, and where NFT history is both documented and made.
      </p>
      <InputGroup size="md">
        <Input
          placeholder="Collection Contact Address"
          pr="4.5rem"
          size="lg"
          variant="Filled"
          focusBackgroundColor="red"
          value={inputValue} 
          onChange={handleChange} 
        />
        <InputRightElement
          width="4.5rem"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginRight="0.5rem"
        >
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            Next
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
}
