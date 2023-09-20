import React from "react";

import "../App.css";

export default function NFTDetails({ apiResponse }) {
    if (!apiResponse || !apiResponse.nft) {
      // Handle the case where apiResponse or apiResponse.nft is undefined
      return (
        <section className="nft-details">
          <div className="nft-soft-details">
            <p>No NFT data available.</p>
          </div>
          <div className="nft-hard-details"></div>
        </section>
      );
    }
    console.log(apiResponse);
    // If response is valid, destructure the data
    const { image_url, name, collection, identifier, contract } = apiResponse.nft;
    const {owners} = apiResponse.nft.owners.address;
    // Shorten up the contract number sometime soon
    // return component
    return (
      <section className="nft-details">
        <div className="nft-soft-details">
          <img src={image_url} alt={name || "NFT Image"} />
          <div className="container">
            <div className="container sub-cont">
                <p className="nft-details-p">by <span className="bolded collectionName">{collection}</span></p>
                <p className="nft-details-p">NFT ID #<span className="bolded indentifierNum">{identifier}</span></p>
                <p className="nft-details-p">Contract #<span className="bolded collectionNum">{contract}</span></p>  
                <p className="nft-details-p">Owners <span className="bolded collectionNum">{owners}</span></p>

            </div>
          </div>
        
        </div>
      </section>
    );
  }