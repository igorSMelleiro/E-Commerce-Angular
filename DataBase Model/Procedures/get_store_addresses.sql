CREATE PROCEDURE `getStoreAddresses` (ownerId INT )
BEGIN
SELECT * FROM `address` 
INNER JOIN `store_has_address` ON `store_has_address`.address_address_id = `address`.address_id 
WHERE `store_has_address`.store_user_usr_id =  ownerId;
END