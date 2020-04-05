CREATE PROCEDURE `sellTransaction` (prodId INT , ownerId INT, buyerId INT,storeId INT, orderStatus INT(1), orderType INT(1), amountSelled INT)
BEGIN
	START TRANSACTION;
    INSERT INTO `orders` (`user_usr_id`, `product_prod_id`, `product_user_usr_id`, `order_type`, `order_status`, `store_store_id`)
    VALUES (buyerId,prodId,ownerId,orderStatus, orderType, storeId); 
    UPDATE `product` SET prod_stockAmount = prod_stockAmount - amountSelled WHERE prod_id = prodId;
    #Seller Cash update
    UPDATE `user` SET usr_cash = usr_cash + `product`.prod_price WHERE prod_id = prodId;
    COMMIT;
END