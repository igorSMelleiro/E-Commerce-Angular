-- MySQL Workbench Synchronization
-- Generated: 2019-10-31 13:19
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
  `prod_visits` INT(7) NULL DEFAULT NULL,
  `prod_code` VARCHAR(45) NULL DEFAULT NULL,
  `prod_title` VARCHAR(250) NOT NULL,
  `prod_stockAmount` INT(2) NOT NULL DEFAULT 0,
  `prod_price` DECIMAL(9,2) NOT NULL DEFAULT 0,
  `prod_discount` INT(3) NULL DEFAULT 0,
  `prod_shippingfee` DECIMAL(7,2) NOT NULL DEFAULT 0,
  `user_usr_id` INT(11) NOT NULL,
  `store_store_id` INT(11) NULL DEFAULT NULL,
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
  `store_cnpj` CHAR(14) NOT NULL,
  `store_phone` CHAR(10) NOT NULL,
  `store_cellphone` CHAR(11) NOT NULL,
  `user_usr_id` INT(11) NOT NULL,
  PRIMARY KEY (`store_id`, `user_usr_id`),
  UNIQUE INDEX `store_name` (`store_name` ASC) VISIBLE,
  INDEX `fk_store_user1_idx` (`user_usr_id` ASC) VISIBLE,
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
  `fovarite_id` INT(11) NOT NULL,
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
  `order_type` INT(1) NULL DEFAULT NULL,
  `order_status` INT(1) NULL DEFAULT NULL,
  `store_store_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`order_id`, `user_usr_id`, `product_prod_id`, `product_user_usr_id`),
  INDEX `fk_orders_user1_idx` (`user_usr_id` ASC) VISIBLE,
  INDEX `fk_orders_product1_idx` (`product_prod_id` ASC, `product_user_usr_id` ASC) VISIBLE,
  INDEX `fk_orders_store1_idx` (`store_store_id` ASC) VISIBLE,
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
INNER JOIN `image` ON `product`.prod_id = `image`.product_prod_Id
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
    prodCode INT, prodTitle VARCHAR(250),prodStockAmount VARCHAR(2),prodPrice VARCHAR(7),prodDiscount VARCHAR(3),prodShipping VARCHAR(45), ownerId INT,
    #Image
    imageUrl LONGTEXT,
    #address
	addressStreetName VARCHAR(255),addressNumber VARCHAR(15), addressCep VARCHAR(15), addressCity VARCHAR(45), addressState VARCHAR (45), addressCountry VARCHAR(45)
)
BEGIN
    INSERT INTO `product` (prod_code, prod_title, prod_stockAmount, prod_price, prod_discount, prod_shippingfee, user_usr_id) 
    VALUES(prodCode,prodTitle,prodStockAmount,prodPrice,prodDiscount,prodShipping,ownerId);
    SET @prodInsertId = LAST_INSERT_ID();
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
    prodCode INT, prodTitle VARCHAR(250),prodStockAmount VARCHAR(2),prodPrice VARCHAR(7),prodDiscount VARCHAR(3),prodShipping VARCHAR(45), ownerId INT,
    #Image
    imageUrl LONGTEXT,
    addressId INT
)
BEGIN
    INSERT INTO `product` (prod_code, prod_title, prod_stockAmount, prod_price, prod_discount, prod_shippingfee, user_usr_id) 
    VALUES(prodCode,prodTitle,prodStockAmount,prodPrice,prodDiscount,prodShipping,ownerId);
    SET @prodInsertId = LAST_INSERT_ID();
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
    `product`.*,
    `image`.image_url
    FROM `orders` 
    INNER JOIN `product` ON `orders`.product_prod_id = `product`.prod_id
    INNER JOIN `image` ON `product`.prod_id = `image`.product_prod_id 
    WHERE `orders`.user_usr_id = buyerId;
END$$

DELIMITER ;

DELIMITER $$
USE `ambardb_model`$$
CREATE PROCEDURE `sellTransaction` (prodId INT , ownerId INT, buyerId INT,storeId INT, orderStatus INT(1), orderType INT(1))
BEGIN
	START TRANSACTION;
    INSERT INTO `orders` (`user_usr_id`, `product_prod_id`, `product_user_usr_id`, `order_type`, `order_status`, `store_store_id`)
    VALUES (buyerId,prodId,ownerId,orderStatus, orderType, storeId); 
    UPDATE `product` SET prod_stockAmount = prod_stockAmount - 1 WHERE prod_id = prodId;
    #Seller Cash update
    UPDATE `user` SET usr_cash = usr_cash + `product`.prod_price WHERE prod_id = prodId;
    COMMIT;
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

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
