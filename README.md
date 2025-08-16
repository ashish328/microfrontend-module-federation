# Micro Frontend Module Federation

Implementing a small e-commerce app with Micro Frontend Architecture using Module Federation.

### Apps

- `Cart`: a Vite + React project which takes care of cart components. it should always served on port 5001 as it acts as remote for products & host apps.

- `Products`: a Vite + React project which takes care of products and its listing. it should always served on port 5003 as it acts as remote for host app.

- `Categories`: a Webpack + React project which takes care of categories. it should always served on port 5004 as it acts as remote host app.

- `host`:  a Vite + React project which holds all the above compoents to display one e-commerce app. can be served on any port but its hardcoded to 5002.

update the `vite.config.ts` file of products & host apps if any change in port number is need.


### Build and Run

Install dependencies
```
npm install
```

as vite federation generate `remoteEntry.js` only when the app is build we need to build and sever the application

```
# Build the apps
npm run build:watch

# Serve the apps
npm run serve
```

