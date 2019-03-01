var hacker1 = "Iron";
  console.log("The driver's name is " + hacker1);
//var hacker2 = "iron";
//console.log(hacker2);
var hacker2= prompt("Input a name? ");
  console.log("The navigator's name is  " + hacker2);

//Depending on which name is longer, print:
if (hacker1.length > hacker2.length)
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
if (hacker1.length < hacker2.length)
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
if (hacker1.length == hacker2.length)
  console.log("wow, you both got equally long names " + hacker1.length + " characters");

//Print all the characters of the driver's name, separated by a space and in capitals
arrStr = [];
    for (var i = 0; i < hacker1.length; i++) {
      arrStr.push(hacker1[i] + " ");
    }
      console.log(arrStr.join(""));

//Print all the characters of the navigator's name, in reverse order. 
x = [];
for (var j = hacker2.length - 1; j >= 0; j--) {
      x.push(hacker2[j].toUpperCase()) ;
      }
    console.log(x.join(" "));



//Depending on the lexicographic order of the strings, print: 
//The driver's name goes first
//Yo, the navigator goes first definitely
//What?! You both got the same name?   

function orderNames() {

  switch (hacker1.localeCompare(hacker2)) {
    case -1:
      console.log("The driver's name goes first");
      break;
    case 1:
      console.log('Yo, the navigator goes first definitely');
      break;
    case 0:
      console.log("What?! You both got the same name?");
      break;
    default:
      console.log("please put a diff value");
  }
}
orderNames();

//Ask the user for a new string and check if it's a Palindrome. 

var strInput = prompt("Input a sentence");
var s = strInput.replace(/\s+|\,|\!|\.|\_|\-|\?|\(|\)|\/|\\/g, '').toLowerCase();
var p = s.split("").reverse().join("");
    console.log(s);
    console.log(p);
      if (s === p) {
        alert("The input is palindrome");
        }
      else {
        alert("The input is not palindrome");
      }



//Go to lorem ipsum generator and:

//Generate 3 parragraphs. Store the text in a String
//Make your program count the number of words in the string
//Make your program count the number of times the latin word etappears    


var lopStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices lorem in vulputate semper. Donec nulla risus, tincidunt a nunc nec, ultrices vestibulum est. Morbi non gravida nisi, eu accumsan risus. Sed feugiat libero sit amet magna laoreet efficitur. Sed risus sapien, egestas in erat eu, bibendum facilisis turpis. Duis sit amet placerat lectus. Maecenas sodales eros id nulla tristique convallis non et nisl. Nam et sollicitudin felis. Ut et facilisis odio. Sed volutpat nisi elit, id consequat sapien pretium quis. Integer id lacinia augue, id feugiat ipsum. Duis vitae lacus lorem. Mauris interdum laoreet pulvinar. Integer ultrices nibh eu elementum condimentum. Donec bibendum tortor nibh, sed mattis tellus suscipit et. Sed ac suscipit sem, non maximus tortor. Integer bibendum hendrerit dolor a maximus. Donec mattis sagittis lorem ut pharetra. Sed consequat facilisis varius. Mauris egestas magna sit amet lorem mollis vestibulum. Integer sit amet tristique mi. Nullam libero justo, bibendum a felis eget, efficitur auctor nulla. Nunc egestas venenatis augue, id aliquam justo feugiat non. Nunc non orci nulla. Etiam nec metus leo. Morbi eget justo eleifend mi ornare euismod a aliquam risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed malesuada sit amet enim sed interdum. Maecenas non felis sit amet neque aliquam venenatis. Etiam sit amet mauris vitae nunc rhoncus maximus quis non enim. Nulla sed bibendum odio, sed consectetur velit. Sed malesuada vehicula leo quis rhoncus. Ut et eros velit. Pellentesque velit enim, placerat in mi vitae, vestibulum tincidunt nisi. In non urna interdum, sodales lectus quis, semper nisi. Sed nec purus quis enim pulvinar euismod. Donec sit amet aliquam dolor. Praesent turpis enim, scelerisque id mauris ut, aliquet sodales elit. Ut nibh eros, volutpat dictum enim non, euismod tincidunt ex. Aenean placerat consectetur velit, viverra facilisis metus tristique non.";


function wordcount(lopStr) {
  var c = lopStr.split(" ");
  var word = 0;
  var count = 0;
  
  for (var i = 0; i < c.length; i++) {
    if (c[i] != "") {
       if (c[i]=="et"){
         count+=1;
       }
      word += 1;
    }
    
    //console.log(c[i]);
  }
  console.log("the total no of words: " + word +" and total # of et:" + count);
}
wordcount(lopStr);