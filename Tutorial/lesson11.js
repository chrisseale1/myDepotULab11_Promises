function all(promise1, promise2){
    var promise = new Promise(function(fulfill, reject) {
        var counter = 0;
        var arr = [];

        promise1.then(function(success) {
            counter++;
            arr[0] = success;
            if (counter === 2) {
                fulfill(arr);
            }
        });
        promise2.then(function(success)  {
            counter++;
            arr[1] = success;
            if (counter === 2) {
                fulfill(arr);
            }
        });
    });
    return promise;

}
all(getPromise1(), getPromise2()).then(console.log);