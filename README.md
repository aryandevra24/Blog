# 📝 Blogify

A modern full-stack blogging platform built with **React**, **Vite**, **Appwrite**, and **Tailwind CSS**.

Blogify allows users to create, edit, publish, and manage blog posts with a clean and responsive interface. It features secure authentication, rich text editing, image uploads, and dynamic content rendering powered by Appwrite.

---

## 🚀 Live Demo

🔗 https://bloging24.netlify.app/

---

## ✨ Features

- 🔐 User Authentication (Login / Signup)
- 📝 Create, Edit, and Delete Blog Posts
- 🖼️ Image Upload & Storage with Appwrite
- ✍️ Rich Text Editor (TinyMCE)
- 🔗 Automatic SEO-friendly Slug Generation
- 📱 Fully Responsive Design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast Performance with Vite
- 🗂️ Post Management Dashboard
- 🔄 State Management using Redux Toolkit
- ☁️ Backend Services powered by Appwrite

---

## 🖼️ Preview

Blogify provides a clean and modern blogging experience where users can:

- Create and publish articles
- Upload featured images
- Edit existing posts
- Browse all published content
- Manage authentication securely

---

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite
- Tailwind CSS 4
- React Router
- React Hook Form
- Redux Toolkit

### Backend

- Appwrite

### Editor

- TinyMCE Rich Text Editor

### Other Libraries

- HTML React Parser

---

## 📂 Project Structure

```text
Blogify/
│
├── public/
│
├── src/
│   ├── appwrite/
│   │   ├── auth.js
│   │   └── config.js
│   │
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── PostForm/
│   │   ├── RTE/
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── AddPost.jsx
│   │   ├── EditPost.jsx
│   │   └── Post.jsx
│   │
│   ├── store/
│   │   └── authSlice.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ How It Works

### Authentication

Users can:

- Sign up for a new account
- Log in securely
- Stay authenticated using Appwrite sessions

### Blog Management

Authenticated users can:

- Create new blog posts
- Upload featured images
- Edit existing posts
- Delete posts
- Publish or manage post status

### Rich Text Editing

TinyMCE provides:

- Text formatting
- Headings
- Lists
- Media embedding
- Rich content creation

### Storage

Appwrite Storage handles:

- Featured image uploads
- Image previews
- Secure file management

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APPWRITE_URL=YOUR_APPWRITE_ENDPOINT
VITE_APPWRITE_PROJECT_ID=YOUR_PROJECT_ID
VITE_APPWRITE_DATABASE_ID=YOUR_DATABASE_ID
VITE_APPWRITE_COLLECTION_ID=YOUR_COLLECTION_ID
VITE_APPWRITE_BUCKET_ID=YOUR_BUCKET_ID
```

---

## 🗄️ Appwrite Setup

### Create a Project

1. Create a new Appwrite project.
2. Copy the Project ID.

### Database

Create a database and collection with fields:

```text
title           String
content         String
featuredImage   String
status          String
userId          String
```

### Storage Bucket

Create a bucket for blog images.

For development:

```text
Read Access:
Any
```

### Authentication

Enable:

```text
Email / Password Authentication
```

---

## 🚀 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/aryandevra24/Blog.git
```

### 2. Navigate to Project Folder

```bash
cd Blog
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file and add your Appwrite credentials.

### 5. Start Development Server

```bash
npm run dev
```

### 6. Open Browser

```text
http://localhost:5173
```

---

## 💡 Future Improvements

- 🌙 Dark Mode
- ❤️ Like & Bookmark System
- 💬 Comment Section
- 🔍 Search & Filters
- 📊 User Dashboard Analytics
- 📌 Featured Posts
- 🏷️ Categories & Tags
- 🌍 Multi-language Support
- 📱 Progressive Web App (PWA)

---

## 📜 License

This project is open source and free to use.
