import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Autoform() {
   const [users, setUsers] = useState([]);
   const [text, setText] = useState('');
   const [suggestions,setSuggestions] = useState([])
   useEffect (() => {
     const loadUsers = async() =>{
     const response = await axios.get('https://emailmaker-server.onrender.com/components');
     setUsers(response.data.data)
     } 
     loadUsers()

   }, [])

   const onSuggestHandler =(text) =>{
      setText(text);
      setSuggestions([]);
   }
   const onChangeHandler = (text) =>{
      let matches = []
      if(text.length>0){
         matches = users.filter(user=>{
            const regex = new RegExp(`${text}`,"gi");
            return user.component.match(regex)
         })
      }
      setSuggestions(matches)
      setText(text)
   }

  return (
    <div>
      
      <input type='text'
      onChange={e => onChangeHandler(e.target.value)}
      value={text}
      >
      </input>
      {suggestions && suggestions.map((suggestions,i)=>
      <div key={i} onClick={()=>onSuggestHandler(suggestions.component)}>{suggestions.component}</div>)}
    </div>
  )
}

export default Autoform