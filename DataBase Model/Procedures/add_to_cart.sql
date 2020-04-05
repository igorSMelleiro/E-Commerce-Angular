CREATE PROCEDURE `addToCart` (ownerId INT , prodId INT)
BEGIN
	INSERT INTO `cart` (user_usr_id,product_prod_id) VALUES(ownerId, prodId);
END