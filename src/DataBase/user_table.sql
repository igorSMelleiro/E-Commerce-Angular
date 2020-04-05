CREATE TABLE user(
    usr_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    usr_name varchar(30) NOT NULL,
    usr_email varchar(50) NOT NULL UNIQUE,
    usr_password varchar(255) NOT NULL UNIQUE,
    prod_id INT,
    usrDetail_id INT
 );


ALTER TABLE user ADD CONSTRAINT usr_detail FOREIGN KEY (usrDetail_id) REFERENCES  usrDetail(usrDetail_id);