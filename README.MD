# Escape Sequence Photo Gallery

## Contents
- Introduction
- Your Tasks
- Provided Code
- Task Breakdown
- LevelUp

## Introduction
Today you'll use your DOM manipulation skills to create an interactive photo gallery! A small amount of CSS has been provided, but you'll code all of the JavaScript logic yourself. You'll start by rendering a series of thumbnail images to the page. By the time you're finished, a user will be able to click on a thumbnail to view the fullsize image. 

> **🤨 Wait, what's a thumbnail?** According to Wikipedia: "Thumbnails are reduced-size versions of pictures or videos, used to help in recognizing and organizing them." You've probably seen them all over when shopping for products online, browsing the albums in your streaming library, or interacting with a photo gallery (like we're doing here).

## Your Tasks
Complete the two empty functions included in your `script.js`:

1. **`addThumbnail`** - This function should create a new image element with the `thumbnail` class for the image source passed in as an argument. Once the element is created, append it to `div#thumbnail-container`. Finally, attach an `onclick` to the element that will display the image fullsize by updating the  `src` of `img#fullsize-image`.

2. **`addAllThumbnails`** - This function should loop through the `imageSources` array, calling `addThumbnail` each iteration and passing in the current image source. 

## Provided Code
- In `script.js` you'll see an array called `imageSources`. This is an array of paths that point to the images included in the assets folder.
- In `style.css` there is a rule for the `thumbnail` class. Add this class to your thumbnail elements to style them!

## Task Breakdown

### 1. `addThumbnail`
#### 1.1 Create the image element
Start by creating a new `<img>` element and storing it in a variable.

#### 1.2 Customize the image element
Update the element's `src` property with whatever value was passed to the `imageSource` parameter. There are some pre-written styles for the thumbnails in `style.css`. Activate the styles by adding the `thumbnail` class to the element.

#### 1.3 Append the image element 
Select the div with the id `thumbnail-container` and use the `appendChild` method to append the new thumbnail to it. Check your page preview and you should see all of the thumbnails added to the page. 

> **🧠 Pro-tip:** At this point, you can test your logic by calling `addThumbnail` from the console and passing in an image source as a string. If everything is working correctly, you should see a thumbnail rendered to the page.

#### 1.4 Display fullsize image when thumbnail is clicked
To display the fullsize image when its thumbnail is clicked, you'll need to attach an `onclick` function to the image element you created. The onclick function should select the image with the id `fullsize-image` and update its `src` property with whatever value was passed to the `imageSource` parameter. 

> **🗒️ Note:** You may need to use your Google Fu here - how do we add an `onclick` to an element created entirely in JavaScript when we can't access its HTML directly? 

<hr>

### 2. `addAllThumbnails`
#### 2.1 Loop through the image sources
Write a `for` or `while` loop that iterates through the entirety of the `imageSources` array.

#### 2.2 Add each thumbnail to the page
Invoke the `addThumbnail` function on each iteration of the loop and pass in the current image source.

#### 2.3 Call the function
Call `addAllThumbnails` at the bottom of your script to render all thumbnails to the page. If your logic is working as intended, you should see five thumbnails on the page. 

## LevelUp
Feel like leveling up? Write some JavaScript logic that will automatically display the first image from `imageSources` fullsize when the page loads.