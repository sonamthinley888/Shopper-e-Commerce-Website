# Shopper E-Commerce Website

## Overview

Shopper is a simple e-commerce website that allows users to browse, search, and interact with products. This project focuses on building the core functionalities of an e-commerce website, including user authentication, product management, and cart features. Note that checkout and payment features are not implemented.

## Features

- **User Authentication:** Users can sign up, log in, and log out.
- **Product Management:** Users can browse products, view product details, and search for items.
- **Shopping Cart:** Users can add products to their cart for future viewing.
- **Responsive Design:** The website is fully responsive, ensuring a good user experience across devices.

## Tech Stack

### Frontend:

- **React.js** - JavaScript library for building user interfaces.
- **Firebase** - For deployment and user authentication.

### Backend:

- **Node.js** - JavaScript runtime for building the backend.
- **Express.js** - Web framework for Node.js to handle routing.
- **MongoDB** - NoSQL database for storing product and user data.
- **Multer** - Middleware for handling image uploads.
- **Google Cloud Storage** - For storing product images.

## Project Structure

The project is divided into two main parts: **frontend** and **backend**.

### Frontend

The frontend is built with **React.js** and deployed using **Firebase Hosting**.

### Backend

The backend is built with **Node.js** and **Express.js**, with **MongoDB** used to store product and user data.

## Installation

### Prerequisites:

Before you start, ensure you have the following installed:

- Node.js (v22.12.0 or later)
- MongoDB
- Firebase CLI (for frontend deployment)
- Google Cloud SDK (for managing cloud storage)

### Setup Instructions:

1. **Clone the Repository**  
   Clone the project to your local machine:
   ```bash
   git clone https://github.com/sonamthinley888/shopper-ecommerce-website.git
   cd shopper-ecommerce-website
   ```

### Install Backend Dependencies

Navigate to the backend folder and install the necessary packages:

cd backend
npm install

### Setup MongoDB

Make sure MongoDB is running locally or use a cloud service like MongoDB Atlas.
Update your config.js or .env file with your MongoDB connection string.

### Set up Google Cloud Storage

Create a Google Cloud project and enable Cloud Storage.
Set up a service account and download the credentials JSON file.
Set the environment variable GOOGLE_APPLICATION_CREDENTIALS to the path of your credentials file.

### Start the Backend Server

Launch the backend server:

npm start
Install Frontend Dependencies
Navigate to the frontend folder and install the required dependencies:

cd frontend
npm install
Configure Firebase
Set up Firebase for hosting and authentication.
Add your Firebase credentials to the frontend’s Firebase configuration file.

### Deploy Frontend

Deploy the frontend to Firebase hosting:

firebase deploy
Access the Website
Open your browser and navigate to the Firebase hosting URL to see the application in action.

## Usage

Once the app is up and running, you can:

Sign up / Log in: Create an account or log in to start using the app.
Browse Products: View available products, search, and filter them.
View Product Details: See detailed information for each product.
Add to Cart: Add products to your shopping cart for later viewing.

### Contributing

We welcome contributions! If you'd like to improve this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -m 'Add new feature').
Push to your forked repository (git push origin feature-branch).
Open a pull request.

### License

Feel free to open an issue or contact me if you encounter any problems or have any questions.
