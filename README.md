# 🏨 Wanderlust – Hotel Listing Platform

## 📌 Project Overview

**Wanderlust** is a full-stack hotel listing web application that allows users to **create, read, update, and delete (CRUD)** hotel listings. It features **user authentication**, image uploads, and a responsive design using **MVC architecture**. This project is built as a **college-level portfolio application** showcasing real-world development concepts.

## 🎯 Core Features

- 🏕️ Full **CRUD operations** for hotels
- 🔐 User authentication (register/login/logout)
- ✨ **Auto-login on sign-up** for seamless onboarding
- 📂 **MVC Architecture** for modular, maintainable code
- ⚙️ **Custom middleware** for route protection and error handling
- 🖼️ **Image upload** with Multer + Cloudinary integration
- 💻 Responsive and mobile-friendly using Bootstrap

---

## 🧑‍💻 Technologies Used

- **Frontend**:
  - HTML5
  - CSS3
  - Bootstrap 5

- **Backend**:
  - Node.js
  - Express.js

- **Database**:
  - MongoDB with Mongoose

- **Templating Engine**:
  - EJS (Embedded JavaScript)

- **File Upload & Cloud Storage**:
  - **Multer** – for handling `multipart/form-data` during uploads
  - **Cloudinary** – for cloud-based image storage and delivery

---

## 🖼️ Hotel Image Upload

- Users can upload hotel images while creating or editing listings.
- **Multer** is used to handle image upload form data.
- Uploaded images are stored in **Cloudinary**, and their URLs are saved in MongoDB.
- These images are then dynamically displayed on the site.

## 🚀 Additional Features

- ✅ **Auto Login on Signup** – New users are logged in automatically after registering.
- 🔐 **Session Management** – Uses `express-session` and `connect-mongo` for persistent sessions.
- ⚠️ **Custom Middleware**:
  - `isLoggedIn` – Protects routes for logged-in users only
  - `isAuthor` – Ensures only listing authors can edit/delete
  - Global error handler for catch-all errors
- 📛 Flash messages for success/failure notifications using `connect-flash`
  
 _Built as a college project to demonstrate full-stack web application development using modern practices._

 
##**Access the website here:** https://wanderlust-o02q.onrender.com/listings
