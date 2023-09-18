import React from "react";
import "../App.css";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

export default function Header() {
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
          placeholder="NFT Address"
          pr="4.5rem"
          size="lg"
          variant="Filled"
          focusBackgroundColor="red"
        />
        <InputRightElement width="4.5rem" height="100%" display="flex" justifyContent="center" alignItems="center" marginRight="0.5rem">
          <Button h="1.75rem" size="sm">
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
}
