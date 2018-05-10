/** @module networks */

module.exports = {
  /** @type {Network} */
  know: {
    messagePrefix: '\x18Ark Signed Message:\n',
    bip32: {
      public: 0x2bf4968, // base58 will have a prefix 'apub'
      private: 0x2bf4530 // base58Priv will have a prefix 'apriv'
    },
    name: 'mainnet',
    nethash: 'b01088283714100609a1eda4568cdb56aafc7f66e0154d567d3ade2a54c8cb17”',
    token: 'KNOW',
    symbol: 'KN',
    pubKeyHash: 0x17, // Addresses will begin with 'A'
    explorer: 'https://explorer.knownetwork.io',
    wif: 0xaa, // Network prefix for wif generation
    activePeer: {
      ip: 'localhost',
      port: 4001
    },
    peers: [
      { ip: '5.39.9.240', port: 4001 }
    ],
  },
  /** @type {Network} */
  testnet: {
    messagePrefix: '\x18Know Testnet Signed Message:\n',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    name: 'devnet',
    nethash: 'b01088283714100609a1eda4568cdb56aafc7f66e0154d567d3ade2a54c8cb17”',
    token: 'DKNOW',
    symbol: 'DK',
    pubKeyHash: 0x52, // Addresses will begin with 'a'
    explorer: 'https://dev.explorer.knownetwork.io',
    wif: 0xba, // Network prefix for wif generation
    activePeer: {
      ip: 'localhost',
      port: 4002
    },
    peers: [
      { ip: 'localhost', port: 4002 }
    ]
  },
  /** @type {Network} */
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    wif: 0x80
  }
}
