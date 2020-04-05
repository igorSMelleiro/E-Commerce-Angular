CREATE TABLE favorites(
    favorite_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY fav_prod REFERENCES product(prod_id),
    FOREIGN KEY related_usr REFERENCES user(usr_id)
);
