import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Courses from "./Courses"

const COURSES_QUERY = gql`
    query CoursesQuery {
        courses {
            id
            title
            author
            description
            topic
            url
        }
    }
`;

class Queries extends React.Component {
    constructor(){
        super();
        this.state = {
            courseData: []
        }
    }

    render(){
        return (
            <Query query={COURSES_QUERY}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <h2>Loading...</h2>
                        if (error) console.log(error)
        
                        console.log(data)
                        this.state = {
                            ...this.state,
                            courseData: data
                        }

                        console.log(this.state.courseData)
                        return <Courses data={data.courses} /> // Your component would receive data as props. Maybe the component rendering charts?
                    }
                }
            </Query>
        )
    }
};

export default Queries