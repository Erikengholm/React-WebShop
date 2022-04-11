import Cookies from 'universal-cookie';

const CreateCookie = (Produkt) =>{
    const cookies = new Cookies();
    var arr = []
    arr.push(Produkt)
    cookies.set('Erik-Web-Shop', JSON.stringify(arr), { path: '/' });
}

const UpdateCookie = (Produkt) =>{
    const cookies = new Cookies();
    const UpdateCookie = cookies.get('Erik-Web-Shop');
    UpdateCookie.push(Produkt)
    console.log(UpdateCookie)
    cookies.set('Erik-Web-Shop', JSON.stringify(UpdateCookie), { path: '/' });
}

const RemoveProductCookie = (Produkt) =>{
    const cookies = new Cookies();
    const UpdateCookie = cookies.get('Erik-Web-Shop');
    for( var i = 0; i < UpdateCookie.length; i++){ 
        
        if ( UpdateCookie[i].id === Produkt.id) { 
            
            UpdateCookie.splice(i, 1); 
            break;
        }
    
    }
    cookies.set('Erik-Web-Shop', JSON.stringify(UpdateCookie), { path: '/' });
    
}

const CheckIfCookieExist = (Produkt) =>{
    const cookies = new Cookies();

    if(!cookies.get('Erik-Web-Shop')){
        CreateCookie(Produkt)
        }
    else{
        UpdateCookie(Produkt)
    }

}

export {CheckIfCookieExist,RemoveProductCookie}