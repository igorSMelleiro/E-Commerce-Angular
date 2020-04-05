-- MySQL Workbench Synchronization
-- Generated: 2019-10-10 21:44
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Rafael Macris

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `ambardb_model` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`city` (
  `city_id` INT(11) NOT NULL AUTO_INCREMENT,
  `city_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`city_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`colors` (
  `color_id` INT(11) NOT NULL AUTO_INCREMENT,
  `color_name` VARCHAR(15) NULL DEFAULT NULL,
  PRIMARY KEY (`color_id`))
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

CREATE TABLE IF NOT EXISTS `ambardb_model`.`condition` (
  `condition_id` INT(11) NOT NULL AUTO_INCREMENT,
  `condition_name` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`condition_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`country` (
  `country_id` INT(11) NOT NULL AUTO_INCREMENT,
  `country_name` TEXT NOT NULL,
  PRIMARY KEY (`country_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`maker` (
  `maker_id` INT(11) NOT NULL AUTO_INCREMENT,
  `maker_name` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`maker_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`model` (
  `model_id` INT(11) NOT NULL AUTO_INCREMENT,
  `model_name` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`model_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`power` (
  `power_id` INT(11) NOT NULL AUTO_INCREMENT,
  `power_def` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`power_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`product` (
  `prod_id` INT(11) NOT NULL AUTO_INCREMENT,
  `prod_code` VARCHAR(45) NULL DEFAULT NULL,
  `prod_title` VARCHAR(250) NOT NULL,
  `prod_stockAmount` VARCHAR(2) NOT NULL,
  `prod_price` VARCHAR(7) NOT NULL,
  `prod_discount` VARCHAR(3) NULL DEFAULT NULL,
  `prod_shippingfee` VARCHAR(45) NOT NULL,
  `user_usr_id` INT(11) NOT NULL,
  PRIMARY KEY (`prod_id`, `user_usr_id`),
  INDEX `fk_product_user1_idx` (`user_usr_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_user1`
    FOREIGN KEY (`user_usr_id`)
    REFERENCES `ambardb_model`.`user` (`usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`size` (
  `size_id` INT(11) NOT NULL AUTO_INCREMENT,
  `size_def` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`size_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`state` (
  `state_id` INT(11) NOT NULL AUTO_INCREMENT,
  `state_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`state_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`storage` (
  `storage_id` INT(11) NOT NULL AUTO_INCREMENT,
  `storage_def` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`storage_id`))
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
  `usr_name` VARCHAR(30) NOT NULL,
  `usr_email` VARCHAR(50) NOT NULL,
  `usr_password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`usr_id`),
  UNIQUE INDEX `usr_email` (`usr_email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`address` (
  `address_id` INT(11) NOT NULL AUTO_INCREMENT,
  `address_streetName` VARCHAR(255) NOT NULL,
  `address_number` VARCHAR(15) NOT NULL,
  `address_district` VARCHAR(50) NOT NULL,
  `address_cep` VARCHAR(15) NOT NULL,
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

CREATE TABLE IF NOT EXISTS `ambardb_model`.`versions` (
  `vers_id` INT(11) NOT NULL AUTO_INCREMENT,
  `vers_name` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`vers_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`voltage` (
  `voltage_id` INT(11) NOT NULL AUTO_INCREMENT,
  `voltage_def` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`voltage_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`product_has_colors` (
  `product_prod_id` INT(11) NOT NULL,
  `colors_color_id` INT(11) NOT NULL,
  PRIMARY KEY (`product_prod_id`, `colors_color_id`),
  INDEX `fk_product_has_colors_colors1_idx` (`colors_color_id` ASC) VISIBLE,
  INDEX `fk_product_has_colors_product1_idx` (`product_prod_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_colors_product1`
    FOREIGN KEY (`product_prod_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_colors_colors1`
    FOREIGN KEY (`colors_color_id`)
    REFERENCES `ambardb_model`.`colors` (`color_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`product_has_maker` (
  `product_prod_id` INT(11) NOT NULL,
  `maker_maker_id` INT(11) NOT NULL,
  PRIMARY KEY (`product_prod_id`, `maker_maker_id`),
  INDEX `fk_product_has_maker_maker1_idx` (`maker_maker_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_maker_product1`
    FOREIGN KEY (`product_prod_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_maker_maker1`
    FOREIGN KEY (`maker_maker_id`)
    REFERENCES `ambardb_model`.`maker` (`maker_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`product_has_condition` (
  `product_prod_id` INT(11) NOT NULL,
  `condition_condition_id` INT(11) NOT NULL,
  PRIMARY KEY (`product_prod_id`, `condition_condition_id`),
  INDEX `fk_product_has_condition_condition1_idx` (`condition_condition_id` ASC) VISIBLE,
  INDEX `fk_product_has_condition_product1_idx` (`product_prod_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_condition_product1`
    FOREIGN KEY (`product_prod_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_condition_condition1`
    FOREIGN KEY (`condition_condition_id`)
    REFERENCES `ambardb_model`.`condition` (`condition_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`product_has_versions` (
  `product_prod_id` INT(11) NOT NULL,
  `versions_vers_id` INT(11) NOT NULL,
  PRIMARY KEY (`product_prod_id`, `versions_vers_id`),
  INDEX `fk_product_has_versions_versions1_idx` (`versions_vers_id` ASC) VISIBLE,
  INDEX `fk_product_has_versions_product1_idx` (`product_prod_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_versions_product1`
    FOREIGN KEY (`product_prod_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_versions_versions1`
    FOREIGN KEY (`versions_vers_id`)
    REFERENCES `ambardb_model`.`versions` (`vers_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`product_has_storage` (
  `product_prod_id` INT(11) NOT NULL,
  `storage_storage_id` INT(11) NOT NULL,
  PRIMARY KEY (`product_prod_id`, `storage_storage_id`),
  INDEX `fk_product_has_storage_storage1_idx` (`storage_storage_id` ASC) VISIBLE,
  INDEX `fk_product_has_storage_product1_idx` (`product_prod_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_storage_product1`
    FOREIGN KEY (`product_prod_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_storage_storage1`
    FOREIGN KEY (`storage_storage_id`)
    REFERENCES `ambardb_model`.`storage` (`storage_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`product_has_size` (
  `product_prod_id` INT(11) NOT NULL,
  `size_size_id` INT(11) NOT NULL,
  PRIMARY KEY (`product_prod_id`, `size_size_id`),
  INDEX `fk_product_has_size_size1_idx` (`size_size_id` ASC) VISIBLE,
  INDEX `fk_product_has_size_product1_idx` (`product_prod_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_size_product1`
    FOREIGN KEY (`product_prod_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_size_size1`
    FOREIGN KEY (`size_size_id`)
    REFERENCES `ambardb_model`.`size` (`size_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`product_has_power` (
  `product_prod_id` INT(11) NOT NULL,
  `power_power_id` INT(11) NOT NULL,
  PRIMARY KEY (`product_prod_id`, `power_power_id`),
  INDEX `fk_product_has_power_power1_idx` (`power_power_id` ASC) VISIBLE,
  INDEX `fk_product_has_power_product1_idx` (`product_prod_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_power_product1`
    FOREIGN KEY (`product_prod_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_power_power1`
    FOREIGN KEY (`power_power_id`)
    REFERENCES `ambardb_model`.`power` (`power_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`product_has_model` (
  `product_prod_id` INT(11) NOT NULL,
  `model_model_id` INT(11) NOT NULL,
  PRIMARY KEY (`product_prod_id`, `model_model_id`),
  INDEX `fk_product_has_model_model1_idx` (`model_model_id` ASC) VISIBLE,
  INDEX `fk_product_has_model_product1_idx` (`product_prod_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_model_product1`
    FOREIGN KEY (`product_prod_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_model_model1`
    FOREIGN KEY (`model_model_id`)
    REFERENCES `ambardb_model`.`model` (`model_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`product_has_voltage` (
  `product_prod_id` INT(11) NOT NULL,
  `voltage_voltage_id` INT(11) NOT NULL,
  PRIMARY KEY (`product_prod_id`, `voltage_voltage_id`),
  INDEX `fk_product_has_voltage_voltage1_idx` (`voltage_voltage_id` ASC) VISIBLE,
  INDEX `fk_product_has_voltage_product1_idx` (`product_prod_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_voltage_product1`
    FOREIGN KEY (`product_prod_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_voltage_voltage1`
    FOREIGN KEY (`voltage_voltage_id`)
    REFERENCES `ambardb_model`.`voltage` (`voltage_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`country_has_state` (
  `country_country_id` INT(11) NOT NULL,
  `state_state_id` INT(11) NOT NULL,
  PRIMARY KEY (`country_country_id`, `state_state_id`),
  INDEX `fk_country_has_state_state1_idx` (`state_state_id` ASC) VISIBLE,
  INDEX `fk_country_has_state_country1_idx` (`country_country_id` ASC) VISIBLE,
  CONSTRAINT `fk_country_has_state_country1`
    FOREIGN KEY (`country_country_id`)
    REFERENCES `ambardb_model`.`country` (`country_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_country_has_state_state1`
    FOREIGN KEY (`state_state_id`)
    REFERENCES `ambardb_model`.`state` (`state_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`state_has_city` (
  `state_state_id` INT(11) NOT NULL,
  `city_city_id` INT(11) NOT NULL,
  PRIMARY KEY (`state_state_id`, `city_city_id`),
  INDEX `fk_state_has_city_city1_idx` (`city_city_id` ASC) VISIBLE,
  INDEX `fk_state_has_city_state1_idx` (`state_state_id` ASC) VISIBLE,
  CONSTRAINT `fk_state_has_city_state1`
    FOREIGN KEY (`state_state_id`)
    REFERENCES `ambardb_model`.`state` (`state_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_state_has_city_city1`
    FOREIGN KEY (`city_city_id`)
    REFERENCES `ambardb_model`.`city` (`city_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`image` (
  `image_id` INT(11) NOT NULL AUTO_INCREMENT,
  `image_url` LONGTEXT NOT NULL,
  `image_index` INT(2) NOT NULL,
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
  `card_onwer_name` VARCHAR(45) NOT NULL,
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

CREATE TABLE IF NOT EXISTS `ambardb_model`.`selledproduct` (
  `selledProd_id` INT(11) NOT NULL,
  `prod_status` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`selledProd_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`favorites` (
  `fovarite_id` INT(11) NOT NULL,
  `favorit_url` VARCHAR(45) NULL DEFAULT NULL,
  `favorite_type` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`fovarite_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`orders` (
  `order_id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_usr_id` INT(11) NOT NULL,
  `product_prod_id` INT(11) NOT NULL,
  `product_store_store_id` INT(11) NOT NULL,
  `product_user_usr_id` INT(11) NOT NULL,
  PRIMARY KEY (`order_id`, `user_usr_id`, `product_prod_id`, `product_store_store_id`, `product_user_usr_id`),
  INDEX `fk_orders_user1_idx` (`user_usr_id` ASC) VISIBLE,
  INDEX `fk_orders_product1_idx` (`product_prod_id` ASC, `product_store_store_id` ASC, `product_user_usr_id` ASC) VISIBLE,
  CONSTRAINT `fk_orders_user1`
    FOREIGN KEY (`user_usr_id`)
    REFERENCES `ambardb_model`.`user` (`usr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_product1`
    FOREIGN KEY (`product_prod_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`favorites_has_user` (
  `favorites_fovarite_id` INT(11) NOT NULL,
  `user_usr_id` INT(11) NOT NULL,
  PRIMARY KEY (`favorites_fovarite_id`, `user_usr_id`),
  INDEX `fk_favorites_has_user_user1_idx` (`user_usr_id` ASC) VISIBLE,
  INDEX `fk_favorites_has_user_favorites1_idx` (`favorites_fovarite_id` ASC) VISIBLE,
  CONSTRAINT `fk_favorites_has_user_favorites1`
    FOREIGN KEY (`favorites_fovarite_id`)
    REFERENCES `ambardb_model`.`favorites` (`fovarite_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_favorites_has_user_user1`
    FOREIGN KEY (`user_usr_id`)
    REFERENCES `ambardb_model`.`user` (`usr_id`)
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

CREATE TABLE IF NOT EXISTS `ambardb_model`.`address_has_city` (
  `address_address_id` INT(11) NOT NULL,
  `city_city_id` INT(11) NOT NULL,
  PRIMARY KEY (`address_address_id`, `city_city_id`),
  INDEX `fk_address_has_city_city1_idx` (`city_city_id` ASC) VISIBLE,
  INDEX `fk_address_has_city_address1_idx` (`address_address_id` ASC) VISIBLE,
  CONSTRAINT `fk_address_has_city_address1`
    FOREIGN KEY (`address_address_id`)
    REFERENCES `ambardb_model`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_address_has_city_city1`
    FOREIGN KEY (`city_city_id`)
    REFERENCES `ambardb_model`.`city` (`city_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS `ambardb_model`.`address_has_user` (
  `address_address_id` INT(11) NOT NULL,
  `user_usr_id` INT(11) NOT NULL,
  PRIMARY KEY (`address_address_id`, `user_usr_id`),
  INDEX `fk_address_has_user_user1_idx` (`user_usr_id` ASC) VISIBLE,
  INDEX `fk_address_has_user_address1_idx` (`address_address_id` ASC) VISIBLE,
  CONSTRAINT `fk_address_has_user_address1`
    FOREIGN KEY (`address_address_id`)
    REFERENCES `ambardb_model`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_address_has_user_user1`
    FOREIGN KEY (`user_usr_id`)
    REFERENCES `ambardb_model`.`user` (`usr_id`)
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

CREATE TABLE IF NOT EXISTS `ambardb_model`.`favorites_has_product` (
  `favorites_fovarite_id` INT(11) NOT NULL,
  `product_prod_id` INT(11) NOT NULL,
  `product_user_usr_id` INT(11) NOT NULL,
  PRIMARY KEY (`favorites_fovarite_id`, `product_prod_id`, `product_user_usr_id`),
  INDEX `fk_favorites_has_product_product1_idx` (`product_prod_id` ASC, `product_user_usr_id` ASC) VISIBLE,
  INDEX `fk_favorites_has_product_favorites1_idx` (`favorites_fovarite_id` ASC) VISIBLE,
  CONSTRAINT `fk_favorites_has_product_favorites1`
    FOREIGN KEY (`favorites_fovarite_id`)
    REFERENCES `ambardb_model`.`favorites` (`fovarite_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_favorites_has_product_product1`
    FOREIGN KEY (`product_prod_id` , `product_user_usr_id`)
    REFERENCES `ambardb_model`.`product` (`prod_id` , `user_usr_id`)
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
INNER JOIN `image` ON `product`.prod_id = `image`.product_prod_Id
LEFT JOIN `user` ON `product`.user_usr_id = user.usr_id
LEFT JOIN `store` ON `user`.usr_id = store.user_usr_id ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
