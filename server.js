const express = require('express');
const gqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require("cors");

const schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
    }

    type Mutation {
        updateCourseTopic(id: Int!, topic: String!): Course
    }

    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`);

const coursesData = [
    {
        id: 1,
        title: "Title One", 
        author: "Bobby",
        description: "Do stuff",
        topic: "Tech Stuff",
        url: "Theurl.com"
    },
    {
        id: 2,
        title: "Title Two", 
        author: "Susan",
        description: "Do More stuff",
        topic: "Tech Stuff",
        url: "Theurlforplaying.com"
    },
    {
        id: 3,
        title: "Title Three", 
        author: "Henry",
        description: "Do more stuff again?",
        topic: "Crazy Stuff",
        url: "Thecrazyurl.com"
    }
]

const getCourse = args => {
    const { id } = args;
    return coursesData.filter(course => course.id === id)[0];
}

const getCourses = args => {
    if (args.topic) {
        const { topic } = args;
        return coursesData.filter(course => course.topic === topic);
    } else return coursesData;
}

const updateCourseTopic = ({ id, topic }) => {
    coursesData.map(course => {
        if (course.id === id) {
            course.topic = topic;
            return course;
        }
    })

    return coursesData.filter(course => course.id === id)[0];
}

const root = {
    course: getCourse,
    courses: getCourses,
    updateCourseTopic: updateCourseTopic
}

const server = express();

server.use(cors());

server.use('/graphql', gqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

server.listen(4000, () => console.log("We're running boii!!!"));
