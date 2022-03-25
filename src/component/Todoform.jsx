import React,{useState} from 'react';
import {Modal,Button} from 'react-bootstrap';



function MyVerticallyCenteredModal(props) {
  const[todostate,setTodostate]=useState([])
  const[appstate,setAppstate]=useState({name:'',description:'',date:'',checkName:false})
  const sum=(sum)=> {
    setAppstate({...appstate,name:sum.target.value})
    console.log(appstate)
  } 
  const num=(num)=> {
    setAppstate({...appstate,description:num.target.value})
    console.log(appstate)
  } 
  const even=(even)=> {
    setAppstate({...appstate,date:even.target.value})
    console.log(appstate)
  } 
  const run=()=>{
    let cd = appstate 
    setTodostate([...todostate,cd]) 
    console.log(appstate,todostate,'run')
  }
  const handleChange=(index)=>{
    setTodostate([...todostate.slice(0,index),{...todostate[index],checkName:!todostate[index].checkName},...todostate.slice(index+1)]);
  }
  const handleDelete=(index)=>{
    console.log(!appstate.checkName)
    setTodostate([...todostate.slice(0,index),...todostate.slice(index+1)]);
  }
  
  return (
    <div>

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div id="form">
       
        <h4>ADD TO-DO HERE</h4>
        <hr/>
            <h3>Task Name:</h3>
    <input type="text" className="inp" placeholder="TASK NAME" onChange={sum}/>
      
      
        
    
    <h3>Description:</h3>
        <textarea type="text"  className="inp"
          placeholder="Description" onChange={num}/>
    
    
      <h3>Date:</h3>
      <input id="date" type ="date" className="inp" onChange={even}/>

 <br/>
    
        <Button className="but" onClick={props.onHide}>Cancel</Button>


         <Button className="but" variant="primary"  onClick={run}>Create</Button>
        
      <ul>
      {todostate.map((item,index)=> <div key={index} className={`${item.checkName ? "linethrough" : ""} ${
  (new Date(item.date) < new Date())? "datepassed" : "datestillvalid"
              }`}>
        {item.name}  {item.date} {item.description}
        <input  type='checkbox' checked={item.checkName} onChange={()=>handleChange(index)}/>
       <button onClick={()=>handleDelete(index)} id="but">Delete</button>
        <br/>
       
      </div>
      )}
    </ul>
     
      </div>
      </Modal>
      
     
    
    </div>
  );
}

function Todoform() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <div id="head">
    <br/>
<h1> TO-DO APPLICATION </h1>
    </div>
    
    <div id="name" >
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Button variant="primary" onClick={() => setModalShow(true)}>
      Create
      </Button>
     </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      
    </>
  );
}

export default Todoform;