first().then(function(success) {
    return second(success);
}).then(console.log);


