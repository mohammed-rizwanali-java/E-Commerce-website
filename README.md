🛒 E-Commerce Web Application
********************************

The E-Commerce Web Application is a full-stack web platform developed using Java, Spring Boot, React, and MySQL that enables users to browse products, manage carts, and perform secure operations through role-based authentication.

The backend provides secure RESTful APIs using Spring Security with JSON Web Token authentication. The system supports role-based access control with ADMIN and USER roles. Administrators can manage product data through CRUD operations, while users can browse products and manage their shopping cart.

The application integrates MySQL using JPA and Hibernate for efficient database operations. All backend APIs were tested and validated using Postman before integrating the React frontend.

🚀 Features
*************
Authentication & Security

JWT-based authentication

Role-based authorization (ADMIN / USER)

Secure REST API endpoints

 Admin Features
*****************
Add new products

Update product details

Delete products

Manage product inventory

User Features
****************
Browse available products

Add products to cart

Update cart items

Remove products from cart

⚡ System Features
***********************
Full-stack architecture

RESTful API design

Backend validation and exception handling

Responsive frontend interface

🛠 Tech Stack  Backend
**************************
Java

Spring Boot

Spring Security

JSON Web Token

MySQL

JPA / Hibernate

Frontend

 React

JavaScript (ES6+)

HTML5

CSS3

Tools

🧪 Postman for API testing

🔧 Git

📦 GitHub

📂 Project Structure
**********************
ecommerce-application
│
├── backend (Spring Boot)
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── security
│   └── exception
│
├── frontend (React)
│   ├── components
│   ├── pages
│   └── services
│
└── README.md

⚙️ Installation & Setup
***************************
1️⃣ Clone the Repository

git clone https://github.com/yourusername/ecommerce-application.git

2️⃣ Backend Setup
*******************
Navigate to backend folder

cd backend

Run Spring Boot application

mvn spring-boot:run

Backend runs on:

http://localhost:8080

3️⃣ Frontend Setup
*************************
Navigate to frontend folder

cd frontend

Install dependencies

npm install

Run React application

npm start

Frontend runs on:

http://localhost:3000

📡 Sample API Endpoints
*************************
Method	Endpoint	Description
----------------------------------
POST	/api/auth/login	  User login
POST	/api/auth/register	User registration
GET	/api/products	      Get all products
POST	/api/products	     Add product (Admin)
PUT	/api/products/{id}	  Update product
DELETE	/api/products/{id}	Delete product
POST	/api/cart	            Add item to cart
🎯 Purpose of the Project
***************************
This project demonstrates:

Full-stack application development

Secure authentication using JWT

Role-based access control

REST API development with Spring Boot

Frontend–backend integration using React

🔮 Future Improvements
************************
Implement order management system

Add payment gateway integration

Add product search and filtering

Add image upload for products

Deploy using Docker and cloud services

👨‍💻 Author

Parthiban

GitHub:
https://github.com/parthiban1716/Ecommerce_Website
