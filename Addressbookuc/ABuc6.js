let bob={
    firstname:"Bob",
    lastname:"Jones",
    address:"M K colony",
    city:"Vijaywada",
    state:"Hydrabadh",
    zip:"562251",
    phonenumber:"9736521584",
    email:"jon@gmail.com"
};
let mariya={
    firstname:"Mariya",
    lastname:"Fernandis",
    address:"Kolka Colony",
    city:"Kolkata",
    state:"West Bengal",
    zip:"562841",
    phonenumber:"8880549105",
    email:"fery@gmail.com"
};
var contacts=[bob,mariya];
function printPerson(person){
    console.log("Firstname:"+person.firstname+"\n"+"Lastname:"+person.lastname+"\n"+"Address:"+person.address+"\n"+"City:"+person.city+"\n"+"State:"+person.state+"\n"+"zip_code:"+person.zip+"\n"+"Phone_number:"+person.phonenumber+"\n"+"Email:"+person.email);
    
}
var list=function(){
    for(var i=0;i<contacts.length;i++){
        printPerson(contacts[i]);
    }
}
list();
console.log(contacts.reduce(printPerson));