CREATE PROCEDURE `getUserCredCards` (ownerId INT )
BEGIN
SELECT * FROM `card` WHERE `user_usr_id` = ownerId;
END