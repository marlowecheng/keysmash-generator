# Keysmash Generator

This is currently a work in progress.

A keysmash generator with a click-to-copy function using vanilla JavaScript. This generates a random string of 8 to 25 letters from 'a' to 'l' on the keyboard.

## Live Demo
[Keysmash Generator](https://keysmash.marlowecheng.com)

## To-Dos
- [x] Get the generator working
- [x] Click-to-copy function
- [x] Fix footer
    - [x] Add links: portfolio, github
- [x] Upload to website
    - [x] Add live demo link to README.md
- [ ] Responsiveness
- [ ] Metadata

## Project Breakdown

### Setup
1.	Sketch a rough layout for the generator
2.	Code HTML base and SCSS
3.	Create a button with an onclick event


### Button
1.	Onclick event which encompasses:
2.	Checks if the output field is empty, if it isn’t then clear it
3.	Then run the generator function


### Generator Function
1.	Variable for output
2.	Array consisting of all letters from ‘a’ to ‘l’
3.	A random number generator to pick the number of letters to generate
4.	Pass that random number into a variable
5.	For loop to generate random letters from the array using the random number
6.	Another random number generator to randomly pick the letters from the array
7.	Display the result from the for loop onto the document output field


#### Click to Copy
1.	Read Clipboard API documentation
2.	If statement to check if there’s text in the output field
3.	If yes, display the tooltip for ‘click to copy’ when hovering over the output field
4.	Copy to clip board function
5.	Onclick event that changes the tooltip display to ‘text copied!’
