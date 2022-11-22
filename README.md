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


Furthermore, to initialize a new project, run in the terminal your root folder path:

```
cd "name_of_folder"
```


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

To test our application we can use Cypress. The first step is to open our IDE with the application folder and run the following command in the terminal:

```
npx expo install react-native-web@~0.18.9 react-dom@18.1.0 @expo/webpack-config@^0.17.2npm
```

This will allow you to get a web page of our application running on your browser. To see this, open a new terminal and run the application. You will see our QR code and under, few press commands. Run the following command in the terminal where the application is running:

```
w
```

A web page will automatically open in your browser which will display the application.
At this point, we can set up Cypress (here the full explanation of the installation methods https://docs.cypress.io/guides/getting-started/installing-cypress#What-you-ll-learn). 
Open a new terminal and open the path of the application folder and run:

```
npm install cypress --save-dev
```

Now you can open Cypress from your project root one of the following ways:

```
npx cypress open
```

A new window from Cypress will open with the name of your application main folder. There you can choose E2E testing or Component testing. For our application we used E2E testing. Launch your favourite browser.
Now it's time to add your first test. We're going to do this with the "Create new empty spec" button and click create spec. Leave the default name spec.cy.js for now. The file will also open in your IDE. Go to your IDE and open the folder cypress/e2e/spec.cy.js fix the existing test code with the following code:

```
describe('My First Test', () => {
  it('Visits our Application', () => {
    cy.visit('http://localhost:19006/')
  })
})
```

Where *http://localhost:19006/* is the URL obtained from opening our application on a web page previously.
Cypress monitors your spec files for any changes and automatically displays any changes.

Now we can open the spec.cy.js file in our Cypress window inside the option "Specs" which are also displayed as the first interface as well.
By clicking our file an empty web page will open on the right side of the screen, while our test (passed or failed) stays on the left. In the web page we need to paste the our URL (http://localhost:19006/) in the search bar and click the botton on the left of the bar. This will test the application and it will allow us to visualize it.




