CREATE TABLE store(
 `store_id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT NOT NULL,
 `store_name` VARCHAR(30) NOT NULL UNIQUE,
 `store_cnpj` CHAR(14) NOT NULL,
 `store_phone` CHAR(10) NOT NULL,
 `store_cellphone` CHAR(11) NOT NULL, 
  `address_id` INT
);

ALTER TABLE store ADD CONSTRAINT store_address FOREIGN KEY (address_id) REFERENCES  usrAddress(address_id);