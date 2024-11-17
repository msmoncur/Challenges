function createPatient(name, ssn) {
    //private items 
    const PII = {
        name: name, 
        ssn: ssn
    }; 


    //public methods 
    return {
        getName: function(){
            return PII.name; 
        },
    };
}

//patient object
const patient2 = createPatient("Jane", "123-45-6789")

console.log(patient2.names); 
console.log(patient2.ssn);  
console.log(patient2.getName()); 
console.log(patient2.getSSN());//should not work 