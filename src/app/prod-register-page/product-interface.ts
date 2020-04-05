export interface IProductFullData {
    prod_specs : IProductSpecs,
    prod_address? : IProdAddress,
    prod_addressId? : string
}
export interface IProductSpecs {
    prod_images : ArrayBuffer[],
    prod_code : string,
    prod_categ : number,
    prod_title : string,
    prod_stockAmount : string,
    prod_price : string,
    prod_discount : string,
    user_usr_id : string,
    //address 
    
}
export interface IExistingAddress {
    address_id : string
}
export interface IProdAddress{
    address_streetName : string,
    address_number : string,
    address_cep : string,
    address_city:string,
    address_state : string,
    address_country : string
}