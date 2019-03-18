import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail/CommentDetail';
import ApprovalCard from './components/ApprovedCard/ApprovalCard';
const App = ()=>{
    const name = ['sid','Thanos','Gamora'];
    const time = ['Today at 6:00P.M','Today at 7:00P.M','Today at 8:00P.M'];
    const text = ['Nice Shot','Nice pic','Not bad Dude'];
    return (
        <div className="ui container comments">
           <ApprovalCard>
            <CommentDetail 
                name={name[0]}
                time={time[0]} 
                text={text[0]}/>
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail  
                name={name[1]} 
                time={time[1]} 
                text={text[1]}/>
          </ApprovalCard>

          <ApprovalCard>
           <CommentDetail 
                name={name[2]}
                time={time[2]} 
                text={text[2]}/>
            </ApprovalCard>
        </div>
    );
};


ReactDOM.render(<App/>,document.getElementById("root"));
