CREATE TABLE usrAddresses(
    address_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    FOREIGN KEY usr_id REFERENCES user(usr_id),
    FOREIGN KEY usr_addresses REFERENCES usrAddress(address_id)
);