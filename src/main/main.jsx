import React from "react";
import { assets } from "../../assets/assets";
import './main.css';
import { context } from "../context/context";
const Main=()=>{
    const {previousprompt,onSent,setpreviousprompt,input,setInput,loading,setloading,recentprompt,setrecentprompt,
        resultdata,setresultdata,showresult,setshowresult}=React.useContext(context);




    return(
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showresult
                ?<>
                <div className="greet">
                    <p><span>Hello, Dev</span></p>
                    <p>How  can  i  help  you  Today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>How Many Articles Are Present In Indian  Constitution ?</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>What is Article 370 ?</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div><div className="card">
                        <p>Indian Constitution Is Written In which year  ?</p>
                        <img src={assets.message_icon} alt="" />
                    </div><div className="card">
                        <p>Basic Rights Of every person in India ?</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
              </>:<div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentprompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading? <div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div>:<p>{resultdata}</p>}
                    </div>
                    </div>}
                    <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>{setInput(e.target.value)}}  value={input}type="text" placeholder="Enter Any Query Regarding The Constitution " />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={()=>{onSent()}}src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        THis AI May display info,including about Constitution,so double-check its responses .Your Privacy and Ai Apps 
                    </p>
                </div>
                
                
                
            </div>


        </div>
    );

}
export default Main;