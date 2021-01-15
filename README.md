# EXP Soundboard Manager(Client)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Live App

https://exp-soundboard-client.vercel.app

## API Repo

https://github.com/NathanStensvad/exp-soundboard-api \
To see API documentation, go to the API repo README

## How to Use EXP Soundboard Manager

First thing you have to do is set up a folder for your soundboards and sound files
This part is not completely user friendly yet so you will need to follow a few steps.
I suggest using your documents to save your soundboards.

1. Navigate to your main drive and go to users and find your user name. <br /><br />
![Title and Sounds 1](https://github.com/NathanStensvad/exp-soundboard-client/blob/main/public/pictures/4.1.png)
![Title and Sounds 2](https://github.com/NathanStensvad/exp-soundboard-client/blob/main/public/pictures/4.2.png)
![Title and Sounds 3](https://github.com/NathanStensvad/exp-soundboard-client/blob/main/public/pictures/4.3.png)

2. Create a folder in your documents for your soundboards. (I called mine EXP-Soundboards)<br /><br />
![Create Soundboard Directory 1](https://github.com/NathanStensvad/exp-soundboard-client/blob/main/public/pictures/4.4.png)
![Create Soundboard Directory 2](https://github.com/NathanStensvad/exp-soundboard-client/blob/main/public/pictures/4.45.png)

3. Create a folder inside EXP-Soundboards with your soundboard name.<br /><br />
![Create Soundboard Folder](https://github.com/NathanStensvad/exp-soundboard-client/blob/main/public/pictures/4.5.png)

4. Download sound files from somewhere(freesound.org for example) and place them inside that folder.<br /><br />
![Add Files](https://github.com/NathanStensvad/exp-soundboard-client/blob/main/public/pictures/4.6.png)

5. Create a new Soundboard in the app.<br /><br />
![New Soundboard Step 1-1](https://github.com/NathanStensvad/exp-soundboard-client/blob/main/public/pictures/1.png)

6. Type in a title and add sounds.<br/><br/>
![Title and Sounds](https://github.com/NathanStensvad/exp-soundboard-client/blob/main/public/pictures/3.png)
                        <img src="pictures/3.png" alt="Title and Sounds" /><br/><br/>

(This is the most user unfriendly portion that is still being worked on so bear with this section<br/>
I still need to key reading for activation keys, easier file path changing, and the ability to move around sounds)<br/><br/>

7. Write down your file path as shown in the picture. <br/>
You could make your file path anywhere but this example will show you how to put your soundboard in your documents<br />
For this example, if my user name is "TACO", soundboard is "The Word", and my sound is "bird.mp3", <br />I would write "C:\Users\Nathan\Documents\EXP-Soundboards\The Word\bird.mp3"<br/>
To streamline the process from there, every time you add a new sound, just copy the whole string and replace the last sound name (bird.mp3) with another sound.<br/><br/>
Then type in the numbers for the activation keys you want. Clink on the link for the javascript character codes page for the numbers you can use.<br/>
If you wanted to use the letter "a" for a sound activation, you would write "65" in the box. <br/>
A comma indicates that you will need to press down multiple keys. In the picture below, "17,96" means "Ctrl Numpad 3"<br/>
I would suggest using the numpad numbers for your soundboard as they aren't really used for many things<br/><br/>
![File Path](https://github.com/NathanStensvad/exp-soundboard-client/blob/main/public/pictures/4.0.png)

8. Download the json file from the create page and put it into your soundboard folder with all your sound files in it. <br/><br/>
![Download from Create](https://github.com/NathanStensvad/exp-soundboard-client/blob/main/public/pictures/6.png)
![Soundboard Folder](https://github.com/NathanStensvad/exp-soundboard-client/blob/main/public/pictures/5.png)

9. Now open up your soundboard using the EXP Soundboard application<br/><br/>
![Open in Application 1](https://github.com/NathanStensvad/exp-soundboard-client/blob/main/public/pictures/7.1.png)
![Open in Application 1](https://github.com/NathanStensvad/exp-soundboard-client/blob/main/public/pictures/7.2.png)
![Open in Application 1](https://github.com/NathanStensvad/exp-soundboard-client/blob/main/public/pictures/7.3.png)

Now you're ready to play your soundboard! If it didn't work, be sure that your file path is correct, you have the right keys assigned, and have your sound files spelled properly.<br/>
Once again, this isn't very user friendly yet but this does work to at least make and share a soundboard with other users. 


# General React Guide

This is the default guide below to use React on your system

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
