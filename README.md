# App

## How to run our application

Before going into details, make sure that NodeJS is installed in your laptop (here tutorial for the installation https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-overview) and also ReactNative, which is a dependecy of React, used to develop applications (here the tutorial for the installation https://learn.microsoft.com/en-us/windows/dev-environment/javascript/react-overview).

Globally install Expo CLI command line utility:

```
npm install -g expo-cli
```

Install the dependencies:

```
npm install
```

Finally, install the Expo client app on your iOS or Android phone and connect to the same wireless network as your computer.

Inside our main folder, now we can create our project by running:

```
npx create-expo-app my-app
```

This will create the application folder with the needed files.
Then run the command:

```
cd my-app
```

To be directed inside the application folder.

## How to Run

Run one of the following commands:

```
npm start
```

or

```
expo start
```

and this will start a development server.

On Android, use the Expo app to scan the QR code from your terminal to open your project.
On iOS, use the built-in QR code scanner of the Camera app.

## Run Cypress tests

To allow you to get a web page of our application running on your browser open a new terminal and run the application. You will see our QR code and under, few press commands. Run the following command in the terminal where the application is running:

```
w
```

A web page will automatically open in your browser which will display the application.
At this point, we can set up Cypress (here the full explanation of the installation methods https://docs.cypress.io/guides/getting-started/installing-cypress#What-you-ll-learn).

Now you can open Cypress from your project root:

```
npx cypress open
```

A new window from Cypress will open with the name of your application main folder. There you can choose E2E testing or Component testing. For our application we used E2E testing. Launch your favourite browser.
