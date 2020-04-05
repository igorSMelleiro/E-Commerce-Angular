CREATE TABLE `usrDetail`(
    `usrDetail_id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `usrDetail_firstPhone` varchar(15) NOT NULL UNIQUE,
    `usrDetail_secondPhone` varchar(15), 
    `usrDetail_birthday` DATE NOT NULL,
    `usrDetail_cpf` INT(12) NOT NULL
);
