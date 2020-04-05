CREATE PROCEDURE `getUserfavorites` (ownerId INT)
BEGIN
	SELECT
		`product`.*,
		`image`.image_url,
        `store`.store_name, `store`.store_phone, `store`.store_cellphone
		FROM `favorites`
        INNER JOIN `product` ON `favorites`.product_prod_id = `product`.prod_id
        INNER JOIN `image` ON `product`.prod_id = `image`.product_prod_id
        INNER JOIN `store` ON `product`.store_store_id =  `store`.store_id
        WHERE `favorites`.user_usr_id = ownerId;
END