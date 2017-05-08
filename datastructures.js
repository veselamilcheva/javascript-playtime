var promiseCount = 0;

function testPromise() {
    var thisPromiseCount = ++promiseCount;
    console.log(thisPromiseCount + ': Started - Sync code started');

    var p1 = new Promise(function(resolve, reject) {
        console.log(thisPromiseCount + ': Promise started - Async code started');

        window.setTimeout(
            function() {
                resolve(thisPromiseCount);
            }, Math.random() * 2000 + 1000);
    });

    p1.then(function(val) {
        console.log(val + ': Promise fulfilled - Async code terminated');
    }).catch(function(reason) {
        console.log('Handle rejected promise ('+reason+') here. ');
    });
    console.log(thisPromiseCount + ': Promise made - Sync code terminated');

}


testPromise();
testPromise();
testPromise();
