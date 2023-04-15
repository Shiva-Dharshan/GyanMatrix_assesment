function login(){
    const x=document.getElementById("username").value;
    const y=document.getElementById("password").value;
    if(x=="susana.nguyen@example.com" && (y=="feet"||y=="salt") )
    {
        return true;
    }
    else if(x=="")
    {
        alert("Please enter your Email");
        return false;
    }
    else if(x!=="susana.nguyen@example.com")
    {alert("incorect Email");
    return false;
    }
    else if(y=="")
    {
        alert("Please enter your password");
        return false;
    }
    else if(y!="feet" || y!="salt"){
        alert("incorect password");
        return false;
    }
    
 }