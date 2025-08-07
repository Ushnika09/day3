# 📚 Book Management REST API

Welcome to my RESTful adventure!  
This is a clean and simple CRUD API built using **Node.js** and **Express**, allowing you to manage a list of books stored in memory.

> 🔁 I used this task as a chance to **revisit my basics, revise core concepts**, and build something solid from scratch — and it felt GOOD! 💪

🔗 **Live Repo:** https://github.com/Ushnika09/day3

---

## 🔧 Features

This mini-library lets you:

- 📖 `GET /books` – View all books  
- 🔍 `GET /books/:id` – Get a single book by ID  
- ➕ `POST /books` – Add a new book (with title & author)  
- ✏️ `PUT /books/:id` – Replace an entire book  
- 🩹 `PATCH /books/:id` – Update parts of a book (like just the title)  
- 🗑️ `DELETE /books/:id` – Remove a book  

> Built with ❤️ using Express.js and stored in-memory — no databases, just pure backend magic.

---

## 🧠 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

---

## 🚀 How to Run Locally

# Clone the repository
git clone https://github.com/Ushnika09/day3.git
cd day3

# Install dependencies
npm install

# Start the server
node index.js
Server runs at: http://localhost:3000

🔐 Notes
Data is stored in memory — restarting the server resets the book list
Proper status codes, error handling, and JSON responses are included
Built without overcomplicating — just clean REST fundamentals

🎯 Why I Built This
This was Task 3 for the Elevate Labs Web Development Internship.
But more than that — it was my personal checkpoint.
To slow down, revisit the foundations, and walk out saying:

“Yes, I get this now.”
