function sunHills() {
    //Step 1: Add event listener for button click
    //On my main index Page towards the bottom

    //Step 2: Gather user input the put into an array
    let bldgHeight1 = Number(document.getElementById("txtSunsetIn1").value);
    let bldgHeight2 = Number(document.getElementById("txtSunsetIn2").value);
    let bldgHeight3 = Number(document.getElementById("txtSunsetIn3").value);
    let bldgHeight4 = Number(document.getElementById("txtSunsetIn4").value);
    let bldgHeight5 = Number(document.getElementById("txtSunsetIn5").value);

    var bldgArray = []; //initial Array
    var result = [];  //Result array
    bldgArray.push(bldgHeight1);
    bldgArray.push(bldgHeight2);
    bldgArray.push(bldgHeight3);
    bldgArray.push(bldgHeight4);
    bldgArray.push(bldgHeight5);



    //Step 3: Traverse array from right to left. And keep track of bldgs the can see sunset
    
    for (let i = bldgArray.length - 1; i > 0; i--) {            // Length of the array; array is > 0; decrements by 1
        if (bldgArray[i] > bldgArray[i - 1]) {                  // checking current index to see if it's greater than the next
            result.push(bldgArray[i])                           // Lastly pushes to the bldg array
        } 
    };

    result.push(bldgArray[0])               // since 0 will always see sun it will be pushed 
    result.reverse()                        // reverse array to appropriate 
    

    //Step 4: Out to the user on which buildings can sunset
    //Where result will go
    document.getElementById("SSoutput").innerHTML = "Count: " + `${result.length}` + ", [" + `${result}` + "]"
};