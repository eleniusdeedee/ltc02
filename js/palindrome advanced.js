
let str = ".,!?[]";
let u = ",abDG ds ba";
let unospace = u.replace(/\s/g,'');
let lowu = unospace.toLowerCase()   
let n = str.includes(lowu[0]);
let l = lowu.length
let n = str.incluser(lowu)

console.log (u)
console.log (unospace)
console.log(lowu)
console.log (n)


/*
function isitapalindrome(a){
    let l = a.length
	if (l == 0 || l == 1){
//      console.log ("это вырожденный случай")
        return true;
    }

    else if (a[0] == a[l-1]) {
//       console.log (a[0])
//       console.log (a.substring (l-1,l))
//      console.log (a.substring(1, l-1))
        return isitapalindrome (a.substring(1,l-1))
        
        
    }
    else {
 //       console.log (a[0])
 //       console.log (a.substring(l-1,l))
//        console.log ('нe похоже на палиндром\n')
        return false
    }
}
*/

let w = "anutforajaroftuna"
let x = "aba"
let y = "madamimadam"
let z = "neveroddoreven"


/*console.log (u + " " + isitapalindrome(u) + " \n ")
console.log (w + " " + isitapalindrome(w) + " \n ")
console.log (x + " " + isitapalindrome(x) + " \n ")
console.log (y + " " + isitapalindrome(y) + " \n ")
console.log (z + " " + isitapalindrome(z) + "\n ")
*/

 
