-- MySQL Workbench Synchronization
-- Generated: 2019-09-27 14:55
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Rafael Macris

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

ALTER TABLE `ambardb_model`.`product` 
DROP FOREIGN KEY `fk_product_user1`;

ALTER TABLE `ambardb_model`.`store` 
DROP FOREIGN KEY `fk_store_user1`;

ALTER TABLE `ambardb_model`.`usrdetail` 
DROP FOREIGN KEY `fk_usrdetail_user1`;

ALTER TABLE `ambardb_model`.`product_has_colors` 
DROP FOREIGN KEY `fk_product_has_colors_colors1`;

ALTER TABLE `ambardb_model`.`product_has_maker` 
DROP FOREIGN KEY `fk_product_has_maker_maker1`;

ALTER TABLE `ambardb_model`.`product_has_condition` 
DROP FOREIGN KEY `fk_product_has_condition_condition1`;

ALTER TABLE `ambardb_model`.`product_has_versions` 
DROP FOREIGN KEY `fk_product_has_versions_product1`,
DROP FOREIGN KEY `fk_product_has_versions_versions1`;

ALTER TABLE `ambardb_model`.`product_has_storage` 
DROP FOREIGN KEY `fk_product_has_storage_product1`,
DROP FOREIGN KEY `fk_product_has_storage_storage1`;

ALTER TABLE `ambardb_model`.`product_has_size` 
DROP FOREIGN KEY `fk_product_has_size_product1`,
DROP FOREIGN KEY `fk_product_has_size_size1`;

ALTER TABLE `ambardb_model`.`product_has_power` 
DROP FOREIGN KEY `fk_product_has_power_power1`;

ALTER TABLE `ambardb_model`.`product_has_model` 
DROP FOREIGN KEY `fk_product_has_model_model1`;

ALTER TABLE `ambardb_model`.`product_has_voltage` 
DROP FOREIGN KEY `fk_product_has_voltage_product1`,
DROP FOREIGN KEY `fk_product_has_voltage_voltage1`;

ALTER TABLE `ambardb_model`.`country_has_state` 
DROP FOREIGN KEY `fk_country_has_state_country1`,
DROP FOREIGN KEY `fk_country_has_state_state1`;

ALTER TABLE `ambardb_model`.`state_has_city` 
DROP FOREIGN KEY `fk_state_has_city_city1`;

ALTER TABLE `ambardb_model`.`city_has_address` 
DROP FOREIGN KEY `fk_city_has_address_address1`;

ALTER TABLE `ambardb_model`.`user_has_address` 
DROP FOREIGN KEY `fk_user_has_address_address1`;

ALTER TABLE `ambardb_model`.`product_has_address` 
DROP FOREIGN KEY `fk_product_has_address_product1`;

ALTER TABLE `ambardb_model`.`image` 
DROP FOREIGN KEY `fk_image_product1`;

ALTER TABLE `ambardb_model`.`card` 
DROP FOREIGN KEY `fk_card_user1`;

ALTER TABLE `ambardb_model`.`orders` 
DROP FOREIGN KEY `fk_orders_product1`;

ALTER TABLE `ambardb_model`.`favorites_has_user` 
DROP FOREIGN KEY `fk_favorites_has_user_favorites1`,
DROP FOREIGN KEY `fk_favorites_has_user_user1`;

ALTER TABLE `ambardb_model`.`product` 
ADD CONSTRAINT `fk_product_user1`
  FOREIGN KEY (`user_usr_id`)
  REFERENCES `ambardb_model`.`user` (`usr_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`store` 
ADD CONSTRAINT `fk_store_user1`
  FOREIGN KEY (`user_usr_id`)
  REFERENCES `ambardb_model`.`user` (`usr_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`usrdetail` 
ADD CONSTRAINT `fk_usrdetail_user1`
  FOREIGN KEY (`user_usr_id`)
  REFERENCES `ambardb_model`.`user` (`usr_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`product_has_colors` 
DROP FOREIGN KEY `fk_product_has_colors_product1`;

ALTER TABLE `ambardb_model`.`product_has_colors` ADD CONSTRAINT `fk_product_has_colors_product1`
  FOREIGN KEY (`product_prod_id`)
  REFERENCES `ambardb_model`.`product` (`prod_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_product_has_colors_colors1`
  FOREIGN KEY (`colors_color_id`)
  REFERENCES `ambardb_model`.`colors` (`color_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`product_has_maker` 
DROP FOREIGN KEY `fk_product_has_maker_product1`;

ALTER TABLE `ambardb_model`.`product_has_maker` ADD CONSTRAINT `fk_product_has_maker_product1`
  FOREIGN KEY (`product_prod_id`)
  REFERENCES `ambardb_model`.`product` (`prod_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_product_has_maker_maker1`
  FOREIGN KEY (`maker_maker_id`)
  REFERENCES `ambardb_model`.`maker` (`maker_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`product_has_condition` 
DROP FOREIGN KEY `fk_product_has_condition_product1`;

ALTER TABLE `ambardb_model`.`product_has_condition` ADD CONSTRAINT `fk_product_has_condition_product1`
  FOREIGN KEY (`product_prod_id`)
  REFERENCES `ambardb_model`.`product` (`prod_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_product_has_condition_condition1`
  FOREIGN KEY (`condition_condition_id`)
  REFERENCES `ambardb_model`.`condition` (`condition_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`product_has_versions` 
ADD CONSTRAINT `fk_product_has_versions_product1`
  FOREIGN KEY (`product_prod_id`)
  REFERENCES `ambardb_model`.`product` (`prod_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_product_has_versions_versions1`
  FOREIGN KEY (`versions_vers_id`)
  REFERENCES `ambardb_model`.`versions` (`vers_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`product_has_storage` 
ADD CONSTRAINT `fk_product_has_storage_product1`
  FOREIGN KEY (`product_prod_id`)
  REFERENCES `ambardb_model`.`product` (`prod_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_product_has_storage_storage1`
  FOREIGN KEY (`storage_storage_id`)
  REFERENCES `ambardb_model`.`storage` (`storage_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`product_has_size` 
ADD CONSTRAINT `fk_product_has_size_product1`
  FOREIGN KEY (`product_prod_id`)
  REFERENCES `ambardb_model`.`product` (`prod_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_product_has_size_size1`
  FOREIGN KEY (`size_size_id`)
  REFERENCES `ambardb_model`.`size` (`size_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`product_has_power` 
DROP FOREIGN KEY `fk_product_has_power_product1`;

ALTER TABLE `ambardb_model`.`product_has_power` ADD CONSTRAINT `fk_product_has_power_product1`
  FOREIGN KEY (`product_prod_id`)
  REFERENCES `ambardb_model`.`product` (`prod_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_product_has_power_power1`
  FOREIGN KEY (`power_power_id`)
  REFERENCES `ambardb_model`.`power` (`power_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`product_has_model` 
DROP FOREIGN KEY `fk_product_has_model_product1`;

ALTER TABLE `ambardb_model`.`product_has_model` ADD CONSTRAINT `fk_product_has_model_product1`
  FOREIGN KEY (`product_prod_id`)
  REFERENCES `ambardb_model`.`product` (`prod_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_product_has_model_model1`
  FOREIGN KEY (`model_model_id`)
  REFERENCES `ambardb_model`.`model` (`model_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`product_has_voltage` 
ADD CONSTRAINT `fk_product_has_voltage_product1`
  FOREIGN KEY (`product_prod_id`)
  REFERENCES `ambardb_model`.`product` (`prod_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_product_has_voltage_voltage1`
  FOREIGN KEY (`voltage_voltage_id`)
  REFERENCES `ambardb_model`.`voltage` (`voltage_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`country_has_state` 
ADD CONSTRAINT `fk_country_has_state_country1`
  FOREIGN KEY (`country_country_id`)
  REFERENCES `ambardb_model`.`country` (`country_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_country_has_state_state1`
  FOREIGN KEY (`state_state_id`)
  REFERENCES `ambardb_model`.`state` (`state_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`state_has_city` 
DROP FOREIGN KEY `fk_state_has_city_state1`;

ALTER TABLE `ambardb_model`.`state_has_city` ADD CONSTRAINT `fk_state_has_city_state1`
  FOREIGN KEY (`state_state_id`)
  REFERENCES `ambardb_model`.`state` (`state_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_state_has_city_city1`
  FOREIGN KEY (`city_city_id`)
  REFERENCES `ambardb_model`.`city` (`city_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`city_has_address` 
DROP FOREIGN KEY `fk_city_has_address_city1`;

ALTER TABLE `ambardb_model`.`city_has_address` ADD CONSTRAINT `fk_city_has_address_city1`
  FOREIGN KEY (`city_city_id`)
  REFERENCES `ambardb_model`.`city` (`city_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_city_has_address_address1`
  FOREIGN KEY (`address_address_id`)
  REFERENCES `ambardb_model`.`address` (`address_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`user_has_address` 
DROP FOREIGN KEY `fk_user_has_address_user1`;

ALTER TABLE `ambardb_model`.`user_has_address` ADD CONSTRAINT `fk_user_has_address_user1`
  FOREIGN KEY (`user_usr_id`)
  REFERENCES `ambardb_model`.`user` (`usr_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_user_has_address_address1`
  FOREIGN KEY (`address_address_id`)
  REFERENCES `ambardb_model`.`address` (`address_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`product_has_address` 
ADD CONSTRAINT `fk_product_has_address_product1`
  FOREIGN KEY (`product_prod_id`)
  REFERENCES `ambardb_model`.`product` (`prod_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`image` 
ADD CONSTRAINT `fk_image_product1`
  FOREIGN KEY (`product_prod_id`)
  REFERENCES `ambardb_model`.`product` (`prod_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`card` 
ADD CONSTRAINT `fk_card_user1`
  FOREIGN KEY (`user_usr_id`)
  REFERENCES `ambardb_model`.`user` (`usr_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`orders` 
DROP FOREIGN KEY `fk_orders_user1`;

ALTER TABLE `ambardb_model`.`orders` ADD CONSTRAINT `fk_orders_user1`
  FOREIGN KEY (`user_usr_id`)
  REFERENCES `ambardb_model`.`user` (`usr_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_orders_product1`
  FOREIGN KEY (`product_prod_id`)
  REFERENCES `ambardb_model`.`product` (`prod_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `ambardb_model`.`favorites_has_user` 
ADD CONSTRAINT `fk_favorites_has_user_favorites1`
  FOREIGN KEY (`favorites_fovarite_id`)
  REFERENCES `ambardb_model`.`favorites` (`fovarite_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_favorites_has_user_user1`
  FOREIGN KEY (`user_usr_id`)
  REFERENCES `ambardb_model`.`user` (`usr_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
