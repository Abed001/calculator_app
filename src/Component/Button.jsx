import React from "react"
const Button = ({symbol,handleClick ,color}) => {
    return (
   

        <div onClick={()=>handleClick(symbol)} >
            
            <button style={{backgroundColor:color}} className="button-wrapper">{symbol}</button>

        </div>
    )

}
export default Button;