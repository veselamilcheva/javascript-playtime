var some_object = {
	a: 'fdsfd',
	b: 'adsdsd',
	c: {
		'f': 'sdsdf',
		'd': {
			a: 'fdsfd',
			b: 'adsdsd',
			c: {
				'f': 'sdsdf',
				'd': {
					'thisone': 'you found me!'
				}
			}
		}
	}
};

function find_member (name, haystack) {
	// console.log(typeof haystack + JSON.stringify(haystack));
	if (haystack.hasOwnProperty(name)) {
		return haystack[name];
	}
	for(var prop in haystack) {
		if (typeof haystack[prop] == 'object') {
			return find_member (name, haystack[prop]);
		}
	}

	return false;
}

console.log(find_member('thisone', some_object));
