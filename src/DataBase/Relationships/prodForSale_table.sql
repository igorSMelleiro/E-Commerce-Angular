--Os Produtos do usuario para venda, N:N
CREATE TABLE usrSells(
    sell_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    FOREIGN KEY usr_id REFERENCES user(usr_id),
    FOREIGN KEY prod_id REFERENCES product(prod_id)
);