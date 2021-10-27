import React from 'react'
import { useEffect,useState } from 'react';
//import List from "../../components/Files/List";
import{Button,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
//import files,{} from "../../data/files";
import axios from  'axios';

function Myfiles() {
    const [notes,setNotes]=useState([]);

    const fetchFiles=async()=>{
        const {data}=await axios.get('http://localhost:5000/api/files');
        setNotes(data);

    };
    console.log(notes);

useEffect(()=>{
    
fetchFiles();
},[])


    return (
        
         <div>
             <h2>Welcome...</h2>
          <Link to="createfile">
              <Button style={ {marginLeft:10, marginBottem:6 }} size="lg">
                  Add New File
              </Button>
   <Card style={{margin:10}}>
    <Card.Header style={{display:'flex'}}>
    <span
    style={{
        color:"black",
        textDecoration:"none",
        flex:1,
        cursor:"pointer",
        alignSelf:"center",
        fontSize:18,

    }}>title </span>
    <div>
      <Button> Download </Button>
  </div> 
    </Card.Header>
    </Card>
            
   
     </Link>
     {/* {notes.map((note)=>(
     <Accordion key={note._id}>  
     )
     )} */}
          </div>
        
       
    )
}

export default Myfiles;
