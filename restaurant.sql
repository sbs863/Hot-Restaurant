CREATE DATABASE restaurantDB;

CREATE TABLE restaurantDB.guests (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    name VARCHAR(100),
    phoneNumber INTEGER(11),
    email VARCHAR(100),
    PRIMARY KEY (id));