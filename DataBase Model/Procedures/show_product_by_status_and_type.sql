CREATE PROCEDURE `showProductByStatusAndType` (prodStatus INT, usrId INT)
BEGIN
	SELECT * FROM `orders` WHERE order_status = prodStatus AND orders.user_usr_id = usrId;
END