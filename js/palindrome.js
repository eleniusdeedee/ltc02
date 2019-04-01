
function isitapalindrome(a){
	let l = a.length
	if (l == 0 || l == 1){
        return true;
    }

    else if (a[0] == a.substring(l-1,l)) {
//        console.log (a[0])
//        console.log (a.substring (l-1,l))
        isitapalindrome (a.substring(1,a.length-2))
        return true
    }
    else 
 //       console.log (a[0])
 //       console.log (a.substring(l-1,l))
 //       console.log ('ну что поделать!')
        return false
}

let u = "abbdhkalsalalad"
let w = "anutforajaroftuna"
let x = "abcdcba"
let y = "madamimadam"
let z = "neveroddoreven"



console.log (u + " " + isitapalindrome(u) + " \n ")
console.log (w + " " + isitapalindrome(w) + " \n ")
console.log (x + " " + isitapalindrome(x) + " \n ")
console.log (y + " " + isitapalindrome(y) + " \n ")
console.log (z + " " + isitapalindrome(z) + "\n ")
 
