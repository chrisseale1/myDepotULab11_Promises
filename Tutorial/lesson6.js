var promise = Promise.reject("No Diggity");
var promise2 = Promise.resolve("So Much Diggity");

promise.catch(function(err){
    console.error("There was no diggity!");
    console.error(err.message);
});