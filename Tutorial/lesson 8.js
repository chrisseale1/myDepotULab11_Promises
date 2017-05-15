var attachTitle = function(firstArg){
    return ("DR. " + firstArg);
}

var promise = new Promise(function(fulfill, reject){
    fulfill('MANHATTAN');
});

promise.then(function(success){
    return attachTitle(success);
}).then(console.log);
