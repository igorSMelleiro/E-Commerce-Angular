CREATE TABLE product(
    prod_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    prod_imgUrl varchar(250) NOT NULL, 
    prod_title varchar(250) NOT NULL, 
    prod_stockAmount varchar(2) NOT NULL, 
    prod_price varchar(7) NOT NULL, 
    prod_discount varchar(3) 
   
);