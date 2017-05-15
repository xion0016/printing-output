///*global alert*/
var a = 3;
var b = 5;
var c;

alert( "var a = 3;\nvar b = 5;\nvar c;\n___________________\n" + 
      "a + b = " + (a+b) + "\n" + 
      "a - b = " + (a-b) + "\n" + 
      "a * b = " + (a*b) + "\n" + 
      "a % b = " + (a%b) + "\n" + 
      "a += b = " + (a+=b) + "\n" +
      "a *= b = " + (a*=b) + "\n" +
      "a /= b = " + (a/=b) + "\n" +
      "a %= b = " + (a%=b) + "\n" +
      "a == b = " + (a==b) + "\n" +
      "a != b = " + (a!=b) + "\n" +
      "a > b = " + (a>b) + "\n" + 
      "a < b = " + (a<b) + "\n" + 
      "!a && !c  = " + (!a&&!c) + "\n" + 
      "!a || !c = " + (!a||!c) + "\n"
     );


var first_name;
first_name = "Mandy";

var last_name ;
last_name = "Xiong";

var email ;
email = "xion0016@algonquinlive.com";

var output = "My name is " + (first_name) + " " + (last_name) + "." + " You can contact me at " + (email) + "." ;

alert ("My name is " + (first_name) + " " + (last_name) + "." + " You can contact me at " + (email) + ".");

alert (output);
