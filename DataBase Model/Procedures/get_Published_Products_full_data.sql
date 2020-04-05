CREATE PROCEDURE `getPublishedProductsFullData` (ownerId INT)
BEGIN	
	SELECT
		`product`.*,
		`image`.*,
		`address`.*
		FROM `product`
		INNER JOIN `image` ON `product`.prod_id = `image`.product_prod_id
		INNER JOIN `product_has_address`  ON `product_has_address`.product_user_usr_id = ownerId
		INNER JOIN `address` ON  `product_has_address`.address_address_id = `address`.address_id
        WHERE `product`.user_usr_id = ownerId;
END