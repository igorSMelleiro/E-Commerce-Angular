export interface ProfileData{
    //user Data
    user_image? : any,
    user_name : string,
    user_email : string,
    //user Details Data
    user_detail_id : string,
    user_detail_firstphone : string, 
    user_detail_secondphone : string,
    user_detail_birthday : string,
    user_detail_cpf : string,
    //card
    user_card_id : string,
    user_card_number : string,
    user_card_owner_name : string,
    user_expiration_data : string,    
    //store 
    user_store_id : string,
    user_store_name :  string,
    user_store_cnpj :  string,
    user_store_phone : string, 
    user_store_cellphone :  string
}

export interface IBuyedProd{

    id : string,
    name : string,
    cost : string,
    date : string

}
