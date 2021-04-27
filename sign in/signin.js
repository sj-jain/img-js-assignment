console.log("aaghdydhdg")

let validUser = false;
let validpass = false;
const name = document.getElementById('element1');
const password = document.getElementById('pass');
console.log('name');
let regex=[]


element1.addEventListener('blur', ()=>{
    console.log("name is blurred");
    
    regex[0] = /^[\w]+([\w_\-\.]+)@([\w_\-\.]+)\.([a-zA-Z]{2,4})$/;
    let str = element1.value;
    
    console.log(regex, str);
    if(str.length==0){
        console.log('Your name is valid');
        document.getElementById('element1').style.borderColor='red';
        document.getElementById('emailempty').style.display='block';
        document.getElementById('emailvalid').style.display='none';
        validUser = false;}
        else{
        console.log('Your name is valid');
        document.getElementById('element1').style.borderColor='lightgreen';
        document.getElementById('emailempty').style.display='none';
        validUser = true;}

         if (regex[0].test(str)==false){
            console.log('Your EMAIL is not valid');
            document.getElementById('element1').style.borderColor='red';
            document.getElementById('emailvalid').style.display='block';
            ;
            validUser = false;
        }
        else {console.log('Your EMAIL is valid');
            document.getElementById('element1').style.borderColor='lightgreen';
            document.getElementById('emailvalid').style.display='none';
            validUser = true;}
        })
        pass.addEventListener('blur', ()=>{
            regex[1]=/(\w+){8,30}/;
            let passw = pass.value;
            if (regex[1].test(passw)==false){
            console.log('Your password is not valid');
            document.getElementById('pass').style.borderColor='red';
            document.getElementById('passinvalid').style.display='block';
            validpass = false;}
            else { console.log('Your password is valid');
            document.getElementById('pass').style.borderColor='lightgreen';
            document.getElementById('passinvalid').style.display='none';
            validpass = true;}
        })
    let submit = document.getElementById('on');
    on.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log('you clicked')
        console.log(validUser,validpass);
        if( validUser==true && validpass==true){
    
    

    var email1=document.getElementById('element1')
    var password1=document.getElementById('pass')
    console.log(email1.value,password1.value);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4){
            if (this.status == 200) {
                let response = JSON.parse(this.response);
                alert("Form submitted with Json" + response["token"]);
            }
            else if(this.status != 200){
                alert("Error "+this.status+" occured!")}
        }
    }
    xhttp.open("POST", "https://reqres.in/api/login", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); 
    xhttp.send(`email=${email1.value}&password=${password1.value}`);
    
        }
        else{
            alert("enter valid credentials")
        }
    })
    