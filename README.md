
# OLX Clone Project

This project is a clone of the OLX platform. To run the application after cloning this repository, follow the steps below.

## Prerequisites

- Node.js version 16 is required. If you have a different version installed, you'll need to switch to version 16.

## Getting Started

1. Clone this repository to your local machine.

2. Open the `package.json` file in the root directory of the cloned repository.

3. Change the `"start"` script in `package.json` to the following:

    
    "start": "node --openssl-legacy-provider ./node_modules/react-scripts/scripts/start.js"
    

4. Open your terminal or command prompt.

5. Uninstall the latest version of Node.js (if it's not version 16) using the following command:

    npm uninstall -g node@v18.12.1
    

6. Install Node.js version 16 using the following command:

    
    npm install -g node@v16
    

7. Install the latest version of `react-scripts` using the following command:

    
    npm install react-scripts@latest
    

8. Now you're all set! To start the application, enter the following command in your terminal:

    
    npm start
    

9. The application should now be running locally. Open your web browser and navigate to `http://localhost:3000` to access the OLX Clone project.

