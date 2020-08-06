This Application was created while I read the Book 
[Full Stack Serverless](https://smile.amazon.de/Full-Stack-Serverless-Application-Development/dp/1492059897)
by Nader Dabit

# Initial Setup
* install [nvm](https://github.com/nvm-sh/nvm#install--update-script)
* install node: `nvm install node`
* install amplify cli: `npm install -g @aws-amplify/cli`
* setup aws/amplify: `amplify configure`
* clone this repo, `cd amplify-app` and `amplify init`

To deploy changes in the backend/api layer, use `amplify push`.
To cleanup cloud resources, use `amplify delete`


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so the normal build scripts are available:


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

