import React, { useState } from 'react'


function Text(props) {
    const [read, setRead] = useState(false);
    function setText() {
        if (read) {
            return props.text;
        }
        return props.text.substring(0, props.maxLenght)
    }
    

function setButtonText(){
    if (read) {
        return " read less";
    }
    return ".. read more";
}
    return (<p>{setText()} <button className='button'onClick={() =>setRead(!read)}>{setButtonText()}</button> </p>)
}

export default Text

