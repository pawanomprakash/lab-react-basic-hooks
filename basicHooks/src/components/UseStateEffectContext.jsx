import { useContext } from "react";
import { ToggleTheme } from "../App";
import { useState } from "react";
import { useEffect } from "react";

function UseStateEffectContext(){
  const [like, updateLike] = useState(0);
  const [contentState, setContent] = useState(false);  

  useEffect(()=>{
    alert("Content Button Clicked");
  },[contentState])

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  let updateContent=()=>{
    setContent((contentState) => !contentState );
    }
  let para=contentState?"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum illo non rerum in maiores ad aliquid nulla, qui voluptatum pariatur. Sint cumque hic, inventore ullam tempore recusandae eveniet quaerat nemo!Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga animi eveniet a quam distinctio eos nisi, excepturi eligendi ab ratione earum architecto consequatur maxime, delectus aperiam voluptate! Praesentium, tempore iusto?":""


  return(
    <div style={themeStyle}>
        <div>{para}</div>
        <button onClick={updateContent}>content</button>
        <p>{like}</p>
        <button onClick={()=>updateLike(like=>like+1)}>Like</button>
    </div>
  )
}

export default UseStateEffectContext;
