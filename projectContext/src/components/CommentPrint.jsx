import React, { useContext } from 'react';
import { ColorModeContext } from '../context/ThemeContext';

const CommentPrinter = (props) => {
    const {color} = useContext(ColorModeContext)
    const {el, output, setOutput, index} = props;
    const Delete = (index) => {
        setOutput(
            output.filter((sentence, sentenceIndex)=> {
                return sentenceIndex !== index
            })
        )
    }
    return(
        <div>
        <p style={{
            color: color
        }}>
            {el}
        </p>
        <button onClick={()=> Delete(index)}>Delete</button>
        </div>
    )

}

export default CommentPrinter;