import React from "react";



function QuizeResult(props){
    console.log(props.username)
    
    return(
        <div className="heading-txt">
            QuizeResult: {props.username} has scored {props.resultscore}<br></br>
            TotalScore is {props.totalscore} 
            
        </div>
    )
}

export default QuizeResult