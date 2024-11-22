# Payment Processing UI

This project is a user interface for the payment processing system. It allows users to manage and process payments efficiently.

## Project Structure

```
payment-processing-ui/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js
│   ├── main.jsx
│   └── ...
├── .env
|__ .env.sample
├── package.json
└── README.md
```

## Features

- Payment processing

## Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/emmanuelayinde/Payment-Card-Processing-UI.git
cd payment-processing-ui
```

2. Install dependencies:

```sh
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:

```env
VITE_SQUARE_APPLICATION_ID=your_application_id
VITE_SQUARE_ACCESS_TOKEN=your_access_token
```

4. Start the development server:

```sh
npm start
```

5. Open your browser and navigate to `http://localhost:5173`.

## Scripts

- `yarn dev`: Starts the development server.
- `yarn build`: Builds the app for production.
- `yarn start`: Start the app for production.
