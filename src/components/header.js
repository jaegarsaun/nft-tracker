import React from "react";
import "../App.css";
import { useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
// Import api
import alchemy from "../apis/alchemyapi";

// Import API tools
import { fromHex } from "alchemy-sdk";

export default function Header() {
  // State to store input value
  const [inputValue, setInputValue] = useState("");
  const [buttonState, setButtonState] = useState("Next");
  const [placeholderState, setPlaceholderState] = useState(
    "Collection Contact Address"
  );
  const [contractAddress, setContractAddress] = useState("");

  const toast = useToast(); // Defining Chakra UI toast for later use
  const handleChange = (e) => {
    // Update input value when user types
    setInputValue(e.target.value);
  };
  // Function to handle button click
  async function handleClick() {
    if (buttonState === "Next") {
      // Check to see what state the button is in
      // Input validation
      const ethereumAddressRegex = /^(0x)?[0-9a-fA-F]{40}$/; //Etherium address regex
      if (!ethereumAddressRegex.test(inputValue)) {
        // If the input fails the etherium address regex test
        //Display error toast
        toast({
          title: "Input a valid Contact Address",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return; // Exit the function
      }
      // Code to be ran if the test passed
      setContractAddress(inputValue); // Set the contract address state
      setInputValue(""); // Clear any previous input
      // Display success toast so user knows the input was valid
      toast({
        title: "Success!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setButtonState("Search"); // Change the button state
      setPlaceholderState("NFT ID Number"); // Change the placeholder text
    } else if (buttonState === "Search") {
      // Check to see what state the button is in
      // Input validation
      const nftIdRegex = /^[0-9]+$/; //NFT ID regex
      if (!nftIdRegex.test(inputValue)) {
        // If the input fails the NFT ID regex test
        // Display error toast so user knows the input was invalid
        toast({
          title: "Input a valid NFT ID Number",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return; // Exit the function
      }
      // Code to be ran if the test passed
      // Collect the NFT ID number
      const nftId = parseInt(inputValue); // Parse the input value to an integer so it is usable in the API call

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-API-KEY": process.env.REACT_APP_OPENSEA_API,
        },
      };

      const url = `https://api.opensea.io/v2/chain/ethereum/contract/${contractAddress}/nfts/${nftId}`;

      fetch(url, options)
        .then((response) => response.json())
        .then((response) =>{
          // If the API call was successful let the user know by using a Chakra UI toast
          toast({
            title: "Success!",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          // Console log response. Later I will use this to display on the page
          console.log(response);

        })
        .catch((err) => {
          // Catch any errors
          // Display error toast so user knows something went wrong
          toast({
            title: "Something went wrong",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          console.error(err);
        });

      

      // Reset the states after the API call so the user can search again
      setInputValue(""); // Clear the input
      setButtonState("Next"); // Change the button state
      setPlaceholderState("Collection Contact Address"); // Change the placeholder text
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
