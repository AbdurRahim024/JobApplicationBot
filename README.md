# Job Application Bot Backend

This is the backend service for the Job Scraper project. It uses **Node.js**, **Express**, and **MongoDB Atlas** via **Mongoose** to manage users, jobs, and applications.

---

## Prerequisites

Before starting, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or newer)
- npm (comes with Node.js)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Emma003/JobApplicationBot.git
cd backend
```

### 2. Installing Dependencies
```bash
npm install
```

### 3. Create .env file in backend folder and paste the following. Make sure to replace your-username and your-password
```bash
PORT=5000
MONGO_URI=mongodb+srv://<your-username>:<your-password>@cluster0.yb3x3.mongodb.net/job-application-db?retryWrites=true&w=majority&appName=Cluster0
```

### 4. To run
```bash
npm start
```


