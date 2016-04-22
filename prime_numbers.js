function primenumbers1 (limit) {
	var arr=[];
	var execs = 0;
	for (var j = 1; j <= limit; j++) {

	    var notPrime = false;
	    for (var i = 2; i <= j; i++) {
	    	execs++;
	        if (j%i===0 && i!==j) {
	            notPrime = true;
	        }
	    }
	    if (notPrime === false) {
	        arr.push(j);
	    }
	}
	console.log(arr.toString());
	console.log(execs);
}

primenumbers1(150);

function primenumbers2 (limit) {
	var arr=[];
	var execs = 0;
	for (var j = 1; j <= limit; j++) {

	    var notPrime = false;
	    for (var i = 1; i <= j; i++) {
	    	execs++;
	        if (j%i===0 && i!==j && i!==1) {
	            notPrime = true;
	            break;
	        }
	    }
	    if (notPrime === false) {
	        arr.push(j);
	    }
	}
	console.log(arr.toString());
	console.log(execs);
}

primenumbers2(150);

function primenumbers3 (limit) {
	var arr=[];
	var execs = 0;
	for (var j = 1; j <= limit; j++) {

	    var Prime = true;
	    for (var i = 0; i < arr.length; i++) {
	    	execs++;
	        if (j%arr[i]===0 && arr[i]!==1) {
	            Prime = false;
	            break;
	        }
	    }
	    if (Prime === true) {
	        arr.push(j);
	    }
	}
	console.log(arr.toString());
	console.log(execs);
}

primenumbers3(150);
