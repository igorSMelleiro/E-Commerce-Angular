CREATE PROCEDURE `showProductByStatusAndType` (prodStatus INT, usrId INT)
BEGIN 
	SELECT
		`product`.*,
		`image`.image_url,
        `store`.store_name, `store`.store_phone, `store`.store_cellphone
		FROM `orders`
        INNER JOIN `product` ON `orders`.product_prod_id = `product`.prod_id
        INNER JOIN `image` ON `product`.prod_id = `image`.product_prod_id
        INNER JOIN `store` ON `product`.store_store_id =  `store`.store_id
        WHERE `orders`.user_usr_id = userId AND `orders`.order_status = prodStatus;
		
END