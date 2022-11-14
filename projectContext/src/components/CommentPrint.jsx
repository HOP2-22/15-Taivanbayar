import React from 'react';

const CommentPrinter = (props) => {
    const {el, output, setOutput} = props;
    return(
        <div>

        <p>
            {el}
        </p>
        
        </div>
    )

}

export default CommentPrinter;