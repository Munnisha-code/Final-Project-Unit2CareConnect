


function SendButton({onClick, children }){

    return(

        <button className = 'send-button '
                type= 'button' 
                onClick={onClick}>
                    
                     {children} 

        </button>

    );
}

export default SendButton;