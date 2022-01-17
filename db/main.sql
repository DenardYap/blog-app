#CREATE DATABASE IF NOT EXISTS main;
USE main;

CREATE TABLE IF NOT EXISTS posts(
	id INT PRIMARY KEY auto_increment,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(50) NOT NULL,
    content TEXT(65535) NOT NULL,
    date_created DATE NOT NULL
);
# ALTER TABLE posts AUTO_INCREMENT = 1;

SELECT * FROM posts;  	
        