function mapAsync(iterator, obj, context) {
    var output = [];
    for(var i = 0; i < obj.length; i++) {
        output.push(iterator(obj[i]));
    }
    return Promise.all(output);
};
function mapAsyncInOrder(iterator, array, context) {
    if(array.constructor !== Array) {
        return Promise.resolve([]);
    }
    return mapAsync(iterator, array, context);
};
function mapAsyncInDescendingOrder(iterator, array, context) {
    if(array.constructor !== Array) {
        return Promise.resolve([]);
    }
    var output = [];
    var p = Promise.resolve();
    var z = array.length - 1;
    for(var i = array.length - 1; i >= 0; i--) {
        p = p.then(function() {
            return iterator(array[z]);
        }).then(function(success) {
            output.push(success);
            z--;
        });
    }
    p = p.then(function() {
        return output;
    });
    return p;
};