# 🐱 HNG Stage 0 - Profile API

A simple **RESTful API** built with **Node.js** and **Express.js** for the HNG Stage 0 task.  
The API returns your profile information and a dynamic **cat fact** fetched from an external API.

---

## 🚀 Features
- GET `/me` endpoint that returns:
  - Your email, name, and backend stack
  - A random cat fact (from [Cat Facts API](https://catfact.ninja/fact))
  - Current UTC timestamp in ISO 8601 format
- Dynamic data on every request
- Graceful error handling if the external API fails
- CORS enabled for easy testing

---

## 🧩 Technologies Used
- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **Axios** – For HTTP requests

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

git clone https://github.com/izuchukwuMcGibson/HNG-task-0.git
cd HNG-task-0
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Run the server locally
bash
Copy code
node server.js
OR (if using nodemon for auto-reload)

bash
Copy code
npm run dev
4️⃣ Visit the endpoint
Open your browser or use Postman to test:


http://localhost:3000/me
You’ll get a response like:

json
Copy code
{
  "status": "success",
  "user": {
    "email": "mcgibsononyekachukwu@gmail.com",
    "name": "Izuchukwu McGibson Onyekachukwu",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T19:23:14.357Z",
  "fact": "Cats sleep for 70% of their lives."
}
🧰 Dependencies
Package	Description
express	Web server framework
axios	HTTP client for API requests
nodemon (optional)	Auto-restarts the server on changes during development

Install all dependencies with:

npm install
💡 Notes
The /me endpoint fetches a new cat fact for every request.

If the Cat Facts API is unreachable, a fallback message is returned.

The timestamp updates dynamically with each request.

📜 License
This project is open-source and available under the MIT License.

👨‍💻 Author
McGibson Izuchukwu Onyekachukwu
Backend Developer (Node.js/Express)


