import React from "react";

class Courses extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            courseData: []
        }
    }

    render(){
        return (
           <div>
               {
                   this.props.data.map(course => (
                       <div>
                           {course.id}
                       </div>
                   ))
               }
           </div>
        )
    }
};

export default Courses