CREATE PROCEDURE `getPublishedProductsCardData` (usrId INT)
BEGIN	
	SELECT * FROM `product` WHERE `user_usr_id` = usrId;
END