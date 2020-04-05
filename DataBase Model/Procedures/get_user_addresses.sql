CREATE PROCEDURE `getUserAddresses` (usrId INT)
BEGIN
SELECT * FROM `address` 
INNER JOIN `user_has_address` ON `user_has_address`.address_address_id = `address`.address_id 
WHERE `user_has_address`.user_usr_id =  usrId;
END