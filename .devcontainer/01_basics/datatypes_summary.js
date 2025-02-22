const score=100
const scorevalue=100.3
const ismale=true
const money=null
const id=Symbol("123")
const did=Symbol("123")
console.log(id);
console.log(did);
console.log(id==did);  //false
console.log(id===did);   //false
const bignumber=732728362846;
console.log(bignumber)
// arrays
let arr=["krishna","papa","mummy"];    
console.log(arr);
console.log(typeof arr);
//objects
let myobj={
    name:"krishnaa",
    age:20,
    address:"kharikuan",
};

console.log(typeof myobj);
//functions
const temp=function(){
    console.log("hello world");
};

console.log(typeof temp);

/////stack(primitive) heap(non primitive)
let namee="krishna";
let anamee=namee;            // a <- b but a="radhika" then a="radhika" .....
anamee="radhika";
console.log(namee);
console.log(anamee);
 
let userone={email:"krishna.125766@gmail.com",upi:"krishsehgal20"};
let usertwo=userone;
usertwo.email="radhika@gmail.com";
console.log(userone.email);           //change dono mei hojayega ek tarikhe se upper wala hi concept lag gya
console.log(usertwo.email);

