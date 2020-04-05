CREATE PROCEDURE `removeFromCart` (ownerId INT, prodId INT)
BEGIN
	DELETE FROM `cart` WHERE user_usr_id = ownerId AND product_prod_id = prodId;
END