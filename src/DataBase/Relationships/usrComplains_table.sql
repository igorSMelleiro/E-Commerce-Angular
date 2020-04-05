CREATE TABLE usrComplains(
    complain_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    FOREIGN KEY usr_complain REFERENCES user(usr_id),
    FOREIGN KEY prod_complained REFERENCES product(prod_id)
);