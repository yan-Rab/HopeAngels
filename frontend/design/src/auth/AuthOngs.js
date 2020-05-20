export const authOngs = () => {
    if(localStorage.getItem('authenticationOngs') !== null){
        return true;
    }else{
        return false
    }
}