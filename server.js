const express = require('express');
const gqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const root = {
    hello: () => {
        return `Hello Dude!`;
    },
}

const server = express();

server.use('/graphql', gqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

server.listen(4000, () => console.log("We're running boii!!!"));
