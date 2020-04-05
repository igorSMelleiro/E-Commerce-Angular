CREATE PROCEDURE `getBuyedProducts` (buyerId INT)
BEGIN
SELECT 
    `product`.*,
    `image`.image_url
    FROM `orders` 
    INNER JOIN `product` ON `orders`.product_prod_id = `product`.prod_id
    INNER JOIN `image` ON `product`.prod_id = `image`.product_prod_id 
    WHERE `orders`.user_usr_id = buyerId;
END