CREATE PROCEDURE `setUserFavorite` (userId INT , prodId INT)
BEGIN
	INSERT INTO `favorites` (user_usr_id,product_prod_id) VALUES (userId,prodId);
END