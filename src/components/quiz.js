import React, { useState } from "react"
import QuizeData from "../Data/quizdata"
import QuizeResult from "./QuizeResult"



function Quiz(props){
    const[currentQuestion,setCurrentQuestion]=useState(0)
    const[score,setscore]=useState(0)
    const[clickoptions,setclickoptions]=useState(0)
    const[showresult,setshowresult]=useState(false)

    function changequestion(){
        if(clickoptions==0){
            alert("plzz select options")
        }
        else{
        updatescore()
        if(currentQuestion<QuizeData.length-1){
            setclickoptions(0)
            setCurrentQuestion(currentQuestion+1)
        }
        else{
            //   alert(`end of questions`)
            setshowresult(true)
            
            
        }
    }
        
    }

    function updatescore(){
        if(clickoptions==QuizeData[currentQuestion].answer){
            setscore(score+1)

            
        }
    }

    return(
        <div>
            <p className="heading-txt"> QUIZ APP</p>
            {showresult?(<QuizeResult  username={props.username} resultscore={score} totalscore={QuizeData.length}></QuizeResult>):(
            <div className="container">
                
                <div className="question">
                    <span id="question-number">{currentQuestion+1}.</span>
                    <span id="question-txt">{QuizeData[currentQuestion].question}</span>
                </div>
                <div className="option-container">
                    {QuizeData[currentQuestion].options.map((option,i) => {
                        return(
                            <button className={`option-btn ${
                                clickoptions === i+1?"checked":null
                            }`} 
                            key={i}
                            onClick={()=>setclickoptions(i+1)}>
                                {option}
                            </button>
                        )
                    })}
                </div>
            </div>
            )}
            <input type="button" value="Next" id="next-button" onClick={changequestion}/>
           
        </div>

    )
}

export default Quiz