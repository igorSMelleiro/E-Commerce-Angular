CREATE VIEW `v_search_res_prods` AS SELECT 
 `product`.prod_id,`product`.prod_title,`product`.prod_stockAmount, `product`.prod_price, `product`.prod_discount,`product`.prod_shippingfee,
 `user`.usr_name, 
 `store`.store_name, `store`.store_phone,`store`.store_cellphone FROM `product` 
LEFT JOIN `user` ON `product`.user_usr_id = user.usr_id
LEFT JOIN `store` ON `user`.usr_id = store.user_usr_id ;