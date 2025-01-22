# Shopper E-Commerce Website

## Overview

Shopper is a simple e-commerce website that allows users to browse and search for products. This project focuses on frontend and backend functionalities without checkout and payment features.

## Features

- User authentication (sign up, login, logout)
- Browse and search for products
- Add products to cart
- View product details
- Responsive design

## Tech Stack

### Frontend:

- **React.js**
- **Firebase** (for deployment)

### Backend:

- **Node.js**
- **Express.js**
- **MongoDB** (for storing product and user data)
- **Render** (for backend deployment)
- **Multer** for handling image uploads
- **Google Cloud Storage** (for storing product images)

## Project Structure

The project is divided into two main parts: **frontend** and **backend**.

### Frontend:

The frontend is built with **React.js** and deployed using **Firebase Hosting**.

frontend/ ├── .firebase/ # Firebase configuration files ├── .firebaserc # Firebase project settings ├── public/ # Static files (e.g., index.html, images) ├── src/ # React components and pages │ ├── Components/ # Reusable components (e.g., buttons, navigation) │ └── Pages/ # Pages of the website (e.g., home, product details, cart) ├── .gitignore # Git ignore file ├── README.md # Project documentation ├── firebase.json # Firebase hosting and functions config ├── index.html # HTML template ├── package.json # Frontend dependencies and scripts └── package-lock.json # Dependency lock file

csharp
Copy
Edit

### Backend:

The backend is built with **Node.js** and **Express.js**, with **MongoDB** used to store product and user data.

backend/ ├── config/ # Configuration files (e.g., MongoDB, Google Cloud) ├── node_modules/ # Node.js dependencies ├── upload/images/ # Directory to store uploaded images ├── .gitignore # Git ignore file ├── README.md # Backend documentation ├── index.js # Main entry point for the backend ├── package.json # Backend dependencies and scripts └── package-lock.json # Dependency lock file

markdown
Copy
Edit

## Installation

### Prerequisites:

Ensure you have the following installed:

- Node.js (v22.12.0 or later)
- MongoDB
- Firebase CLI (for frontend deployment)
- Google Cloud SDK (for managing cloud storage)

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/sonamthinley888/render-express-deployment.git
   cd shopper-ecommerce-website
   ```

### Install backend dependencies:

bash
Copy
Edit
cd backend
npm install
Set up MongoDB:

Ensure MongoDB is running locally or use a cloud service like MongoDB Atlas.
Update your config.js or .env file with your MongoDB connection string.
Set up Google Cloud Storage:

Create a Google Cloud project and enable Cloud Storage.
Set up a service account and download the credentials JSON file.
Set the environment variable GOOGLE_APPLICATION_CREDENTIALS to the path of the credentials file.
Start the backend server:

bash
Copy
Edit
npm start
Install frontend dependencies:

bash
Copy
Edit
cd frontend
npm install
Configure Firebase:

Set up Firebase for hosting and authentication.
Add your Firebase credentials to the frontend's Firebase configuration file.
Deploy the frontend:

bash
Copy
Edit
firebase deploy
Open your browser and go to the Firebase hosting URL to view the application.

### Usage

Sign up / Login: Users can create an account or log in to access product features.
Browse / Search Products: Users can explore and search for available products.
Add to Cart: Products can be added to the cart for future viewing.
Product Details: Detailed information about each product is displayed.
Contributing
If you'd like to contribute to the project, feel free to fork the repository, make changes, and submit a pull request. All contributions are welcome!
