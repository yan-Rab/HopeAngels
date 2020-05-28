export const authOngs = () => {
    if(localStorage.getItem('tokenOng') !== null){
        return true;
    }else{
        return false
    }
}