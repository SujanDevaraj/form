import React,{useState} from "react"


const Form=()=>{
    let [text,setText]=useState("")
let[btn,setBtn]=useState("")

function implement(event) {
    event.preventDefault();
    setBtn(text)
    setText("")
    
}


    return(
        <div>
        <form onSubmit={implement}>
        <input type="text" placeholder="type anything.." 
        onChange={e=>{setText(e.target.value)
        setBtn=("")
        }}
        value={text}
        />
        <button type="submit">Submit</button>
        </form>
        <p>{btn}</p>
        </div>
    )
}
export default Form;