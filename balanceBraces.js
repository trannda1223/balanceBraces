/*
balance the braces closed and open


balBraces('{}{') //false
balBraces('{}[]') //true
*/
// console.log('wtf')

var openBrace = {
	'{': '}',
	'(': ')',
	'[': ']',
}

var closeBrace = {
	'}': '{',
	')': '(',
	']': '['
}


var balBraces = function(str){
  var stack = [];

  //push a bunch of opens and close into a stack
  for(var i=0; i<str.length; i++){//loop and push opens/close
  	if(openBrace[str.charAt(i)]){
  		stack.push(str.charAt(i));
  		// console.log('charAt: ', str.charAt(i))
  		// console.log(stack.push(str.charAt(i)))
  	} 
  	if (closeBrace[str.charAt(i)]){
  		stack.push(str.charAt(i));
  	}
  }
  // console.log('stack: ', stack)
  var stack2 =[]

  for (var j=0; j<stack.length; j++){//loop stack
  	//compare open with corr close and take out of stack
  	if(openBrace[stack[j]]){
  		//compare with close
  		// stack[j]
  		for(var k=0; k<stack.length; k++){
  			//stack[k]
  			if(openBrace[stack[j]]===stack[k]){
  				stack2.push(stack.splice(j,1));//***if openBrace value corresponds to stack[k]//if theres an open brace and its corresponding close brace push to stack2

  				// stack.splice(k-1, 1);
  			}
  		}
  	}
  }

  //loop through the stack
  //see if 'i' has a corresponding closer in the stack if it does take both out the stack
  // console.log('stack2: ', stack2);
  // console.log('stack: ', stack);


  //now you want to check if the close corresponds to one in the stack 
  //if so take that ele out of stack

  if(stack.length===stack2.length){
  	return true;
  } else {
  	return false;
  }


}