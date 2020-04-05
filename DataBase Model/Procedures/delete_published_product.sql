CREATE PROCEDURE `deletePublishedProduct` (prodId INT, ownerId INT)
BEGIN
	DELETE FROM `product` WHERE prod_id = prodId  AND user_usr_id = ownerId;
END