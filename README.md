# BookShop Web Application

## 📋 Project Overview
**BookShop** is a comprehensive online bookstore built using the MERN stack (MongoDB, Express.js, React, Node.js). The application enables users to browse, search, and purchase books, manage their cart, wishlist, and orders, and leave reviews. It includes an admin panel for managing inventory, orders, and analytics, along with advanced features like loyalty points, coupons, and personalized recommendations.
Features

## ⚙️ Technologies Used:
- **React.js** Frontend library for dynamic user interfaces
- **Node.js** Runtime environment for the backend
- **Express.js** Backend framework for API development
- **MongoDB** Database for storing books, users, orders, and more
- **React Bootstrap** (for Styling)
- **Axios** (for API requests)
- **React Toastify** (for real-time notifications)
- **Quill Editor** (for blog post editing)
- **JWT** (authentication)
- **Tailwind** CSS (styling)
- **Papaparse** (CSV handling for analytics)
- **Nodemailer** (email notifications)
- **Jest** (testing)

## ✨ Features Include (Client Side):
- Browse and search books by title, author, category, or publisher
- User authentication (signup, login, logout)
- Add books to cart and wishlist
- Apply coupons and earn loyalty points
- View order history and track orders
- Write and read book reviews
- Receive notifications for order updates
- e.g...

## 🖥️ Features Include (Admin Dashboard):
- Manage books, categories, authors, publishers, and inventory
- Process orders and view analytics
- Create and manage coupons
- Moderate users and reviews
- e.g...

## Other Features:
- Responsive design for mobile and desktop
- Personalized book recommendations
- Email notifications and payment integration
- Blog section for book-related content

# Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** version 14 or above
- **npm** version 6 or above
- **MongoDB** (Local or MongoDB Atlas)
- **Text Editor or IDE** (e.g., VS Code)
- **Git**
- **Postman** (Optional, for API testing)

### Installation
1. Clone the repository:
   - `git clone https://github.com/your-username/bookshop.git`
   - `cd bookshop`
2. Install dependencies: 
- For the backend:
    - `cd backend`
    - `npm install`

- For the frontend:
    - `cd ../frontend`
    - `npm install`

3. Set up environment variables:
Create a `.env` file in the backend folder with the following:

    - `MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    PORT=5000
    EMAIL_USER=your_email_service_user
    EMAIL_PASS=your_email_service_password
    PAYMENT_API_KEY=your_payment_gateway_key
    `


      Create a .env file in the frontend folder with:
        - `REACT_APP_API_URL=http://localhost:5000/api`
        - Ensure MongoDB is running or use a MongoDB Atlas URI.

4. Run the application:
- Start the backend server:
  - `cd backend`
  - `npm run dev`

- Start the frontend:
  - `cd frontend`
  - `npm start`
    
  - The backend will run on http://localhost:5000, and the frontend will run on http://localhost:3000.

5. Access the application:
- Open your browser and navigate to `http://localhost:3000.`

## For Support, Contact:
- 📧 **Email**: `<xoandev163.com>` (e.g., xoandev163@gmail.com)
- 🌐 **GitHub**: `https://github.com/<NguyenNhatHuynh>`

(Status Project : in progress)
