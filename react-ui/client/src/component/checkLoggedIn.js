const userLoggedIn = ()=>{
    const loggedUser = localStorage.getItem("user")|| 0 ;
    console.log("-->loggedUser",JSON.parse(loggedUser).token)
    return loggedUser?JSON.parse(loggedUser).token:0;
}

export default userLoggedIn;