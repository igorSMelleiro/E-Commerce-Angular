CREATE PROCEDURE `registrateProduct` (
	#ProductData
    prodCode INT, prodTitle VARCHAR(250),prodStockAmount VARCHAR(2),prodPrice VARCHAR(7),prodDiscount VARCHAR(3),prodShipping VARCHAR(45), ownerId INT,
    #Image
    imageUrl LONGTEXT,
    #address
	addressStreetName VARCHAR(255),addressNumber VARCHAR(15), addressCep VARCHAR(15), addresCity VARCHAR(45), addressState VARCHAR (45), addressCountry VARCHAR(45)
)
BEGIN
	DECLARE `_rollback` BOOL DEFAULT FALSE;
    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET `_rollback` = TRUE;
    START TRANSACTION;
    INSERT INTO `product` (prod_code, prod_title, prod_stockAmount, prod_price, prod_discount, prod_shippingfee, user_usr_id) 
    VALUES(prodCode,prodTitle,prodStockAmount,prodPrice,prodDiscount,prodShipping,ownerId);
    SET @prodInsertId = LAST_INSERT_ID();
    INSERT INTO `image`  (image_url,product_prod_id) 
    VALUES (imageUrl,@prodInsertId);
    SET @imageInsertId = LAST_INSERT_ID();
	INSERT INTO `address` (address_streetName, address_number,address_cep,address_city,address_state,address_country)
    VALUES(addressStreetName, addressNumber,addressCep,addresCity,addressState,addressCountry);
    SET @addressInsertId = LAST_INSERT_ID();
    INSERT INTO product_has_address (product_prod_id,product_user_usr_id,address_address_id)
    VALUES(@prodInsertId,ownerId,@addressInsertId);
    IF `_rollback` THEN
        ROLLBACK;
    ELSE
        COMMIT;
    END IF;
END