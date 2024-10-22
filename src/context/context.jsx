import React from "react";
import run from "../api/ai";
export const context= React.createContext();
const ContextProvider=(props)=>{
    const [input,setInput]=React.useState('');
    const [recentprompt,setrecentprompt]=React.useState('');
    const [previousprompt,setpreviousprompt]=React.useState([]);
    const [showresult,setshowresult]=React.useState(false);
    const [loading,setloading]=React.useState(false);
    const [resultdata,setresultdata]=React.useState('');
    const delaypara=(index,nextword)=>{

    }


    const onSent= async ()=>{
        setresultdata('');
        setloading(true);
        setshowresult(true);
        setrecentprompt(input);
        setpreviousprompt(prev=>{[...prev,input]});
        
        

        const response=await run(input);
        // let responseArray=response.split('*');
        // let newarray;
        // for(let i=0;responseArray.length;i++){
        //     if(i===0||i%2==0){
        //         newarray+=responseArray[i];

        //     }
        // }
        setresultdata(response);
        setloading(false);
        setInput('');


        


    }
    // onSent('Top 10 warriors in mahabharat ')

    const contextvalue={
        onSent,
        previousprompt,setpreviousprompt,input,setInput,loading,setloading,recentprompt,setrecentprompt,
        resultdata,setresultdata,showresult,setshowresult

    };
    return(
        <context.Provider value={contextvalue}>
            {props.children}
        </context.Provider>
    );
}
export default ContextProvider;