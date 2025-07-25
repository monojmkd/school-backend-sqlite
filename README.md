# 🏫 School Management Backend API

A robust RESTful API for managing **students**, **teachers**, and **classrooms**. Built with **Node.js**, **Express**, and **Sequelize** ORM using an SQLite database for easy local setup and development.

## 📦 Features

- ✅ **Seed the database** with initial data for teachers, classrooms, and students
- 👩‍🏫 **CRUD operations for Teachers**
- 🏫 **CRUD operations for Classrooms**
- 👨‍🎓 **CRUD operations for Students**
- 🔗 **Relational data modeling**: Students belong to Classrooms; Classrooms are assigned to Teachers
- ⚠️ **Structured error handling** with clear status codes and messages

## 🧱 Tech Stack

- **Backend:** Node.js, Express  
- **ORM/Database:** Sequelize (using SQLite for development)  
- **Environment:** Localhost

## 🚀 Getting Started

### Prerequisites

- [Node.js & npm](https://nodejs.org/)  
- No separate database server required — uses SQLite file

### Installation

1. **Clone the repository**  
    ```
    git clone https://github.com/<your-username>/<repo-name>.git
    cd <repo-name>
    ```

2. **Install dependencies**  
    ```
    npm install
    ```

3. **Seed the database with initial data**  
    Start the server, then hit the following endpoint:
    ```
    GET /seed_db
    ```
    _This will create tables and populate them with data from `data.json`._

4. **Run the server**  
    ```
    npm start
    ```
    The server will run on [http://localhost:3000](http://localhost:3000).

## 🛠️ API Endpoints

| Entity     | Method | Endpoint                | Description                     |
|------------|--------|------------------------ |---------------------------------|
| Teacher    | GET    | `/teachers/`            | List all teachers               |
|            | GET    | `/teachers/:id`         | Get a teacher by ID             |
|            | POST   | `/teachers/`            | Add a new teacher               |
|            | PUT    | `/teachers/:id`         | Update a teacher by ID          |
|            | DELETE | `/teachers/:id`         | Delete a teacher by ID          |
| Classroom  | GET    | `/classrooms/`          | List all classrooms             |
|            | GET    | `/classrooms/:id`       | Get a classroom by ID           |
|            | POST   | `/classrooms/`          | Add a new classroom             |
|            | PUT    | `/classrooms/:id`       | Update a classroom by ID        |
|            | DELETE | `/classrooms/:id`       | Delete a classroom by ID        |
| Student    | GET    | `/students/`            | List all students               |
|            | GET    | `/students/:id`         | Get a student by ID             |
|            | POST   | `/students/`            | Add a new student               |
|            | PUT    | `/students/:id`         | Update a student by ID          |
|            | DELETE | `/students/:id`         | Delete a student by ID          |
| Seed       | GET    | `/seed_db`              | Seed DB with demo data          |

### Data
- A sample json data is provided to test the endpoints.
### Relationships

- **Each student** belongs to a classroom.
- **Each classroom** is assigned to a teacher.
- **A teacher** can have multiple classrooms.

## ⚠️ Error Handling

- Uses meaningful status codes: `200`, `201`, `400`, `404`, `500`
- Returns structured error messages for invalid input or not found resources

## 🤝 Contributing

Pull requests and issues are welcome! Fork the project and help improve the backend.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- [Express Documentation](https://expressjs.com/)  
- [Sequelize Documentation](https://sequelize.org/)  
- [SQLite](https://www.sqlite.org/)
