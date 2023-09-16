# border-radius-previewer

## TODO 
<!-- 1. to move the slider component into a separate jsx file -->
<!-- 2. aspect ratio of the box, make it 1:1 -->
<!-- - custom size toggle and functionality
    - use material ui "switch" -->
<!-- - issue on the heigth and width of the box changing immediately after i change the value of the 2 numeric fields, it should change only after i click enter or lose focus or something  -->
<!-- - now that we've moved the input to it's own component, remove functions in app.jsx that are no longer in use -->
<!-- - issue on mobile where the sliders sudenly have padding  -->
<!-- - think about using css clasees instead of sx for the material ui slider -->
<!-- - responsiveness for mobile
    - responsiveness of the width and height is not so nice
    - currently, the whole page is viewable on mobile, make it so that the user can scroll
        - remove percentages on height? allow the height to freely adjust, and just control the rem of the contents, that way, the containers will take up as much space as they need
        - yep, we set a min height of 100vh, and dont specify a height and width (or put them as auto) -->

<!-- - confirmation popup to show the user that they have successfully copied the border radius to the clip board
    - test sending a different popup if the copy failed
    - study why transform-origin : center and transform : translate(50%,50%) didnt work -->
<!-- - layout for border radius stuff -->
<!-- - signature (by skippershark with icon) -->
- test using display : block instead of flex for responsiveness
<!-- - styling for the border-radius output box -->
<!-- - cool sleek animation background image
    - issue on the ::after causing white space on mobile at the bottom of the page
    - somehow the ::after and ::before, even if it works sometimes, does cause the page to expand if we switch between mobile and non-mobile mode, not sure why this is
    - app works perfectly fine without those background images, that's the issue, INVESTIGATE THIS!!
    - some portions of the copy button on mobile is unclickable if the animation back ground image is on top of the copy button. Try disabling the image, the copy works perfectly on all parts of the button
        - use z-index, study how they work, putting the .app a z index that is higher than the ::before doesnt work, does the z index not cascade to the button?
    - somehow, changin the position from absolute to fixed worked, WHY???? AAAAA
        - something to do with the element having different containing blocks in fixed compared to absolute, how do I determine the containing block of the 2 background elements though? -->
<!-- - the copy button should turn pink after the confirmation popup dissapears -->
- clipboard copy doesnt work in non-https environemnt (my phone)
    - see if there is a workaround if i dont want to setup https
    - if not, see how i can make my server be able to provide https connections
<!-- - project cleanup and optimization, the code is omega unclean lmao -->
- app spacing isnt nice on ipad air
<!-- - remove weird box shadow that appears after a slider is not selected -->
<!-- - selecting a slider box will make the slider a different color, to show where the user may drag -->

## Done

## New project ideas
1. Binary to hexa convertor 
