# Create React App

run

```
npx create-react-app tax-turbo-client
```

CD INTO REACT APP CLIENT
run following commands to ammend `package.json`

```
npm i axios
npm i react-router
npm i react-router-dom
npm install react-bootstrap bootstrap
```

dependencies in `package.json` should look like:

```
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "axios": "^0.20.0",
    "bootstrap": "^4.5.2",
    "react": "^16.13.1",
    "react-bootstrap": "^1.3.0",
    "react-dom": "^16.13.1",
    "react-router": "^5.2.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.3"
  },
```

in `client/public/index.html` put

```
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>
```

in `client/src/index.js` import Router as

```
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();

```

## Start Up React App

NOTE: you are going to want to run react app on port `http://localhost:3001` to make room for backend.
The backend CORS initializer has been set up to receive requests from `http://localhost:3000`
Make sure your backend Rails application is running!

run `npm start`
