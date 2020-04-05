
CREATE TABLE usrAddress(
    address_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    address_streetName varchar(255) NOT NULL, -- passivo de normalização
    address_number varchar(15) NOT NULL, -- passivo de normalização
    address_district varchar(50) NOT NULL, -- passivo de normalização
    address_cep varchar(15) NOT NULL -- passivo de normalização
    
  );