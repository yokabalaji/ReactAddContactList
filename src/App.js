import { Component } from "react";
import {v4 as uuidv4} from "uuid";
import ContactLists from './components/ContactLists';
import './App.css';
const contactList=[
    {
        id:uuidv4(),
        names:'bala',
        mobileNo:9867577678,
        isStar:false


    },
    {
        id:uuidv4(),
        names:'yoga',
        mobileNo:9867574678,
        isStar:false
    },{
        id:uuidv4(),
        names:'pavi',
        mobileNo:9867577678,
        isStar:false
    }
]

class App extends Component{
    state ={contactsList:contactList,
    names:"",
mobileNo:"",
};
onchangingtext =(event)=>{
  return  this.setState({names:event.target.value})
}
onchangeMobnum=(event)=>{
   return this.setState({mobileNo:event.target.value})
}
onclickChange=(event)=>{
    event.preventDefault();

    const {names,mobileNo,contactsList}=this.state
   const newContact={
        id:uuidv4(),
        names,
        mobileNo,
        isStar:false
    }
    this.setState(prevState=>({
        contactsList:[...prevState.contactsList,newContact],
        names:'',
        mobileNo:''
    }))


}
togglesitem=(id)=>{
    this.setState(prevState=>({contactsList:prevState.contactsList.map((eachitem)=>{
if(id===eachitem.id){
    return {...eachitem,isStar:!eachitem.isStar}
}
return eachitem
    })}))
}
    
render(){
    const {names, mobileNo, contactsList}=this.state

  return(  <div className="container">
        <div className="form-container">
             <h1 className="title">Contacts :</h1>
            <form className="form1" >
                <label className="name">Name :</label>
                <input type="text" value={names} placeholder="type name" onChange={this.onchangingtext}>

                </input>
                <hr className="separate"></hr>
                <label className="mobno">MobileNumber :</label>
                <input type="number" value={mobileNo} placeholder="enter MobileNum" onChange={this.onchangeMobnum}>

                </input><br></br>
                <button type="submit" onClick={this.onclickChange} className="btn-add-contact">Add Contact</button>

            </form>
        </div>
    <ul className="Unlists">
        <li className="listser">
        <h3 className="table-header">name</h3>
        <hr className="separator"></hr>
        <h3 className="table-header">mobileNo</h3>
            </li><br></br>
         {  contactsList.map((eachitem)=>(
                 <ContactLists 
              key={eachitem.id} 
          contactDetails={eachitem}
              toggleItem={this.togglesitem}/>
              ))
         }<br></br>
         
    </ul>
    </div>)
}
}



export default App;
