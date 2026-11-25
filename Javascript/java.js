let data1=function(){
    return "Hello Javascript";

}
console.log(data1());
let emp=function(){
    return "Hello Employee";
}
console.log(emp());
//arrow function
let data2=()=>{
    return "Hello Arrow Function";
}
console.log(data2());

let multiply=(a,b)=>{
    return a*b;
}
console.log(multiply(5,6));
// call back function
function display(callback){
    console.log("Display function");
    callback();
} //in one function we can pass another function as parameter and that is called call back function
function show(){
    console.log("Show function");
}
function sece(callback){
    console.log("Sece function");
    callback();
}
function student(){
    console.log("Student function");
}
sece(student);
//whatsapp
//Notification
function notify(callback){
    console.log("I am sending a whatsapp notification");
    callback();
}
function message(){
    console.log("I am receiving a message");
}
notify(message);
//promises
//resolve and reject are two parameters of promise function. resolve is used when the promise is fulfilled and reject is used when the promise is rejected.
//fullfilled and rejected are two states of promise. fulfilled means the promise is completed successfully and rejected means the promise is not completed successfully.
function promiseExample(){
    return new Promise((resolve,reject)=>{
        let a=1+1;
        if(a==2){
            resolve("Success");
        }
        else{
            reject("Failed");
        }
    });
}
let fetch_api = new Promise((resolve, reject) => {
    let api = false;

    if (api) {
        resolve("API is working");
    }
    else {
        reject("API is not working");
    }
});

fetch_api.then(data => console.log(data))
    .catch(error => console.log(error));

let delayedFetchApi = new Promise((resolve, reject) => {
    setTimeout(() => {
        let api = false;
        if (api) {
            resolve("Fetched api data");
        } else {
            reject("Failed to fetch api data");
        }
    }, 2000);
});

delayedFetchApi
    .then(data => console.log(data))
    .catch(error => console.log(error));