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
END