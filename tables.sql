CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL CHECK (LENGTH(name) <= 50 AND LENGTH(name) >= 3),
    password VARCHAR(255) NOT NULL CHECK (LENGTH(password) >= 7),
    email VARCHAR(255) UNIQUE NOT NULL
);