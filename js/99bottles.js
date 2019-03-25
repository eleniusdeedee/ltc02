let poem1 = " bottles of beer on the wall, ";
let poem2 = " bottles of beer.\n\ Take one down, pass it around, "
let poem3 = " bottles of beer on the wall...\n\ "
let poem4 = "No more bottles of beer on the wall, no more bottles of beer. \n\
We've taken them down and passed them around; now we're drunk and passed out!"

let count = 99

function beerpoem () 
{
    if (count == 1)
    {
		console.log("1 bottle of beer on the wall, 1 bottle of beer.\n\ " + count);
		console.log("Take one down, pass it around, no more bottles of beer on the wall...\n\ ");
        console.log (poem4);
    }
    else if (count == 2)
    {
        console.log(count + poem1 + count + poem2 + (count-1) + "bottle of beer on the wall...\n\  ");
		console.log("Take one down, pass it around, 1 bottle of beer on the wall...\n\ ");
    }
    else
    {	
    console.log(count + poem1 + count + poem2 + (count-1) + poem3); 
    count = count - 1;
    beerpoem();
    };
}


beerpoem();
