let AddressBook={
    firstname:"firstname",
    lastname:"lastname",
    address:"address",
    city:"city",
    state:"state",
    zip:"zip_code",
    phone_no:"phone_number",
    email:"email_id"
};
let contacts=[AddressBook];
function print(person){
    console.log("Address Book");
    console.log(person.firstname+"\n"+person.lastname+"\n"+person.address+"\n"+person.city+"\n"+person.state+"\n"+person.zip+"\n"+person.phone_no+"\n"+person.email);
}
let list=function(){
    for(let i=0;i<contacts.length;i++){
        print(contacts[i]);
    }
}
list();