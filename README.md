# MogPunks Mint Frame

A Farcaster Frame-enabled NFT minting experience for the MogPunks collection. Built with Next.js and optimized for seamless minting directly within Farcaster clients.

## Features

- 🖼️ **Farcaster Frame Integration** - Mint NFTs directly from Farcaster without leaving the app
- 🎫 **Invite List Support** - Free mints for allowlisted addresses via Scatter.art
- 💰 **Public Minting** - Open minting with configurable price and quantity limits
- 📊 **Live Mint Tracking** - Real-time display of minted NFTs and collection stats
- 🎨 **Collection Gallery** - View all minted NFTs with metadata and IPFS images
- 📱 **Mobile Optimized** - Responsive design that works great on all devices

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- An Alchemy API key for RPC access
- A Neynar API key for Farcaster user data
- Access to the contract on Base mainnet

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mogpunks-mint-frame.git
cd mogpunks-mint-frame
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your `.env.local` file:
```env
# Required
ALCHEMY_RPC_URL=https://base-mainnet.g.alchemy.com/v2/YOUR_KEY
NEYNAR_API_KEY=your_neynar_api_key

# Contract Configuration (server-side)
CONTRACT_ADDRESS=0x4c8574512C09f0dCa20A37aB24447a2e1C10f223
COLLECTION_SLUG=farcasterinterns

# Contract Configuration (client-side)
NEXT_PUBLIC_CONTRACT_ADDRESS=0x4c8574512C09f0dCa20A37aB24447a2e1C10f223
NEXT_PUBLIC_COLLECTION_SLUG=farcasterinterns
NEXT_PUBLIC_DEFAULT_MINT_PRICE=0.002
NEXT_PUBLIC_DEFAULT_MAX_QUANTITY=25
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── generate-mint-tx/   # Generates mint transactions
│   │   ├── invite-lists/       # Checks allowlist eligibility
│   │   └── mintees/           # Fetches minter data
│   ├── globals.css            # Global styles and CSS variables
│   ├── layout.js              # Root layout with Roboto font
│   └── page.js                # Main page component
├── components/
│   ├── CollectionDisplay.jsx   # Shows collection stats
│   ├── FrameInit.jsx          # Initializes Farcaster Frame SDK
│   ├── MintForm.jsx           # Main minting interface
│   ├── MintedNFTs.jsx         # Gallery of minted NFTs
│   └── Navigation.jsx         # App navigation
└── hooks/
    └── useNftMetadata.js      # Fetches NFT metadata
```

## Key Features

### Farcaster Frame Integration
The app uses `@farcaster/frame-sdk` to enable minting directly within Farcaster clients. Users can connect their wallet and mint without leaving the Farcaster app.

### Invite Lists
Free mints are available for addresses on Scatter.art invite lists. The app automatically checks eligibility and tracks remaining mints per wallet.

### Public Minting
When invite lists are exhausted, users can mint publicly at the configured price (default: 0.002 ETH).

### Live Updates
The collection display and minted NFTs gallery update in real-time as new mints occur on-chain.

## Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Import the project to [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to set all required environment variables in your deployment platform:
- `ALCHEMY_RPC_URL`
- `NEYNAR_API_KEY`
- `CONTRACT_ADDRESS`
- `COLLECTION_SLUG`
- All `NEXT_PUBLIC_*` variables

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.