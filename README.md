
# 📦 Simple Inventory Management System

A basic inventory management backend built using **ExpressJS**, **MongoDB (Mongoose)**, and tested using **Postman**.

---

## ✅ Features
- ExpressJS server running on **port 3000**
- Routes:
  - `GET /` → API status message
  - `GET /health` → Server health check
  - `POST /items` → Add a new inventory item
  - `GET /items` → Fetch all items
- Middleware:
  - Logs request method and URL
  - Handles **404 errors** with JSON response
- MongoDB connection using **Mongoose**
- Tested with **Postman** (Collection included)

---

## ✅ Project Structure
```
inventory-api/
│
├── server.js          # Main server file
├── models/
│   └── Item.js        # Mongoose schema
├── routes/
│   └── itemRoutes.js  # Routes for items
├── middleware/
│   └── logger.js      # Custom middleware
├── .env               # MongoDB URI (hidden)
├── package.json
└── README.md
```

---

## ✅ Installation & Setup

### 1. **Clone the repository**
```bash
git clone https://github.com/<your-username>/inventory-api.git
cd inventory-api
```

### 2. **Install dependencies**
```bash
npm install
```

### 3. **Create .env file**
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/inventory
```

### 4. **Run the server**
```bash
npm run dev   # For development (with nodemon)
npm start     # For production
```

Server will run at: `http://localhost:3000`

---

## ✅ API Endpoints

### 1. **Check API status**
**GET** `/`
```
Response: "Inventory API is Running"
```

### 2. **Server health check**
**GET** `/health`
```
Response: { "status": "Server is healthy", "uptime": <number> }
```

### 3. **Add a new item**
**POST** `/items`
```json
{
  "name": "Laptop",
  "quantity": 10,
  "price": 1500
}
```

### 4. **Get all items**
**GET** `/items`
```
Response: [
  {
    "_id": "xxxx",
    "name": "Laptop",
    "quantity": 10,
    "price": 1500
  }
]
```

---

## ✅ Testing with Postman
- Import the **Postman collection** provided in the repository OR use these endpoints manually.
- Test `GET`, `POST`, and other routes.

---

## ✅ Submission
- Upload this project to **GitHub**
- Include:
  - Complete code
  - This README.md file
  - Postman collection or screenshots of successful API calls

---

## ✅ Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- Postman

---
