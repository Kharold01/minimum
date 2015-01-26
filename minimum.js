

//Katie Harold
//CMP237
//Minimum Ch. 3


var min = function(x,y) {
	if(x==y){
		return "They are equal.";
	}
	else if(x<y) {
		return x;
	}
	else {
		return y;
	}
}

console.log(min(10,10));
// They are equal.
console.log(min(0,10));
// 0
console.log(min(0,-10));
// -10




