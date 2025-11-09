# ZTM E-commerce Application Documentation

## Table of Contents
1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Core Features](#core-features)
5. [State Management](#state-management)
6. [Authentication](#authentication)
7. [Styling](#styling)
8. [Responsive Design](#responsive-design)
9. [Components](#components)
10. [Firebase Integration](#firebase-integration)
11. [Routing](#routing)
12. [Getting Started](#getting-started)

## Overview
This is a modern e-commerce application built with React that provides a complete shopping experience with features like user authentication, shopping cart management, category browsing, and a dark/light theme toggle.

## Technology Stack
- **Frontend Framework**: React 18
- **Routing**: React Router v6
- **Styling**: 
  - Styled Components
  - SCSS
- **Backend/Authentication**: Firebase
- **State Management**: React Context API
- **Notifications**: React Toastify
- **Build Tool**: Create React App

## Project Structure
```
src/
├── assets/             # Static assets
├── components/         # Reusable UI components
├── contexts/          # React Context providers
├── Pages/             # Main page components
├── utils/             # Utility functions
└── App.js             # Main application component
```

## Core Features

### Shopping Features
- Product catalog with categories
- Shopping cart functionality
- Checkout process
- Product filtering and preview

### User Interface
- Responsive design for mobile and desktop
- Dark/Light theme toggle
- Cart dropdown
- Category previews
- Interactive product cards

### User Features
- User authentication (Sign up/Sign in)
- Google authentication integration
- User session management
- Profile management

## State Management

### Context Providers
- `UserContext`: Manages user authentication state
- `CartContext`: Handles shopping cart state
- `ProductContext`: Manages product catalog
- `ThemeContext`: Controls application theme

### Cart Functionality
```javascript
// Cart operations
- Add to cart
- Remove from cart
- Update quantities
- Calculate totals
```

## Authentication

### Methods
- Email/Password authentication
- Google Sign-in
- User session persistence

### Firebase Integration
```javascript
// Firebase services used
- Authentication
- Firestore (Database)
- Google Auth Provider
```

## Styling

### Styling Solutions
- Styled Components for dynamic styling
- SCSS for static styles
- Responsive design breakpoints
- Theme support

### Theme Implementation
```javascript
// Theme variables
- Light theme colors
- Dark theme colors
- Responsive breakpoints
```

## Responsive Design

### Breakpoints
```scss
- Mobile: max-width: 425px
- Tablet: 426px to 768px
- Desktop: > 768px
```

## Components

### Core Components
- `Navigation`: Main navigation bar
- `Directory`: Product category display
- `ProductCard`: Individual product display
- `CartDropdown`: Shopping cart preview
- `CheckoutItem`: Cart item display
- `FormInput`: Reusable form input

### Page Components
- `Home`: Landing page
- `Shop`: Product browsing
- `Authentication`: User auth pages
- `Checkout`: Cart completion

## Firebase Integration

### Features
```javascript
// Firebase utilities
- User authentication
- Document creation
- Data fetching
- Collection management
```

## Routing

### Routes
```javascript
// Main application routes
- '/' - Home page
- '/shop/*' - Shop with nested routes
- '/authentication' - Sign in/Sign up
- '/checkout' - Cart checkout
```

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account for backend services

### Installation Steps
1. Clone the repository
```bash
git clone https://github.com/KingsIke/ZTM-Ecoms.git
cd ZTM-Ecoms
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory and add your Firebase configuration:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

4. Start the development server
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
