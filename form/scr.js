console.log("aaghdydhdg")
const name1 = document.getElementById('element1');
const name2 = document.getElementById('element3');
const name3 = document.getElementById('element4');
const name4 = document.getElementById('element5');
const name5 = document.getElementById('element6');
const name6 = document.getElementById('element7');
const name7 = document.getElementById('element8');
let validUser = false;
console.log('name1');
element1.addEventListener('onclick', ()=>{
    document.getElementById('element1').style.borderColor='white';
})
element1.addEventListener('input', ()=>{
    console.log("name is blurred");
    let regex = /^[a-zA-Z\s]{2,100}$/;
    let str = element1.value;
    console.log(regex, str);
    if(str.length==0){
        console.log('name cannot be empty');
        document.getElementById('element1').style.borderColor='red';
        document.getElementById('namevalid1').style.display='block';
        validUser= false;
    }
    else {
        document.getElementById('element1').style.borderColor='lightgreen';
        document.getElementById('namevalid1').style.display='none';
        
    }
    if(regex.test(str)){
        console.log('Your name is valid');
        document.getElementById('element1').style.borderColor='lightgreen';
        document.getElementById('namevalid1').style.display='none';
        validUser = true;}
    else{
        console.log('Your name is not valid');
        document.getElementById('element1').style.borderColor='red';
        document.getElementById('namevalid1').style.display='block';
        validUser = false;
    }

})
    element3.addEventListener('onclick', ()=>{
        document.getElementById('element3').style.borderColor='white';
    })
    element3.addEventListener('input', ()=>{
        console.log("name is blurred");
        let regex = /^([0-9]){1,3}$/;
        let str = element3.value;
        console.log(regex, str);
        if(str.length==0){
            console.log('name cannot be empty');
            document.getElementById('element3').style.borderColor='red';
            document.getElementById('namevalid3').style.display='block';
            validUser= false;
        }
        else {
            document.getElementById('element3').style.borderColor='lightgreen';
            document.getElementById('namevalid3').style.display='none';
            
        }
        if(regex.test(str)){
            console.log('Your name is valid');
            document.getElementById('element3').style.borderColor='lightgreen';
            document.getElementById('namevalid3').style.display='none';
            validUser = true;}
        else{
            console.log('Your name is not valid');
            document.getElementById('element3').style.borderColor='red';
            document.getElementById('namevalid3').style.display='block';
            validUser = false;
        }
})

element4.addEventListener('onclick', ()=>{
    document.getElementById('element3').style.borderColor='white';
})
element4.addEventListener('input', ()=>{
    console.log("name is blurred");
    let regex = /^(\+91[\-\s]?)?(0-9[\-\s]?)?[0]?(91)?(6|7|8|9)\d{9}/;
    let str = element4.value;
    console.log(regex, str);
    if(str.length==0){
        console.log('name cannot be empty');
        document.getElementById('element4').style.borderColor='red';
        document.getElementById('namevalid4').style.display='block';
        validUser= false;
    }
    else {
        document.getElementById('element4').style.borderColor='lightgreen';
        document.getElementById('namevalid4').style.display='none';
        
    }
    if(regex.test(str)==true){
        console.log('Your name is valid');
        document.getElementById('element4').style.borderColor='lightgreen';
        document.getElementById('namevalid4').style.display='none';
        validUser = true;}
    else{
        console.log('Your name is not valid');
        document.getElementById('element4').style.borderColor='red';
        document.getElementById('namevalid4').style.display='block';
        validUser = false;
    }
})

element5.addEventListener('onclick', ()=>{
    document.getElementById('element5').style.borderColor='white';
})
element5.addEventListener('input', ()=>{
    console.log("name is blurred");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = element5.value;
    console.log(regex, str);
    if(str.length==0){
        console.log('name cannot be empty');
        document.getElementById('element5').style.borderColor='red';
        document.getElementById('namevalid5').style.display='block';
        validUser= false;
    }
    else {
        document.getElementById('element5').style.borderColor='lightgreen';
        document.getElementById('namevalid5').style.display='none';
        
    }
    if(regex.test(str)==true){
        console.log('Your name is valid');
        document.getElementById('element5').style.borderColor='lightgreen';
        document.getElementById('namevalid5').style.display='none';
        validUser = true;}
    else{
        console.log('Your name is not valid');
        document.getElementById('element5').style.borderColor='red';
        document.getElementById('namevalid5').style.display='block';
        validUser = false;
    }
})

element6.addEventListener('onclick', ()=>{
    document.getElementById('element6').style.borderColor='white';
})
element6.addEventListener('blur', ()=>{
    console.log("name is blurred");
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var passw = element6.value;
    console.log(regex, passw);
    if(passw.length==0){
        console.log('name cannot be empty');
        document.getElementById('element6').style.borderColor='red';
        document.getElementById('namevalid6').style.display='block';
        validUser= false;
    }
    else {
        document.getElementById('element6').style.borderColor='lightgreen';
        document.getElementById('namevalid6').style.display='none';
        
    }
    if(regex.test(passw)==true){
        console.log('Your name is valid');
        document.getElementById('element6').style.borderColor='lightgreen';
        document.getElementById('namevalid6').style.display='none';
        validUser = true;}
    else{
        console.log('Your name is not valid');
        document.getElementById('element6').style.borderColor='red';
        document.getElementById('namevalid6').style.display='block';
        validUser = false;
    }
})

element7.addEventListener('onclick', ()=>{
    document.getElementById('element7').style.borderColor='white';
})
element7.addEventListener('blur', ()=>{
    console.log("name is blurred");
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    var passw = element6.value;
    var pass = element7.value;

    console.log(regex, pass);
    if(pass.length==0){
        console.log('name cannot be empty');
        document.getElementById('element7').style.borderColor='red';
        document.getElementById('namevalid7').style.display='block';
        validUser= false;
    }
    else {
        document.getElementById('element7').style.borderColor='lightgreen';
        document.getElementById('namevalid7').style.display='none';
        
    }
    if(passw!=pass){
        console.log('Your name is valid');
        document.getElementById('element7').style.borderColor='red';
        document.getElementById('namevalid7').style.display='block';
        validUser = true;}
    else{
        console.log('Your name is not valid');
        document.getElementById('element7').style.borderColor='lightgreen';
        document.getElementById('namevalid7').style.display='none';
        validUser = false;
    }
})

element8.addEventListener('onclick', ()=>{
    document.getElementById('element8').style.borderColor='white';
})
element8.addEventListener('input', ()=>{
    console.log("name is blurred");
    let regex = /^[a-zA-Z\s]{2,20}$/;
    let str = element8.value;
    console.log(regex, str);
    if(str.length==0){
        console.log('name cannot be empty');
        document.getElementById('element8').style.borderColor='red';
        document.getElementById('namevalid8').style.display='block';
        validUser= false;
    }
    else {
        document.getElementById('element8').style.borderColor='lightgreen';
        document.getElementById('namevalid8').style.display='none';
        
    }
    if(regex.test(str)){
        console.log('Your name is valid');
        document.getElementById('element8').style.borderColor='lightgreen';
        document.getElementById('namevalid8').style.display='none';
        validUser = true;}
    else{
        console.log('Your name is not valid');
        document.getElementById('element8').style.borderColor='red';
        document.getElementById('namevalid8').style.display='block';
        validUser = false;
    }

})