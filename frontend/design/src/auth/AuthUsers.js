export const authUsers = () => {
    
    if(localStorage.getItem("authenticationUsers") !== null){
        return true;
    }else{
        return false;
    }
}
