This is a test project [https://github.com/Anara5/ecommerce-microfrontend-test.git](https://github.com/Anara5/ecommerce-microfrontend-test.git) demonstrating a microfrontend architecture using Module Federation in React. It consists of three separate applications:

- host-app (Main container application)
- products-remote (Remote app providing product listings)
- basket-remote (Remote app handling the shopping cart)

## Getting Started

To run the project, navigate to each of the apps and start them individually.

1. Host-app
- cd host-app
- npm install
- npm run dev
- Open [http://localhost:3000](http://localhost:3000) with your browser.

2. Products-remote
- cd products-remote
- npm install
- npm run dev
- Open [http://localhost:3001](http://localhost:3001) with your browser.

3. Basket-remote
- cd basket-remote
- npm install
- npm run dev
- Open [http://localhost:3002](http://localhost:3002) with your browser.

⚠️ This app does not run independently. It is only loaded inside host-app.

## Known issues

🛠 Basket-remote bug: The basket-remote app is not displaying independently but only within host-app.
🔄 Redux Toolkit Issue: State management between host-app and remote apps is not working as expected. Fixing state transfer of product items is in progress.

## Test work in progress...
The goal is to correctly manage global state sharing between microfrontends using Redux Toolkit. Further debugging and improvements are ongoing. The most focus was in functionaliry. Design is in progress...
