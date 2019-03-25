function beerpoem (count) 
{
    
    let poem1 = " bottles of beer on the wall, ";
    let poem2 = " bottles of beer.\n"
    let poem3 = " bottles of beer on the wall...\n "
    let poem4 = "No more bottles of beer on the wall, no more bottles of beer. \n\
                We've taken them down and passed them around; now we're drunk and passed out!"
    let poem5 = "Take one down, pass it around, ";
    if (count == 1)
    {
		console.log("1 bottle of beer on the wall, 1 bottle of beer.\n" + count);
		console.log(poem5 + " no more bottles of beer on the wall...\n\ ");
        console.log (poem4);
    }
    else if (count == 2)
    {
        console.log(count + poem1 + count + poem2 + (count-1) + "bottle of beer on the wall...\n\  ");
		console.log(poem5 + "1 bottle of beer on the wall...\n\ ");
    }
    else
    {	
    console.log(count + poem1 + count + poem2 + poem5 + (count-1) + poem3); 
    
    beerpoem(count - 1);
    };
}


beerpoem(99);
