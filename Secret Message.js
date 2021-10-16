let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push('to', 'Program');

//changing the word easily to right
//geting the index first
var indx = secretMessage.indexOf('easily');
secretMessage[indx]='right';

//removing the first string
secretMessage.shift();

//making it the first on the list
secretMessage.unshift('Programming');

//deleting five items and replacing it by only one word 'know'
secretMessage.splice(6, 5, 'know');

console.log(secretMessage.join(' '));