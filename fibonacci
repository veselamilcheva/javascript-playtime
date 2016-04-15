// 1, 1, 2, 3, 5, 8, 13, 21... Fibonacci i(n) = i(n-1) + i(n-2);

function fibonaci (limit, prev1, prev2) {
    prev1 = prev1 || 0;
    prev2 = prev2 || 1;
    var sum = prev1 + prev2;

    if (sum > limit)
        return;

    console.log(sum);
    fibonaci (limit, prev2, sum);
}

fibonaci (100);
