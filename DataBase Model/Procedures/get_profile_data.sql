CREATE PROCEDURE `getProfileData` (usrId INT)
BEGIN
SELECT 
`user`.usr_name, `user`.usr_email,
`ud`.usrDetail_id, `ud`.usrDetail_firstPhone, `ud`.usrDetail_secondPhone,`ud`.usrDetail_birthday,`ud`.usrDetail_cpf,
`cd`.card_id, `cd`.card_number, `cd`.card_owner_name, `cd`.card_expiration_date,
`st`.store_id, `st`.store_name, `st`.store_cnpj, `st`.store_phone, `st`.store_cellphone
FROM `user`
LEFT OUTER JOIN `usrdetail` as `ud` ON `ud`.user_usr_id = `user`.usr_id
LEFT OUTER JOIN `card`  as `cd` ON `cd`.user_usr_id = `user`.usr_id
LEFT OUTER JOIN `store` as `st` ON `st`.user_usr_id = `user`.usr_id  
WHERE `user`.usr_id = usrId ;
END