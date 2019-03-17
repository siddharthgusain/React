import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = ()=>{
    return (
        <div className="ui container comments">
           <CommentDetail name="Sid" time="Today at 6:00P.M" text="Nice bitch"/>
           <CommentDetail name="Thanos" time="Today at 7:00P.M" text="I will whoop your ass"/>
           <CommentDetail name="Gamora" time="Today at 7:00P.M" text="Stay away from me"/>

        </div>
    );
};


ReactDOM.render(<App/>,document.getElementById("root"));
