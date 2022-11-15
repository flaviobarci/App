# App


## How to run our application

Before going into details, make sure that NodeJS is installed in your laptop (here tutorial for the installation https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-overview) and also ReactNative, which is a dependecy of React, used to develop applications (here the tutorial for the installation https://learn.microsoft.com/en-us/windows/dev-environment/javascript/react-overview). 

Globally install Expo CLI command line utility:

'''
npm install -g expo-cli
'''

Install the dependencies:

'''
npm install
'''

Finally, install the Expo client app on your iOS or Android phone and connect to the same wireless network as your computer.


Furthermore, to initialize a new project, run in the terminal your root folder path:

'''
cd "name_of_folder"
'''


Inside our main folder, now we can create our project by running:

'''
npx create-expo-app my-app
'''

This will create the application folder with the needed files.
Then run the command:

'''
cd my-app
'''

To be directed inside the application folder. 


## How to Run
Run one of the following commands:

'''
npm start
''' 
or

'''
expo start
'''

and this will start a development server.

On Android, use the Expo app to scan the QR code from your terminal to open your project.
On iOS, use the built-in QR code scanner of the Camera app.
