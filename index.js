function receivesAFunction(callback) {
    callback();
}

const returnsANamedFunction = function(namedFunction) {
    return function namedFunction() {
    console.log("I am a named function");
}
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function");
}
}