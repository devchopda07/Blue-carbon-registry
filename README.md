# Blue Carbon
A full-stack application for managing blue carbon projects with blockchain integration, MongoDB persistence, and PDF report generation.

## Features

- **Project Management**: Create, view, and manage blue carbon projects
- **Image Upload**: Upload and display project images with preview
- **Blockchain Integration**: Smart contracts for project verification and carbon credit tokens
- **Database Persistence**: MongoDB for storing projects, reports, and transactions
- **Admin Panel**: Complete database management and project approval system
- **PDF Reports**: Generate downloadable PDF reports with images for projects and carbon data
- **Real-time Data**: Live statistics and transaction tracking

## Tech Stack

### Frontend
- React 19 with Vite
- Bootstrap 5 for UI components
- React Router for navigation

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Multer for file uploads
- PDFKit for PDF generation with images
- Ethers.js for blockchain interaction

### Blockchain
- Solidity smart contracts
- Hardhat development environment
- Local Hardhat network

## Quick Start (Windows)

### Option 1: Automated Setup
1. **Run the setup script**: Double-click `start-all.bat`
2. **Wait for all services to start** (MongoDB, Hardhat, Backend, Frontend)
3. **Open your browser** to `http://localhost:5173`

### Option 2: Manual Setup

#### 1. Prerequisites
- Node.js (v18 or higher)
- MongoDB Community Server
- Git

#### 2. Database Setup
```bash
# Create MongoDB data directory
mkdir C:\data\db

# Start MongoDB
mongod --dbpath C:\data\db
```

#### 3. Blockchain Setup
```bash
cd blockchain
npm install

# Start Hardhat local network (in one terminal)
npx hardhat node

# Deploy contracts (in another terminal)
npm run deploy
```

#### 4. Backend Setup
```bash
cd backend
npm install
npm start
```

#### 5. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Configuration

The system automatically loads contract addresses from `blockchain/deployed-addresses.json`. No manual configuration needed!

### Manual Configuration (if needed)
Update `backend/config.js`:
```javascript
export const config = {
  MONGODB_URI: "mongodb://127.0.0.1:27017/bluecarbon",
  PRIVATE_KEY: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", // Hardhat account #0
  RPC_URL: "http://127.0.0.1:8545",
  CONTRACT_ADDRESS: "auto-loaded-from-deployment",
  MRV_CONTRACT_ADDRESS: "auto-loaded-from-deployment"
};
```

## Usage

### Creating Projects
1. Navigate to the Projects page
2. Click "Add New Project"
3. Fill in project details (name, location, description, trees planted)
4. **Upload an image** (optional): Select an image file and click "Upload Image"
5. Submit to create the project in MongoDB and blockchain

### Admin Functions
1. Go to Admin panel
2. View database statistics in Overview tab
3. Approve projects in Projects tab
4. Monitor blockchain transactions in Transactions tab
5. Manage reports in Reports tab

### Blockchain Integration
- **Automatic Deployment**: Contracts deploy automatically with `npm run deploy`
- **Real-time Sync**: Projects are stored in MongoDB AND synced to blockchain
- **Smart Verification**: Admin approval triggers blockchain verification
- **Carbon Credits**: Automatic BCC token awards (10 tokens per tree)
- **Transaction Logging**: All blockchain transactions stored in MongoDB
- **Gas Tracking**: Monitor gas usage for each transaction
- **Status Monitoring**: Real-time blockchain connection status

## API Endpoints

### Projects
- `GET /api/projects` - List all projects
- `POST /api/projects` - Create new project
- `POST /api/projects/:id/approve` - Approve project
- `GET /api/projects/:id/download` - Download project PDF with images

### File Upload
- `POST /api/upload/image` - Upload project image (max 5MB)

### Reports
- `GET /api/reports` - List all reports
- `GET /api/reports/:id/download` - Download report PDF
- `POST /api/admin/reports` - Create new report

### Admin
- `GET /api/admin/stats` - Get database statistics
- `GET /api/admin/projects` - Get all projects for admin
- `GET /api/admin/transactions` - Get blockchain transactions
- `GET /api/admin/reports` - Get all reports for admin

### Blockchain
- `GET /api/blockchain/status` - Get blockchain connection status
- `GET /api/blockchain/balance/:address` - Get wallet BCC token balance

## Smart Contracts

### BlueCarbonRegistry
- Manages project registration and verification
- Stores project metadata on blockchain
- Admin-only verification function

### MRV (Measurement, Reporting, Verification)
- ERC20 token for carbon credits
- Awards credits based on planted trees
- Admin-controlled minting

## Development

### Running Tests
```bash
cd blockchain
npm test
```

### Building for Production
```bash
cd frontend
npm run build
```

### Database Management
Access MongoDB directly:
```bash
mongosh mongodb://127.0.0.1:27017/bluecarbon
```

## Troubleshooting

### Common Issues
1. **MongoDB Connection Error**: Ensure MongoDB is running on port 27017
2. **Blockchain Connection Error**: Check if Hardhat node is running
3. **Contract Not Found**: Verify contract addresses in config.js
4. **PDF Generation Error**: Check PDFKit installation

### Logs
- Backend logs: Check terminal running `npm start`
- Frontend logs: Check browser console
- Blockchain logs: Check Hardhat node terminal

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details
