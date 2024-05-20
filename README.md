# URL Shortener Web App

## Overview

This is a URL Shortener web application that allows users to shorten long URLs. The application includes user authentication for login and signup. Registered users can log in to shorten URLs and manage their shortened links.

## Features

- User Authentication:
  - User registration (signup)
  - User login
  - Secure password storage
- URL Shortening:
  - Generate short URLs from long URLs
  - Redirect to original URL using the short URL
- User Dashboard:
  - Manage shortened URLs
  - View original and shortened URLs

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
- **Frontend**:
  - React.js
  - Vite
- **Authentication**:
  - JWT (JSON Web Token)
- **Other**:
  - Bcrypt.js (for password hashing)
  - Dotenv (for environment variables)

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/coderxshayar/url-Shortener.git
    cd url-Shortener
    ```

2. Install dependencies for both the backend and frontend:

    ```sh
    cd Backend
    npm install
    cd ../Frontend
    npm install
    ```

3. Create a `.env` file in the `Backend` directory and add the following environment variables:

    ```env
    PORT=5000
    mongoUrl=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:

    ```sh
    cd Backend
    npm start
    ```

5. Start the frontend development server:

    ```sh
    cd ../Frontend
    npm run dev
    ```

6. Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage

1. **Sign Up**: Register a new user account.
2. **Log In**: Log in with your registered credentials.
3. **Shorten URL**: Enter a long URL to generate a short URL.
4. **Manage URLs**: View and manage your shortened URLs in the user dashboard.


