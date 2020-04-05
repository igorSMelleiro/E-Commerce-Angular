CREATE TABLE buyedProducts(
    prodBuyed_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    prod_status varchar(15),
    prod_id INT
);

 ALTER TABLE buyedProducts ADD CONSTRAINT prod_buyed FOREIGN KEY (prod_id) REFERENCES product(prod_id)