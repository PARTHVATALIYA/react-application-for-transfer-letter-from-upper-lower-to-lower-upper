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
   
    <div className='tab1'>
        <h1 className={`text-${props.txtColor}`}>Convert text into lowercase and uppercase</h1>
      <textarea name="text" className={`input `} value={Text} placeholder='Enter text' onChange={ChangeOnClick} cols="100" rows="10"></textarea><br />
      <button type="button" class="btn btn-primary mx-2" onClick={LowwerCase}>Convert to LowerCase</button>
      <button type="button" class="btn btn-primary mx-2" onClick={UpperCase}>Convert to UpperCase</button>
      
      
    </div>
  )
}