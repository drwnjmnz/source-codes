/* Function that Converts Decimal to Binary with Bits*/
function Convert() {
	     
    var binary = "";
    var bit = document.getElementById("bit").value;
    var decimal = document.getElementById("decimal").value;
    
    for(i=0;i<bit;i++)
    { 
        var r = decimal % 2;
        if(r == 0){ 
            binary = binary + "0";
        }
        else {
            binary = binary + "1";  
        }
       decimal = Math.trunc(decimal/2); 
   }
   
   var binaryStr1 = binary.split("");
   var binaryStr2 = binaryStr1.reverse();
   var binaryStr = binaryStr2.join("");
   document.getElementById("bin").value = binaryStr;
}
/* Function that Resets the Input and Output*/
function Reset() {
document.getElementById("decimal").value = "";
 document.getElementById("bit").value = "";
  document.getElementById("bin").value = "";
}
/* Function that checks the input if it is palindrome*/
function Palindrome(){

    var String = document.getElementById("string").value;
    /* remove special characters, spaces and make lowercase*/
    var removeuchar = String.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    
    /* reverse removeChar for comparison*/
    var check = removeuchar.split('').reverse().join('');
    
    /* Check to see if myString is a Palindrome*/
    if(removeuchar === check){
        document.getElementById("result").value = 'The string above is a Palindrome';
    }else{
        document.getElementById("result").value = 'The string above is not a Palindrome';
    }
    
}
