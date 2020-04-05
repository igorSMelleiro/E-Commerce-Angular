CREATE PROCEDURE `setStoreToProduct` (ownerId INT, storeId INT)
BEGIN
	UPDATE `product` SET `store_store_id` = storeId WHERE `user_usr_id` =  ownerId;
END