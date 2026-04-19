# 💰 FinTrack API – Personal Finance Backend System

## 📌 Overview

FinTrack API เป็นระบบ Backend แบบ RESTful ที่ออกแบบมาเพื่อจัดการข้อมูลการเงินส่วนบุคคล
ให้ผู้ใช้สามารถบันทึกรายรับ รายจ่าย ดูสรุปข้อมูล และบริหารจัดการข้อมูลการเงินของตนเองได้อย่างปลอดภัย

---

## 🚀 Features

* 🔐 User Authentication (Register / Login with JWT)
* 🔒 Protected Routes (Middleware)
* 💰 Transaction Management (CRUD)
* 📊 Financial Summary (Income, Expense, Balance)
* 🔍 Filter Transactions (by type)
* 🛡️ User Data Isolation (each user accesses only their own data)

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* RESTful API Design

---

## 📂 API Endpoints

### 🔐 Auth

* POST /auth/register
* POST /auth/login

---

### 💰 Transactions

* GET /transactions
* GET /transactions?type=income
* POST /transactions
* PUT /transactions/:id
* DELETE /transactions/:id

---

### 📊 Summary

* GET /transactions/summary

---

## 🔑 Authentication

All protected routes require JWT token:

Authorization: Bearer <token>

---

## ▶️ How to Run

```bash
npm install
npm run dev
```

Create `.env` file:

```
DB_URL=your_mongodb_url
JWT_SECRET=your_secret_key
```

---

## 🧠 Key Concepts

* RESTful API design
* Middleware authentication
* Data ownership (user-based access control)
* CRUD operations
* Business logic implementation (financial summary)

---

## 📌 Future Improvements

* Filter by date range
* Category-based analytics
* Pagination
* Deployment (AWS / Render)

---

## API Testing (Postman)

```bash
Explore the API via Postman
```
* https://documenter.getpostman.com/view/47036038/2sBXqDtNv7#f0fa4e75-4a81-46a4-92ca-bb49c22b5b7b
