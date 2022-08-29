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
var contacts=[bob];
function printPerson(person){
    console.log("Address book 1");
    console.log("Firstname:"+person.firstname+"\n"+"Lastname:"+person.lastname+"\n"+"Address:"+person.address+"\n"+"City:"+person.city+"\n"+"State:"+person.state+"\n"+"zip_code:"+person.zip+"\n"+"Phone_number:"+person.phonenumber+"\n"+"Email:"+person.email);
    
}
var list=function(){
    for(var i=0;i<contacts.length;i++){
        printPerson(contacts[i]);
    }
}
list();
