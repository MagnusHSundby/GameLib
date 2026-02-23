# Get Started with GameLib
Welcome to GameLib a simple game library. 
## Prerequisites

- Your own [MariaDB](https://mariadb.com/) running locally
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed

## 1) Clone the repository

Clone this repo into your preferred location.

## 2) Install dependencies

From the project root, run:

```bash
cd frontend
npm install

cd ../backend
npm install
```

## 3) Configure backend environment

Create a `.env` file in the backend root:

`backend/.env`

Add:
```env
BACKEND_PORT=your-port-number
DB_HOST=localhost
DB_USER=your-user
DB_PASSWORD=your-password
DB_NAME=database-name
```

## 4) Run the app locally

Open 2 terminals and navigate to the root of the project.
Start frontend and backend in separate terminals:

Terminal 1:

```bash
cd frontend
npm run dev
```

Terminal 2:

```bash
cd backend
npm run dev
```