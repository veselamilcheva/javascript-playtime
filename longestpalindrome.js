longestPalindrome=function(s, found){
    found = found || 0;
    if (found && s.length <= found) {
        return found;
    }
    if (s.length < 2) {
        found = s.length;
        return found;
    }
    var t = s, c = 0;
    for (a = 0, c = s.length, b = s.length - 1; a < b && c > 0;) {
        if (t[a] === t[b]) {
            a += 1;
            b -= 1;
            continue;
        }
        c -= 1;
        a = 0;
        b = c-1;
        t = t.substring(0, c);
    }
    if (t.length > 0 && t.length > found) {
        found = t.length;
    }
    if (s.length > 2) {
        return longestPalindrome(s.substring(1), found);
    }
    return found;
}

console.log(longestPalindrome('ssbbaabbbb'));
