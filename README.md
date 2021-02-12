# Udacity React Native - Flashcards

## Overview
A react native app for creating and recording flash cards.

The project can be viewed here: https://youtu.be/XHI5Uz6tzdQ

## Prerequisite

This project was tested on 

```
npm version 6.14.10
node version v14.15.4
expo version 4.1.6
genymotion android emulator v3.2.0
android (emulator) API version 27, Samsung Galaxy S8
```

## Build and run
Run `expo start` in the root directory to install all packages and also start the project. Alternatively do `npm install` then `npm start`. 
Then hit `a` to run in android. Note: an android emulator must be started, or android physical device must be connected.

## Things to improve
- Styling should be percentage based where possible to allow for flex across different devices
- Note: Notification is currently set to 1-minute for development purposes, it should be changed to next-day at 8pm for production
- Quiz view card flip should be a controlled component, so that when going to the next question, the card is automatically reset to displaying the question, rather than remaining persistent to the answer
- There should be a loading indicator when first loading the decks.
