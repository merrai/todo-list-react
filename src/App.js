import React, { Component } from 'react';
import Todoinput from './component/Todoinput';
import Todolist from './component/Todolist';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';



class App extends Component{
  state={
    items: [],
    id:uuidv4(),
    item:'',
    editItem:false
  };
  handleChange = e =>{
    this.setState(
      {
        item: e.target.value 
      });
  };
  handleSubmit = e =>{
    e.preventDefault();

  
  const newItem = {
        id:this.state.id,
        title:this.state.item
        
  }

  
  const updateItems=[...this.state.items,newItem];
  this.setState({
        items:updateItems,
        item:"",
        id:uuidv4(),
        editItem:false
  });
};
clearList = () =>{
  this.setState({
    items:[]
  });
};
handleDelete = (id) =>{
  const filtredItems = this.state.items.filter(item =>item.id !==id);
  this.setState({
        items:filtredItems
  });
};
handleEdit = id =>{
  const filtredItems = this.state.items.filter(item =>item.id !==id);
  const selectedItem = this.state.items.find(item => item.id ===id);
  this.setState({
        items:filtredItems,
        item:selectedItem.title,
        editItem:true,
        id:id
      });
};

  render(){
    
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-8 mt4'> 
        <h3 className='text-capitalize text-center'>Enter your todo list here</h3>
      <Todoinput item={this.state.item} 
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      editItem={this.state.editItem}
      
      />
      <Todolist items ={this.state.items} 
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                />
        </div>

      </div>


    </div>
  
  );}
}
 
export default App;
