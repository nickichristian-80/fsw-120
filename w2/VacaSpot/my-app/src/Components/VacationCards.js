import React from "react" 

function VacationCards(props) {
  function backgroundColor() {
    if(props.background.toLowerCase() === "summer"){
      return("yellow") 
    } else if(props.background.toLowerCase() === "fall"){
      return("orange")
    } else if(props.background.toLowerCase() === "winter"){
      return("cyan")
    } else if(props.background.toLowerCase() === "spring"){
      return("pink")
    }
  }
  function dollarSign() {
    if(props.price <= 500){
      return("$")
    } else if(props.price <= 1000){
      return("$$")
    } else if(props.price > 1000){
      return("$$$")
    }
  }
  const style = {
    width: "25%",
    height: 100, 
    border: "solid black 3px",
    background: backgroundColor(),
    textAlign: "center",
    margin: "auto",
    textShadow: "white 2px 2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1.6
  }

  return (
    <div style={style}>
      <h1>{props.place}<br />{dollarSign()}{props.price}</h1>
    </div>
  )
}

export default VacationCards