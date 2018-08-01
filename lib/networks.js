/** @module networks */

module.exports = {
  /** @type {Network} */
  know: {
    messagePrefix: '\x18KNOW Signed Message:\n',
    bip32: {
      public: 0x2bf4968, // base58 will have a prefix 'apub'
      private: 0x2bf4530 // base58Priv will have a prefix 'apriv'
    },
    name: 'mainnet',
    nethash: '295e7db37e230249e022d7cf9c603ef49a56a51de8c843923f52b6ae8e7f2e37”',
    token: 'KNOW',
    symbol: 'KN',
    pubKeyHash: 0x2d, // Addresses will begin with 'K'
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
    nethash: '295e7db37e230249e022d7cf9c603ef49a56a51de8c843923f52b6ae8e7f2e37”',
    token: 'DKNOW',
    symbol: 'DK',
    pubKeyHash: 0x17, // Addresses will begin with 'A'
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
