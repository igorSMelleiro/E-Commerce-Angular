CREATE DATABASE TEST_AMBAR;

use TEST_AMBAR;

CREATE TABLE colors(
    color_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    color_name varchar(15) NOT NULL UNIQUE
);

CREATE TABLE condicao(
    condition_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    condition_name varchar(30)
);

CREATE TABLE conjunto (
    conjunto_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    conjunto_name INT
);

CREATE TABLE maker(
    maker_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    maker_name varchar(30)
);

CREATE TABLE material(
    mat_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    mat_name varchar(30) 
);

CREATE TABLE model(
    model_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    model_name varchar(30)
);

CREATE TABLE power(
    power_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    power_def varchar(30)
);



CREATE TABLE product(
    prod_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    prod_imgUrl varchar(255) NOT NULL, -- ? Devo Usar BLOB ? Qual melhor forma de armazenar imagens referencia-las ?
    prod_title varchar(255) NOT NULL, 
    prod_stockAmount varchar(2) NOT NULL, -- Ao menos um produto no estoque
    prod_price varchar(7) NOT NULL, -- ? Como setar o preço do produto de maneira que COR e Modelo e ect, modifiquem seu valor???
    prod_discount varchar(3), -- Porcentagem de desconto
    prod_address VARCHAR(80) NOT NULL,
    prod_color VARCHAR(30) NOT NULL,
    FOREIGN KEY prod_address REFERENCES usrAddress(address_id), -- Um produto pode ser enviado de localizões difernetes
    FOREIGN KEY prod_color KEY REFERENCES colors(color_id) -- Ao menos uma cor

);

CREATE TABLE prodSelled(
    prodSelled_id INT  PRIMARY KEY AUTO_INCREMENT,
    FOREIGN KEY (prod_id) REFERENCES product(prod_id)
);

--CREATE TABLE usrSells(
   -- FOREIGN KEY REFERENCES user(usr_id),
  --  FOREIGN KEY REFERENCES product(prod_id)
--);

CREATE TABLE size(
    size_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    size_def varchar(30)
);

CREATE TABLE storage(
    storage_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    storage_def varchar(30)
);


CREATE TABLE usr(
    usr_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    usr_name varchar(30) NOT NULL,
    usr_email varchar(50) NOT NULL UNIQUE, -- Emails com mais de 50 caracteres tem mais risco de serem falsos.
    usr_firstPhone varchar (15) NOT NULL UNIQUE, -- Idealmente , deve ser um por usuario, para possibilitar autenticação por 2 fatores
    usr_secondPhone varchar(15), -- não precisa ser unico, mas n pode ser usado para autenticação
    usr_birthday DATE NOT NULL,
    usr_cpf INT(12) NOT NULL -- NOT NULL?  DEVERIA SER CHAVE PRIMARIA ? 
     
 );


CREATE TABLE usrAddress(
    address_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    address_streetName varchar(255) NOT NULL, -- passivo de normalização
    address_number varchar(15) NOT NULL, -- passivo de normalização
    address_cep varchar(15) NOT NULL, -- passivo de normalização
    address_city varchar(30) NOT NULL,
    address_country varchar(30) NOT NULL
);

CREATE TABLE usrAddresses(
    FOREIGN KEY REFERENCES usr(usr_id),
    FOREIGN KEY REFERENCES usrAddress(address_id)
);

CREATE TABLE versions(
    vers_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    vers_name varchar(30)
);

CREATE TABLE voltage(
    voltage_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    voltage_def varchar(30) 
);

