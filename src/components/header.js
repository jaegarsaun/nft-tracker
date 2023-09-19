import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
// Import api
import alchemy from "../apis/alchemyapi";
// Import API tools
import { fromHex } from "alchemy-sdk";

export default function Header() {
  const [inputValue, setInputValue] = useState("");
  const [buttonState, setButtonState] = useState("Next");
  const [placeholderState, setPlaceholderState] = useState(
    "Collection Contact Address"
  );
  const [contractAddress, setContractAddress] = useState("");

  const handleChange = (e) => {
    // Step 3: Update state when input value changes
    setInputValue(e.target.value);
  };

  async function handleClick() {
    if (buttonState === "Next") {
      // Collect the contract address
      setContractAddress(inputValue);
      setInputValue(""); // Clear any previous input
      setButtonState("Search");
      setPlaceholderState("NFT ID Number");
    } else if (buttonState === "Search") {
      // Collect the NFT ID number
      const nftId = parseInt(inputValue);

      console.log("Collection Contact Address stage 2:", contractAddress);
      console.log("NFT ID Number:", nftId);

      // Contract address

      let address = [contractAddress];

      // Get all NFTs
      const response = await alchemy.core.getAssetTransfers({
        fromBlock: "0x0",
        contractAddresses: address,
        category: ["erc721"],
        excludeZeroValue: false,
      });

      // Get transactions for the NFT
      let txns = response.transfers.filter(
        (txn) => fromHex(txn.erc721TokenId) === nftId
      );
      console.log(txns);

      // Reset the states
      setInputValue(""); // Clear the input
      setButtonState("Next");
      setPlaceholderState("Collection Contact Address");
    }
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
          placeholder={placeholderState}
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
            {buttonState}
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
}
