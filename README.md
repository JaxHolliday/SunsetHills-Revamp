# SunsetHills Revamp
 
The Sunset Hills coding challenge is intended to assess a candidate’s ability to work with Arrays.This challenge or a slight variation has been used by technology companies such as Amazon and was also featured on a Geeks for Geeks blog post titled “Amazon Interview Experience | Set 189 (For SDE-1)”.


# Tech Used

- HTML
- JavaScript
- jQuery
- CSS
- Bootstrap


## Description

An array of buildings is facing the sun. The heights of each building from West to East is given in an integer array. You have to tell which buildings will be able to see the sunset.
Write a program that prints how many buildings and which buildings will be able to see the Sunset given the Array [3, 2, 4, 7, 6, 9].
The output should look something like this: 4 --> [3, 4, 7, 9]

## Extra

Allow the user to enter their own values into an array before determining who can see the Sunset.

## JavaScript

```sh //Event Listener for JS

document.getElementById("btnSunset").addEventListener("click", sunHills);

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

var result = []; //Result array

bldgArray.push(bldgHeight1);

bldgArray.push(bldgHeight2);

bldgArray.push(bldgHeight3);

bldgArray.push(bldgHeight4);

bldgArray.push(bldgHeight5);

//Step 3: Traverse array from right to left. And keep track of bldgs the can see sunset

for (let i = bldgArray.length - 1; i > 0; i--) { // Length of the array; array is > 0; decrements by 1

if (bldgArray[i] > bldgArray[i - 1]) { // checking current index to see if it's greater than the next

result.push(bldgArray[i]) // Lastly pushes to the bldg array

}

};

result.push(bldgArray[0]) // since 0 will always see sun it will be pushed

result.reverse() // reverse array to appropriate

//Step 4: Out to the user on which buildings can sunset

//Where result will go

document.getElementById("SSoutput").innerHTML = "Count: " + `${result.length}` + ", [" + `${result}` + "]"

};``
-------------------------------------------------------------------------------------------------
## CSS

``/* Body Color*/

body {

color: black;

text - align: center;

background - image: url('../Images/Welcome to.png');

}

/* My 3 header settings */

h1 {

color: black;

text - align: center;

}

h2 {

color: black;

text - align: center;

}

h3 {

color: black;

text - align: center;

}

/*Image settings*/

img {

display: block;

margin - left: auto;

margin - right: auto;

width: 30 %;

}

/*result text size*/

span {

font - size: 100 %``
