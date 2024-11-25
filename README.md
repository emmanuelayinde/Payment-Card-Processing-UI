# Payment Processing UI

This project is a user interface for the payment processing system. It allows users to manage and process payments efficiently.

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
cd Payment-Card-Processing-UI
```

2. Install dependencies:

```sh
yarn
```

3. Create a `.env` file in the root directory and add the following environment variables:

```env
VITE_SQUARE_APPLICATION_ID=your-sqaure-application-id
VITE_SQUARE_LOCATION_ID=your-square-location-id
```

4. Start the development server:

```sh
yarn dev
```

5. Open your browser and navigate to `http://localhost:5173`.

## Running the Application

- Open your browser and navigate to `http://localhost:5173`.
- Enter the following to make sudo payment:

```
Card Number: 4111 1111 1111 1111
Expire Date: 12/27
CVV Number: 111
ZIP: 100001
```

- Copy the token generated and head over to the [server api docs](https://payment-card-processing-server.onrender.com/api-docs#/Payments/PaymentsController_createPayment) page and use the token as the payment `sourceId`

## Scripts

- `yarn dev`: Starts the development server.
- `yarn build`: Builds the app for production.
- `yarn start`: Start the app for production.
