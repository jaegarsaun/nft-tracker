// api.js
const sdk = require('api')('@opensea/v2.0#4gioue1qll6w3x3p');

// Function to authenticate with your API key
function authenticate() {
  sdk.auth('a4b9bd53e6f84bc9bdb4124d2ed4c614');
}

// Export the authenticated SDK instance
module.exports = { authenticate, sdk };
