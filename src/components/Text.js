import React, {useState} from 'react'

export default function Text(props) {

    const LowwerCase = ()=>{
      let newText = Text.toLowerCase();
      setText(newText)
    }
    const UpperCase = ()=>{
      let newText = Text.toUpperCase();
      setText(newText)
    }
    

    const ChangeOnClick = (event)=>{
        setText(event.target.value)
    }

    const [Text, setText] = useState("");

  return (
   
    <div className='container'>
        <h1 className={` text-${props.txtColor}`}>Convert text into lowercase and uppercase</h1>
        <textarea name="text" className={`form-control  `} value={Text} placeholder='Enter text' onChange={ChangeOnClick} cols="100" rows="10"></textarea><br />
        <button disabled={Text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={LowwerCase}>Convert to LowerCase</button>
        <button disabled={Text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={UpperCase}>Convert to UpperCase</button>
      
      
    </div>
  )
}