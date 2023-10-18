
# Coding Challenge 2

Object of the game is to move all the disks over to Tower 3 (with your mouse).
But you cannot place a larger disk onto a smaller disk.



## Technical Specification
-This project is created using HTML. CSS & Javascript with JQuery Framework.
-CSS and JQuery are the main responsible in UI and interaction with this challenge.
## How to run
-   Download and export to your local computer the follong files in the same folder:
    -   index.html
    -   main.css
    -   main.js
-   Open index.html using your preffered browser.
## Challenges
The 3 main challenge I encountered in this challenge are the following:
-   Only one disk can be moved at a time.
-   Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
-   No disk may be placed on top of a smaller disk.

I solve the challenges by using recursive algorithm in my code.
    
## Defects
    The only limit to my code is that I only limit it with the functionality of moving the disk within the 3 towers. It can be improved by adding some function to be more playable and exciting app.
    the only thing I see to break my code it the JQuery CDN is not loaded properly or if the user don't have internet access.