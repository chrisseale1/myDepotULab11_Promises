var promise = new Promise(function(fulfill, reject){
    setTimeout(function(){
        var e = new Error('REJECTED!')
        reject(e);   
 }, 300);
});

// promise.then(null,console.log);
function onReject(error) {
    console.log(error.message)
}
promise.then(null, onReject);