This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Consume GraphQL using Apollo Client (with Apollo Boost & Apollo Hooks)
### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Remarks (Apollo-Boost vs Relay-Modern): 
### Apollo Client setup
```javascript
const apolloClient = new ApolloClient({cache: new InMemoryCache(), link: 'http://myurl.com' });
```

### Relay Runtime environment setup
```javascript
const store = new Store(new RecordSource());
const network = Network.create((operation, variables) => {
  return fetch("/graphql", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => response.json());
});
export default new Environment({ network, store });
```