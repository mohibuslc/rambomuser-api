
import './App.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {useState} from 'react'
import {useEffect} from 'react';



function App() {
const [likeColor , setLikeColor] = useState('');
const [user , setUser]= useState([]);
const [ramdomuser , setramdomUser]= useState({});



useEffect (()=>{

const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
.then(res => res.json())
.then (data => setUser(data))

 // ramdomUser


 
 fetch('https://randomuser.me/api/')
 .then(res => res.json())
 .then(data => setramdomUser(data.results.[0]))
},[])

const handleClick = () =>{


  const color = likeColor ? '' : 'primary';
  setLikeColor(color)
}
  
  return (
    <div style={{ textAlign: 'center'}}>
      
       <h1>{ramdomuser.name && ramdomuser.name.last}</h1> 
       
       <h2>{ramdomuser.gender}</h2>

         <ThumbUpAltIcon onClick = {handleClick} color ={likeColor}></ThumbUpAltIcon>
         {  
         
         user.map(pd => <li>{pd.name}</li>)
         
         }

     
    </div>
  );
}

export default App;
