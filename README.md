# Project Title

**Machine Coding Round - 2 (React.js)**

## Table of Contents

- Introduction
- Features
- Technologies Used
- Setup Instructions
- Pages Overview
  - RandomUser
  - RandomJokes
  - CatsListing
- Project Structure
- Additional Notes

## Introduction

This project is a submission for the 'Machine Coding Round - 2 (React.js)' assignment on the Masterji platform. It is a React application built using Vite, featuring three distinct pages that demonstrate different data fetching techniques, including infinite scrolling.

## Features

- **Random User Information**: Fetch and display random user data.
- **Random Jokes**: Fetch and display random jokes.
- **Cat Listings**: Fetch and display cat data with infinite scrolling.

## Technologies Used

- React with Vite
- React Router DOM for routing
- Axios for API communication
- libphonenumber-js for phone number formatting
- CSS for styling

## Setup Instructions

To set up and run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

## Project Structure

The project is structured as follows:

- `src`: The source code directory.
  - `main.jsx`: The main entry point of the application.
  - `App.jsx`: The main application component.
  - `pages`: A directory containing page-level components.
    - `CatsListing.jsx`: A component for listing cats.
    - `RandomJokes.jsx`: A component for displaying random jokes.
    - `RandomUser.jsx`: A component for displaying random user information.
  - `components`: A directory containing reusable components.
    - `RandomJokes`: A directory containing components related to random jokes.
      - `Hr.jsx`: A horizontal rule component.
      - `IconSave.jsx`: An icon component for saving.
      - `IconShare.jsx`: An icon component for sharing.
  - `assets`: A directory containing static assets.
    - `fonts`: A directory containing font files.
      - [Inter](cci:4://f:/Projects/Fullstack/MasterjiAssignmentMachineCodingRound2/src/assets/fonts/Inter/README.txt:0:0-14:0): A directory containing Inter font files.
      - `DM_Sans`: A directory containing DM Sans font files.

## Routing

The project uses React Router for client-side routing. The routes are defined in `src/main.jsx`.

## Styles

The project uses CSS for styling. The main stylesheet is located at `src/index.css`.

## Pages Overview

### RandomUser

This page fetches and displays random user details using the API:
`https://api.freeapi.app/api/v1/public/randomusers/user/random`.

**Components**: Navigation, User Image, Username, Contact, UserDetailsTable, etc.

**Features**:

- Displays user details like name, username, and contact information.
- Includes a reload button to fetch a new random user.

### RandomJokes

This page fetches and displays random jokes using the API:
`https://api.freeapi.app/api/v1/public/randomjokes/joke/random`.

**Components**: Joke, TopBar, UserDetails, etc.

**Features**:

- Displays a random joke.
- Includes error handling with a friendly message when the joke fails to load.

### CatsListing

This page fetches and displays different types of cats using the API:
`https://api.freeapi.app/api/v1/public/cats?page=1&limit=4`.

**Components**: CardsContainer, Card, etc.

**Features**:

- Implements infinite scrolling to load more cats as you scroll horizontally.

## Project Structure

Here's a brief overview of the project structure:

```css
src/
├── assets/
├── components/
│   ├── RandomUser/
│   ├── RandomJokes/
│   ├── CatsListing/
│   ├── ...
├── pages/
│   ├── RandomUser.jsx
│   ├── RandomJokes.jsx
│   ├── CatsListing.jsx
│   └── ...
├── App.jsx
├── main.jsx
├── index.css
└── ...
```
