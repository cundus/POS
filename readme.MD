# POS Express.js API - Technical Test

This is a simple Express.js API created for a technical test.

## Getting Started

<!-- Ganti github usernamenya dandirectorynya -->

1. Clone the repository: `git clone https://github.com/cundus/POS.git`
2. Navigate to the project directory: `cd POS`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. Access the API at `http://localhost:3010`

## API Endpoints

-  `GET /api`: Get a welcome message.
-  `GET /api/products`: Get a list of products.
-  `POST /api/product/add`: Add new product.
-  `POST /api/transaction/add` : Add new transaction.

## Usage

You can test the API using tools like [curl](https://curl.se/) or [Postman](https://www.postman.com/):

1. Make a GET request to `http://localhost:3010/api` for the welcome message.
2. Make a GET request to `http://localhost:3010/api/products` to fetch the list of products.
