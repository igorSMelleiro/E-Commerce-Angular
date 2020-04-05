-- MySQL Workbench Synchronization
-- Generated: 2019-11-17 22:39
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Rafael Macris

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `ambardb_model` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`colors` (
  `color_id` INT(11) NOT NULL AUTO_INCREMENT,
  `color_name` VARCHAR(15) NULL DEFAULT NULL,
  `product_prod_id` INT(11) NOT NULL,
  PRIMARY KEY (`color_id`, `product_prod_id`),
  INDEX `fk_colors_product1_idx` (`product_prod_id` ASC) VISIBLE,
  CONSTRAINT `fk_colors_product1`
    FOREIGN KEY (`product_prod_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`complain` (
  `complain_id` INT(11) NOT NULL AUTO_INCREMENT,
  `complain_category` INT(11) NOT NULL,
  `complain_text` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`complain_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`product` (
  `prod_id` INT(11) NOT NULL AUTO_INCREMENT,
  `prod_categ` VARCHAR(20) NULL DEFAULT NULL,
  `prod_visits` INT(7) NULL DEFAULT 0,
  `prod_code` VARCHAR(45) NULL DEFAULT NULL,
  `prod_title` VARCHAR(250) NOT NULL,
  `prod_stockAmount` INT(2) NOT NULL DEFAULT 0,
  `prod_price` DECIMAL(9,2) NOT NULL DEFAULT 0,
  `prod_discount` INT(3) NULL DEFAULT 0,
  `prod_shippingfee` DECIMAL(7,2) NOT NULL DEFAULT 0,
  `user_usr_id` INT(11) NOT NULL,
  `store_store_id` INT(11) NULL DEFAULT NULL,
  `prod_insertTime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `prod_avaliation` DECIMAL(4,2) NULL DEFAULT NULL,
  `prod_avalCount` INT(11) NULL DEFAULT 0,
  PRIMARY KEY (`prod_id`, `user_usr_id`),
  INDEX `fk_product_user1_idx` (`user_usr_id` ASC) VISIBLE,
  INDEX `fk_product_store1_idx` (`store_store_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_user1`
    FOREIGN KEY (`user_usr_id`)
    REFERENCES `ambardb_model`.`user` (`usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_store1`
    FOREIGN KEY (`store_store_id`)
    REFERENCES `ambardb_model`.`store` (`store_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`store` (
  `store_id` INT(11) NOT NULL AUTO_INCREMENT,
  `store_name` VARCHAR(30) NOT NULL,
  `store_cnpj` VARCHAR(25) NOT NULL,
  `store_phone` VARCHAR(25) NULL DEFAULT NULL,
  `store_cellphone` VARCHAR(25) NULL DEFAULT NULL,
  `user_usr_id` INT(11) NOT NULL,
  PRIMARY KEY (`store_id`, `user_usr_id`),
  UNIQUE INDEX `store_name` (`store_name` ASC) VISIBLE,
  INDEX `fk_store_user1_idx` (`user_usr_id` ASC) VISIBLE,
  UNIQUE INDEX `user_usr_id_UNIQUE` (`user_usr_id` ASC) VISIBLE,
  CONSTRAINT `fk_store_user1`
    FOREIGN KEY (`user_usr_id`)
    REFERENCES `ambardb_model`.`user` (`usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`user` (
  `usr_id` INT(11) NOT NULL AUTO_INCREMENT,
  `usr_image` TEXT NULL DEFAULT NULL,
  `usr_name` VARCHAR(30) NOT NULL,
  `usr_email` VARCHAR(50) NOT NULL,
  `usr_password` VARCHAR(255) NOT NULL,
  `usr_cash` DECIMAL(9,2) NOT NULL DEFAULT 0,
  PRIMARY KEY (`usr_id`),
  UNIQUE INDEX `usr_email` (`usr_email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`address` (
  `address_id` INT(11) NOT NULL AUTO_INCREMENT,
  `address_streetName` VARCHAR(255) NOT NULL,
  `address_number` VARCHAR(15) NOT NULL,
  `address_cep` VARCHAR(15) NOT NULL,
  `address_city` VARCHAR(45) NOT NULL,
  `address_state` VARCHAR(45) NOT NULL,
  `address_country` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`address_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`usrdetail` (
  `usrDetail_id` INT(11) NOT NULL AUTO_INCREMENT,
  `usrDetail_firstPhone` VARCHAR(15) NOT NULL,
  `usrDetail_secondPhone` VARCHAR(15) NULL DEFAULT NULL,
  `usrDetail_birthday` DATE NOT NULL,
  `usrDetail_cpf` INT(12) NOT NULL,
  `user_usr_id` INT(11) NOT NULL,
  PRIMARY KEY (`usrDetail_id`, `user_usr_id`),
  UNIQUE INDEX `usrDetail_firstPhone` (`usrDetail_firstPhone` ASC) VISIBLE,
  INDEX `fk_usrdetail_user1_idx` (`user_usr_id` ASC) VISIBLE,
  CONSTRAINT `fk_usrdetail_user1`
    FOREIGN KEY (`user_usr_id`)
    REFERENCES `ambardb_model`.`user` (`usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`image` (
  `image_id` INT(11) NOT NULL AUTO_INCREMENT,
  `image_url` LONGTEXT NOT NULL,
  `product_prod_id` INT(11) NOT NULL,
  PRIMARY KEY (`image_id`, `product_prod_id`),
  INDEX `fk_image_product1_idx` (`product_prod_id` ASC) VISIBLE,
  CONSTRAINT `fk_image_product1`
    FOREIGN KEY (`product_prod_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`card` (
  `card_id` INT(11) NOT NULL AUTO_INCREMENT,
  `card_number` INT(16) UNSIGNED NOT NULL,
  `card_owner_name` VARCHAR(45) NOT NULL,
  `card_expiration_date` DATE NOT NULL,
  `card_cvc` INT(4) NOT NULL,
  `user_usr_id` INT(11) NOT NULL,
  PRIMARY KEY (`card_id`, `user_usr_id`),
  INDEX `fk_card_user1_idx` (`user_usr_id` ASC) VISIBLE,
  CONSTRAINT `fk_card_user1`
    FOREIGN KEY (`user_usr_id`)
    REFERENCES `ambardb_model`.`user` (`usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`favorites` (
  `fovarite_id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_usr_id` INT(11) NOT NULL,
  `product_prod_id` INT(11) NOT NULL,
  PRIMARY KEY (`fovarite_id`, `product_prod_id`, `user_usr_id`),
  INDEX `fk_favorites_user1_idx` (`user_usr_id` ASC) VISIBLE,
  INDEX `fk_favorites_product1_idx` (`product_prod_id` ASC) VISIBLE,
  CONSTRAINT `fk_favorites_user1`
    FOREIGN KEY (`user_usr_id`)
    REFERENCES `ambardb_model`.`user` (`usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_favorites_product1`
    FOREIGN KEY (`product_prod_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`orders` (
  `order_id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_usr_id` INT(11) NOT NULL,
  `product_prod_id` INT(11) NOT NULL,
  `product_user_usr_id` INT(11) NOT NULL,
  `order_amount` INT(4) NOT NULL DEFAULT 1,
  `order_type` INT(1) NULL DEFAULT NULL,
  `order_status` INT(1) NULL DEFAULT NULL,
  `store_store_id` INT(11) NULL DEFAULT NULL,
  `order_reqTime` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `address_address_id` INT(11) NOT NULL,
  PRIMARY KEY (`order_id`, `user_usr_id`, `product_prod_id`, `product_user_usr_id`, `address_address_id`),
  INDEX `fk_orders_user1_idx` (`user_usr_id` ASC) VISIBLE,
  INDEX `fk_orders_product1_idx` (`product_prod_id` ASC, `product_user_usr_id` ASC) VISIBLE,
  INDEX `fk_orders_store1_idx` (`store_store_id` ASC) VISIBLE,
  INDEX `fk_orders_address1_idx` (`address_address_id` ASC) VISIBLE,
  CONSTRAINT `fk_orders_user1`
    FOREIGN KEY (`user_usr_id`)
    REFERENCES `ambardb_model`.`user` (`usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_product1`
    FOREIGN KEY (`product_prod_id` , `product_user_usr_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id` , `user_usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_store1`
    FOREIGN KEY (`store_store_id`)
    REFERENCES `ambardb_model`.`store` (`store_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_address1`
    FOREIGN KEY (`address_address_id`)
    REFERENCES `ambardb_model`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`store_has_address` (
  `store_store_id` INT(11) NOT NULL,
  `store_user_usr_id` INT(11) NOT NULL,
  `address_address_id` INT(11) NOT NULL,
  PRIMARY KEY (`store_store_id`, `store_user_usr_id`, `address_address_id`),
  INDEX `fk_store_has_address_address1_idx` (`address_address_id` ASC) VISIBLE,
  INDEX `fk_store_has_address_store1_idx` (`store_store_id` ASC, `store_user_usr_id` ASC) VISIBLE,
  CONSTRAINT `fk_store_has_address_store1`
    FOREIGN KEY (`store_store_id` , `store_user_usr_id`)
    REFERENCES `ambardb_model`.`store` (`store_id` , `user_usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_store_has_address_address1`
    FOREIGN KEY (`address_address_id`)
    REFERENCES `ambardb_model`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`product_has_address` (
  `product_prod_id` INT(11) NOT NULL,
  `product_user_usr_id` INT(11) NOT NULL,
  `address_address_id` INT(11) NOT NULL,
  PRIMARY KEY (`product_prod_id`, `product_user_usr_id`, `address_address_id`),
  INDEX `fk_product_has_address1_address1_idx` (`address_address_id` ASC) VISIBLE,
  INDEX `fk_product_has_address1_product1_idx` (`product_prod_id` ASC, `product_user_usr_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_address1_product1`
    FOREIGN KEY (`product_prod_id` , `product_user_usr_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id` , `user_usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_address1_address1`
    FOREIGN KEY (`address_address_id`)
    REFERENCES `ambardb_model`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`user_has_address` (
  `user_usr_id` INT(11) NOT NULL,
  `address_address_id` INT(11) NOT NULL,
  PRIMARY KEY (`user_usr_id`, `address_address_id`),
  INDEX `fk_user_has_address_address1_idx` (`address_address_id` ASC) VISIBLE,
  INDEX `fk_user_has_address_user1_idx` (`user_usr_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_address_user1`
    FOREIGN KEY (`user_usr_id`)
    REFERENCES `ambardb_model`.`user` (`usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_address_address1`
    FOREIGN KEY (`address_address_id`)
    REFERENCES `ambardb_model`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`cart` (
  `cart_id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_usr_id` INT(11) NOT NULL,
  `product_prod_id` INT(11) NOT NULL,
  PRIMARY KEY (`cart_id`, `user_usr_id`, `product_prod_id`),
  INDEX `fk_cart_user1_idx` (`user_usr_id` ASC) VISIBLE,
  INDEX `fk_cart_product1_idx` (`product_prod_id` ASC) VISIBLE,
  CONSTRAINT `fk_cart_user1`
    FOREIGN KEY (`user_usr_id`)
    REFERENCES `ambardb_model`.`user` (`usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cart_product1`
    FOREIGN KEY (`product_prod_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`sell` (
  `sell_id` INT(11) NOT NULL AUTO_INCREMENT,
  `sell_amount` INT(5) NULL DEFAULT NULL,
  `sell_status` INT(1) NULL DEFAULT NULL,
  `user_usr_id` INT(11) NOT NULL,
  `product_prod_id` INT(11) NOT NULL,
  `product_user_usr_id` INT(11) NOT NULL,
  `client_id` INT(11) NOT NULL,
  `client_address_id` INT(11) NOT NULL,
  `sell_reqTime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`sell_id`, `user_usr_id`, `product_prod_id`, `product_user_usr_id`, `client_id`, `client_address_id`),
  INDEX `fk_sell_user1_idx` (`user_usr_id` ASC) VISIBLE,
  INDEX `fk_sell_address1_idx` (`client_address_id` ASC) VISIBLE,
  INDEX `fk_sell_product1_idx` (`product_prod_id` ASC, `product_user_usr_id` ASC) VISIBLE,
  INDEX `fk_sell_user2_idx` (`client_id` ASC) VISIBLE,
  CONSTRAINT `fk_sell_user1`
    FOREIGN KEY (`user_usr_id`)
    REFERENCES `ambardb_model`.`user` (`usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sell_address1`
    FOREIGN KEY (`client_address_id`)
    REFERENCES `ambardb_model`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sell_product1`
    FOREIGN KEY (`product_prod_id` , `product_user_usr_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id` , `user_usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sell_user2`
    FOREIGN KEY (`client_id`)
    REFERENCES `ambardb_model`.`user` (`usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`comments` (
  `comments_id` INT(11) NOT NULL,
  `comment` TEXT NULL DEFAULT NULL,
  `product_prod_id` INT(11) NOT NULL,
  `product_user_usr_id` INT(11) NOT NULL,
  `user_usr_id` INT(11) NOT NULL,
  PRIMARY KEY (`comments_id`, `product_prod_id`, `product_user_usr_id`, `user_usr_id`),
  INDEX `fk_comments_product1_idx` (`product_prod_id` ASC, `product_user_usr_id` ASC) VISIBLE,
  INDEX `fk_comments_user1_idx` (`user_usr_id` ASC) VISIBLE,
  CONSTRAINT `fk_comments_product1`
    FOREIGN KEY (`product_prod_id` , `product_user_usr_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id` , `user_usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_user1`
    FOREIGN KEY (`user_usr_id`)
    REFERENCES `ambardb_model`.`user` (`usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Placeholder table for view `ambardb_model`.`v_search_res_prods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ambardb_model`.`v_search_res_prods` (`prod_id` INT, `prod_title` INT, `prod_stockAmount` INT, `prod_price` INT, `prod_discount` INT, `prod_shippingfee` INT, `image_url` INT, `usr_name` INT, `usr_id` INT, `store_name` INT, `store_phone` INT, `store_cellphone` INT);


USE `ambardb_model`;

-- -----------------------------------------------------
-- View `ambardb_model`.`v_search_res_prods`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ambardb_model`.`v_search_res_prods`;
USE `ambardb_model`;
CREATE  OR REPLACE VIEW `v_search_res_prods` AS 
SELECT 
 `product`.prod_id,`product`.prod_title,`product`.prod_stockAmount, `product`.prod_price, `product`.prod_discount,`product`.prod_shippingfee,
 `image`.image_url,
 `user`.usr_name, `user`.usr_id, 
 `store`.store_name, `store`.store_phone,`store`.store_cellphone FROM `product` 
INNER JOIN `image` ON `product`.prod_id = `image`.product_prod_id
LEFT JOIN `user` ON `product`.user_usr_id = `user`.usr_id
LEFT JOIN `store` ON `user`.usr_id = `store`.user_usr_id ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `getProfileData` (usrId INT)
BEGIN
SELECT 
`user`.usr_name, `user`.usr_email,
`ud`.usrDetail_id, `ud`.usrDetail_firstPhone, `ud`.usrDetail_secondPhone,`ud`.usrDetail_birthday,`ud`.usrDetail_cpf,
`cd`.card_id, `cd`.card_number, `cd`.card_owner_name, `cd`.card_expiration_date,
`st`.store_id, `st`.store_name, `st`.store_cnpj, `st`.store_phone, `st`.store_cellphone
FROM `user`
LEFT OUTER JOIN `usrdetail` as `ud` ON `ud`.user_usr_id = `user`.usr_id
LEFT OUTER JOIN `card`  as `cd` ON `cd`.user_usr_id = `user`.usr_id
LEFT OUTER JOIN `store` as `st` ON `st`.user_usr_id = `user`.usr_id  
WHERE `user`.usr_id = usrId ;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `getStoreAddresses` (ownerId INT )
BEGIN
SELECT * FROM `address` 
INNER JOIN `store_has_address` ON `store_has_address`.address_address_id = `address`.address_id 
WHERE `store_has_address`.store_user_usr_id =  ownerId;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `getUserAddresses` (usrId INT)
BEGIN
SELECT * FROM `address` 
INNER JOIN `user_has_address` ON `user_has_address`.address_address_id = `address`.address_id 
WHERE `user_has_address`.user_usr_id =  usrId;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `getUserCredCards` (ownerId INT )
BEGIN
SELECT * FROM `card` WHERE `user_usr_id` = ownerId;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `registrateProduct` (
	#ProductData
    prodCode INT, prodTitle VARCHAR(250),prodCateg VARCHAR(20),prodStockAmount VARCHAR(2),prodPrice VARCHAR(7),prodDiscount VARCHAR(3),prodShipping VARCHAR(45), ownerId INT,storeId INT,
    #Image
    imageUrl LONGTEXT,
    #address
	addressStreetName VARCHAR(255),addressNumber VARCHAR(15), addressCep VARCHAR(15), addressCity VARCHAR(45), addressState VARCHAR (45), addressCountry VARCHAR(45)
)
BEGIN
	INSERT INTO `product` (prod_categ,prod_code,prod_title,prod_stockAmount,prod_price,prod_discount,prod_shippingfee,user_usr_id,store_store_id)
    VALUES(prodCateg,prodCode,prodTitle,prodStockAmount,prodPrice,prodDiscount,prodShipping,ownerId,storeId);
    SET @prodInsertId = LAST_INSERT_ID();
    UPDATE `product` SET prod_categ = prodCateg  WHERE  prod_id = @prodInsertId;
    INSERT INTO `image`  (image_url,product_prod_id) 
    VALUES (imageUrl,@prodInsertId);
    SET @imageInsertId = LAST_INSERT_ID();
	INSERT INTO `address` (address_streetName, address_number,address_cep,address_city,address_state,address_country)
    VALUES(addressStreetName, addressNumber,addressCep,addressCity,addressState,addressCountry);
    SET @addressInsertId = LAST_INSERT_ID();
    INSERT INTO `product_has_address` (product_prod_id,product_user_usr_id,address_address_id)
    VALUES(@prodInsertId,ownerId,@addressInsertId);
    INSERT INTO `user_has_address` (user_usr_id,address_address_id) VALUES (ownerId,@addressInsertId);
    
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `registrateProductExistingAddr` (
	#ProductData
    prodCode INT, prodTitle VARCHAR(250),prodCateg VARCHAR(20),prodStockAmount VARCHAR(2),prodPrice VARCHAR(7),prodDiscount VARCHAR(3),prodShipping VARCHAR(45), ownerId INT,storeId INT,
    #Image
    imageUrl LONGTEXT,
    addressId INT
)
BEGIN
	INSERT INTO `product` (prod_categ,prod_code,prod_title,prod_stockAmount,prod_price,prod_discount,prod_shippingfee,user_usr_id,store_store_id)
    VALUES(prodCateg,prodCode,prodTitle,prodStockAmount,prodPrice,prodDiscount,prodShipping,ownerId,storeId);
    SET @prodInsertId = LAST_INSERT_ID();
    UPDATE `product` SET prod_categ = prodCateg  WHERE  prod_id = @prodInsertId;
    INSERT INTO `image`  (image_url,product_prod_id) 
    VALUES (imageUrl,@prodInsertId);
    SET @imageInsertId = LAST_INSERT_ID();
    INSERT INTO `product_has_address` (product_prod_id,product_user_usr_id,address_address_id)
    VALUES(@prodInsertId,ownerId,addressId);

END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `setStoreToProduct` (ownerId INT, storeId INT)
BEGIN
	UPDATE `product` SET `store_store_id` = storeId WHERE `user_usr_id` =  ownerId;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `getBuyedProducts` (buyerId INT)
BEGIN 
SELECT 
	`orders`.*,
    `product`.*,
    `buyer`.usr_name as buyer_name,`buyer`.usr_email as buyer_email,
    `seller`.usr_name as seller_name,`seller`.usr_email as seller_email,
    
    `buyer_address`.address_streetName as bad1,`buyer_address`.address_number as bad2,`buyer_address`.address_cep as bad3,
    `buyer_address`.address_city as bad4,`buyer_address`.address_state as bad5,`buyer_address`.address_country as bad6,
    
    `seller_address`.address_streetName as sad1,`seller_address`.address_number as sad2,`seller_address`.address_cep as sad3,
    `seller_address`.address_city as sad4,`seller_address`.address_state as sad5,`seller_address`.address_country as sad6,
    
    `image`.image_url,
    `store`.*
    FROM `orders` 
    INNER JOIN `product` ON `orders`.product_prod_id = `product`.prod_id
    INNER JOIN `image` ON `product`.prod_id = `image`.product_prod_id 
    INNER JOIN `user` as buyer ON `buyer`.usr_id = `orders`.user_usr_id
    INNER JOIN `user` as seller ON `seller`.usr_id = `orders`.product_user_usr_id
    INNER JOIN `product_has_address` ON `product_has_address`.product_prod_id = `product`.prod_id  
    INNER JOIN `address` as buyer_address ON `buyer_address`.address_id = `product_has_address`.address_address_id
    INNER JOIN `address` as seller_address ON `seller_address`.address_id = `orders`.address_address_id
    LEFT JOIN `store` ON `store`.store_id = `product`.store_store_id
    WHERE `orders`.user_usr_id = buyerId;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `showProductByStatus` (prodStatus INT, usrId INT)
BEGIN 
	SELECT
		`product`.*,
		`image`.image_url,
        `store`.store_name, `store`.store_phone, `store`.store_cellphone
		FROM `orders`
        INNER JOIN `product` ON `orders`.product_prod_id = `product`.prod_id
        INNER JOIN `image` ON `product`.prod_id = `image`.product_prod_id
        INNER JOIN `store` ON `product`.store_store_id =  `store`.store_id
        WHERE `orders`.user_usr_id = userId AND `orders`.order_status = prodStatus;
		
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `getPublishedProductsFullData` (ownerId INT)
BEGIN	
	SELECT
		`product`.*,
		`image`.*,
		`address`.*
		FROM `product`
		INNER JOIN `image` ON `product`.prod_id = `image`.product_prod_id
		INNER JOIN `product_has_address`  ON `product_has_address`.product_user_usr_id = ownerId
		INNER JOIN `address` ON  `product_has_address`.address_address_id = `address`.address_id
        WHERE `product`.user_usr_id = ownerId;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `getUserfavorites` (ownerId INT)
BEGIN
	SELECT
		`product`.*,
		`image`.image_url,
        `store`.store_name, `store`.store_phone, `store`.store_cellphone
		FROM `favorites`
        INNER JOIN `product` ON `favorites`.product_prod_id = `product`.prod_id
        INNER JOIN `image` ON `product`.prod_id = `image`.product_prod_id
        INNER JOIN `store` ON `product`.store_store_id =  `store`.store_id
        WHERE `favorites`.user_usr_id = ownerId;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `deletePublishedProduct` (prodId INT)
BEGIN
	START TRANSACTION;

	DELETE FROM `sell` WHERE `sell`.product_prod_id = prodId;
    DELETE FROM `orders` WHERE `orders`.product_prod_id = prodId;
    DELETE FROM `favorites` WHERE `favorites`.product_prod_id = prodId;
    DELETE FROM `cart` WHERE `cart`.product_prod_id = prodId;
    DELETE FROM `product_has_address` WHERE `product_has_address`.product_prod_id = prodId;
    DELETE FROM `image` WHERE `image`.product_prod_id = prodId;
    DELETE FROM `colors` WHERE `colors`.product_prod_Id = prodId;
    DELETE FROM `product` WHERE `product`.prod_id = prodId;
COMMIT;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `setUserFavorite` (userId INT , prodId INT)
BEGIN
	INSERT INTO `favorites` (user_usr_id,product_prod_id) VALUES (userId,prodId);
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `addToCart` (ownerId INT , prodId INT)
BEGIN
	INSERT INTO `cart` (user_usr_id,product_prod_id) VALUES(ownerId, prodId);
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `removeFromCart` (ownerId INT, prodId INT)
BEGIN
	DELETE FROM `cart` WHERE user_usr_id = ownerId AND product_prod_id = prodId;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `getUserCartProds` (usrId INT )
BEGIN
	SELECT 
    `product`.*,
    `image`.image_url
    FROM `cart`
    INNER JOIN `product` ON `cart`.product_prod_id = `product`.prod_Id
    INNER JOIN `image` ON `cart`.product_prod_id = `image`.product_prod_id
    WHERE `cart`.user_usr_id = usrId;
    END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `sellTransactionExistingAddress` 
( buyerId INT, prodId INT , ownerId INT, amountSelled INT, orderType INT(1), orderStatus INT(1),storeId INT, addressId INT)
BEGIN
	START TRANSACTION;
    INSERT INTO `orders` (`user_usr_id`, `product_prod_id`, `product_user_usr_id`, `order_amount`, `order_type`, `order_status`, `store_store_id`,`address_address_id`)
    VALUES (buyerId,prodId,ownerId,amountSelled, orderType, orderStatus,storeId,addressId); 
    UPDATE `product` SET prod_stockAmount = (prod_stockAmount - amountSelled) WHERE prod_id = prodId;
    #Seller Cash update
    UPDATE `user`
    INNER JOIN `product` ON `product`.user_usr_id = ownerId
    SET usr_cash = ((usr_cash + `product`.prod_price) * amountSelled)  
    WHERE usr_id = ownerId;
    INSERT INTO `sell` (sell_amount,sell_status,user_usr_id, product_prod_id, product_user_usr_id,client_id,client_address_id)
    VALUES(amountSelled,orderStatus,ownerId,prodId,ownerId,buyerId,addressId);
    COMMIT;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `sellTransactionRegAddress` 
(
 buyerId INT, prodId INT , ownerId INT, amountSelled INT, orderType INT(1), orderStatus INT(1),storeId INT,
 addressStreetName varchar(255),addressNumber varchar(15), addressCep varchar(15), addressCity varchar(45), addressState varchar(45), addressCountry varchar(45)
)
BEGIN
	START TRANSACTION;
    INSERT INTO `address` 
    (`address_streetName`,`address_number`,`address_cep`,`address_city`,`address_state`,`address_Country`)
    VALUES (addressStreetName,addressNumber,addressCep,addressCity,addressState,addressCountry);
    SET @addressInsertedId = LAST_INSERT_ID();
    INSERT INTO `orders` (`user_usr_id`, `product_prod_id`, `product_user_usr_id`, `order_amount`, `order_type`, `order_status`, `store_store_id`,`address_address_id`)
    VALUES (buyerId,prodId,ownerId,amountSelled, orderType, orderStatus,storeId,@addressInsertedId); 
    
    INSERT INTO user_has_address (user_usr_id,address_address_id) VALUES (buyerId,@addressInsertedId);
    UPDATE `product` SET prod_stockAmount = (prod_stockAmount - amountSelled) WHERE prod_id = prodId;
    #Seller Cash update
    UPDATE `user`
    INNER JOIN `product` ON `product`.user_usr_id = ownerId
    SET usr_cash = ((usr_cash + (`product`.prod_price/(`product`.prod_discount/100))) * amountSelled)  
    WHERE usr_id = ownerId;
    COMMIT;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `getSelledProducts` (sellerId INT)
BEGIN
SELECT 
	`sell`.*,
    `buyer`.usr_name as buyer_name,`buyer`.usr_email as buyer_email,
    `seller`.usr_name as seller_name,`seller`.usr_email as seller_email,
    
    `buyer_address`.address_streetName as bad1,`buyer_address`.address_number as bad2,`buyer_address`.address_cep as bad3,
    `buyer_address`.address_city as bad4,`buyer_address`.address_state as bad5,`buyer_address`.address_country as bad6,
    
    `seller_address`.address_streetName as sad1,`seller_address`.address_number as sad2,`seller_address`.address_cep as sad3,
    `seller_address`.address_city as sad4,`seller_address`.address_state as sad5,`seller_address`.address_country as sad6,
    
    `product`.*,
    `image`.image_url,
    `address`.*
    FROM `sell` 
    INNER JOIN `product` ON `sell`.product_prod_id = `product`.prod_id
    INNER JOIN `image` ON `product`.prod_id = `image`.product_prod_id 
    INNER JOIN `address` ON `address`.address_id = `sell`.client_address_id
	INNER JOIN `user` as buyer ON `buyer`.usr_id = `sell`.client_id
    INNER JOIN `user` as seller ON `seller`.usr_id = `sell`.product_user_usr_id
    INNER JOIN `address` as buyer_address ON `buyer_address`.address_id = `sell`.client_id
    INNER JOIN `address` as seller_address ON `seller_address`.address_id = `product`.user_usr_id
    WHERE `sell`.product_user_usr_id = sellerId;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `registerAddress` 
(userId INT ,street VARCHAR(255), addressNumber VARCHAR(7), cep VARCHAR(15), city VARCHAR (45), state VARCHAR(45),country VARCHAR(45))
BEGIN
	INSERT INTO `address` (address_streetName, address_number, address_cep,address_city, address_state,address_country)
    VALUES (street,addressNumber,cep,city,state,country);
    SET @addressInsertedId =  LAST_INSERT_ID();
    INSERT INTO `user_has_address` (user_usr_id,address_address_id) 
    VALUES (userId,@addressInsertedId);
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `getProfileInfo` (usrId INT)
BEGIN
	SELECT  
    `user`.*,
    `usrdetail`.*
    FROM `user`
    left JOIN `usrdetail` ON `usrdetail`.user_usr_id = `user`.usr_id 
    WHERE `user`.usr_id = usrId;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `updateAddress` 
(adId INT, adStreet VARCHAR(45), adNum VARCHAR(45), adCep VARCHAR(45), adCity VARCHAR(45), adState VARCHAR(45), adCountry VARCHAR(45))
BEGIN
    UPDATE `address` 
    SET 
    address_streetName = adStreet, 
    address_number = adNum,
    address_cep = adCep,
    address_city = adCity,
    address_state = adState,
    address_country = adCountry
    WHERE address_id = adId;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `deleteAddress`  
(adId INT, usrId INT)
BEGIN
	DELETE address, user_has_address
	FROM address
	INNER JOIN user_has_address ON user_has_address.address_address_id = `address`.address_id
	WHERE `address`.address_id = adId;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `getPostedProducts` (usrId INT)
BEGIN
	SELECT
    `product`.*,
    `image`.image_url,
    `address`.*
    FROM `product`
    INNER JOIN `image` ON `image`.product_prod_id = `product`.prod_id
    INNER JOIN `product_has_address` ON `product_has_address`.product_prod_id = `product`.prod_id
    INNER JOIN `address` ON `product_has_address`.address_address_id = `address`.address_id
    WHERE `product`.user_usr_id = usrId;  
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `registrateStore` (storeName VARCHAR(25), cnpj VARCHAR(25), storePhone VARCHAR(25), storeCellphone VARCHAR(25) ,usrId INT )
BEGIN
 INSERT INTO `store` (store_name, store_cnpj, store_phone, store_cellphone, user_usr_id)
 VALUES (storeName,cnpj,storePhone,storeCellphone,usrId);
 SET @store_inserted_id = LAST_INSERT_ID();
 UPDATE `product` SET `product`.store_store_id = @store_inserted_id WHERE `product`.user_usr_id = usrId;
 UPDATE `orders` SET `orders`.store_store_id = @store_inserted_id  WHERE `orders`.product_user_usr_id = usrId;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `createComment` (usrComment TEXT, prodId INT , prodOwnerId INT, usrId INT )
BEGIN
	INSERT INTO `comment` (`comment`,product_prod_id, product_user_usr_id, user_usr_id)
    VALUES (usrComment, prodId,proOwnerId,usrId);
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `deleteComment` (prodId INT , usrId INT)
BEGIN
	DELETE FROM `comments` WHERE `comment`.product_prod_id = prodId AND `comment`.user_usr_id = usrId;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `editComment` (usrComment TEXT, prodId INT, usrId INT)
BEGIN
	UPDATE `comments` SET `comment` = usrComment WHERE `comments`.product_prod_id = prodId AND `comments`.user_usr_id = usrId;
END$$

DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
