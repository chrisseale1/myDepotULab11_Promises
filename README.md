### Instructions

The objective of this project series is to get a better understanding of promises. You may find this [Promise Workshop](https://github.com/asakusuma/promise-workshop) helpful.

Then complete the UsePromises project.

Work through tests to assist with completing functions.

### Initial Setup
* Clone the classroom project
* Install promise-it-wont-hurt as outlined below in Basic Requirements

#### Further Reading
[Async programming](http://rowanmanning.com/posts/javascript-for-beginners-async/)
[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
Function of [Promises](https://www.promisejs.org/)
[More Promises](https://gist.github.com/domenic/3889970)
[.then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
[.catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)

### Basic Req's
Prior to completing the lab, run through the Promise It Won't Hurt tutorial.

**Make sure your terminal is in the Tutorial folder.** Once in the directory, run the following commands:
```
$ npm install promise-it-wont-hurt -g
$ promise-it-wont-hurt
```
* You should create a separate JS file in the Tutorial folder for each exercise, and name the file accordingly
* When you are finished editing your code in VS Code, save it and then use the following command to check it:
```
promise-it-wont-hurt verify yourFileName.js
```

#### UsePromises
Using promises, complete the functionality of these mapping methods. Reading about [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) and [reduceRight](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight) will be helpful.

(Revisiting how [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) works will also be useful in this exercise)

* mapAsync - Takes in an array and an iterator function. Calls the iterator with all the values in the array. The iterator can return a promise the will resolve with the mapped value.

* mapAsyncInOrder -  Similar to mapAsync but the next value in the array will not be passed to the iterator until the previous promise fulfills.

* mapAsyncInDescendingOrder - Similar to mapAsyncInOrder but calls the iterator with all the values in the array in descending order.