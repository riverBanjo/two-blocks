# Project: “A WordPress plugin that contains 2 Gutenberg blocks.“

## Block 1: “Unsplash Image Slider”

Overview: Build an Image Slider Block using https://source.unsplash.com/ “Random Search Term”.  People should be able to save a search term and see a slider of random images on their website (based on that term).
Settings:
- 1 text field for an image search term
- 1 select field for number of images they want: “3, 4, 5, 6”
Expectation: An “infinite loop” slider that shows one image at a time and infinitely scrolls through the images (example https://swiperjs.com/demos#infinite-loop)  - using the settings for search term & number of images.
Note: this block should be rendered in PHP 
Suggested library: https://swiperjs.com


## Block 2: “API post list”

Overview: Build a block with a button when pressed displays a list of posts on the page.
Settings
- 1 select field for number of posts they want: “3, 4, 5, 6”
Expectations: A “load posts” button that displays a list of posts with their ‘title’ & ‘excerpt'
