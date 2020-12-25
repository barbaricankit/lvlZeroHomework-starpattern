//Star Pattern
/*

*
**
***
****
*****

*/
var readLineSync= require('readline-sync')
console.log('Enter a number')
n=readLineSync.question()
for(var i=0;i<n;i++)
{
  var str=""
  for(var j=0;j<=i;j++)
  {
    str+='*';
  }
  console.log(str);
}

//Bonus
for(var i=0;i<n;i++)
{
  var str=""
  for(var j=i;j<n;j++)
  {
    str+='*';
  }
  console.log(str);
}