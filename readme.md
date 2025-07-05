# MSB (Monolith Serverless Backend)

This is a service to use AWS Lamdas λ as a NodeJS monlith service
Using [serverless framework](https://www.serverless.com/) to achive this

## Run it locally

Using NodeJS 20.x run this command:

```bash
npm install
npm run dev
```

There you go! it's up and running in your local

To ensure that everyhing is running propoerly go to [http://localhost:4000/dev/health](http://localhost:4000/dev/health)

### Create and endpoint

- Create a new JS file with the name of the endopoint inside of the api folder
- Inside of the file create a funcion and export it model.exports.{name of the function}; use the same name as the endpoint
- Pass 3 parameters to the funcion event, context and callback

### Enviroments 
- Development environment is published with each pull request, notify the team when you create or update a pull request beacuse this will publish your PR to dev
  https://zd9cxhrv6c.execute-api.us-east-1.amazonaws.com/development/{endpoint}
- Integrations environment is published when a pull request is merge.
  https://zd9cxhrv6c.execute-api.us-east-1.amazonaws.com/integrations/{endpoint}