
import './App.css';
import { useState } from 'react';
//Components
import Header from './components/header';
import NFTDetails from './components/nftdetails';


function App() {
    const [apiResponse, setApiResponse] = useState(null); // State to hold API response data
    // Function to handle API response data
    const handleApiResponse = (data) => {
      setApiResponse(data);
    };
  return (
    <div>
      <Header handleApiResponse={handleApiResponse} />
      <NFTDetails apiResponse={apiResponse} />
    </div>
  );
}

export default App;
