#### Smart Brain

## Description
The smart brain project is a app that will detect some faces.

## Table of Content
[Create React App](https://github.com/facebook/create-react-app) <br />
[particles-bg](https://www.npmjs.com/package/particles-bg) <br />
[react-parallax-tilt](https://www.npmjs.com/package/react-parallax-tilt) <br />
[Clarifai face-detection](https://clarifai.com/clarifai/main/models/face-detection) <br />

## About the project 
This project is a food order app with a list of meals from which we can choose and add these meals to the card, change their amounts and add them multiple times and view the card with our meals.

This project is part of The Complete Web Developer in 2023: Zero to Mastery, which is divided into two parts, that is the first part the front end of the application, that's why some features are just static such as sign-in and register. The background effect is done with the help of [articles-bg](https://www.npmjs.com/package/particles-bg) and the effect of the logo with [react-parallax-tilt](https://www.npmjs.com/package/react-parallax-tilt)

Inside the app, you can insert an image link and try to find some faces, at the moment only detect one face, that detection is provide by [Clarifai face-detection API](https://clarifai.com/clarifai/main/models/face-detection) 

## Setup

```ruby
npm install

# Run on http://localhost:3000
npm start
```
You must add your own API key in the src/App.js file to connect to Clarifai. 
[Clarifai API](https://www.clarifai.com/)

## Aproach
This one was a challenge because the original project was done before ES6 and React Hooks launch, and I did this version with de new approaches available. Uses hooks, functional components, and styling are made with CSS modules. 
