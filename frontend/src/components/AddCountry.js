import React, {Component} from 'react';
import axios from 'axios';

export default class AddCountry extends Component {
  state={
    name:'',
    code:''
  }
  handleChange = e =>{
    this.setState({name: e.target.value});

  }
  handleChange1 = e =>{
    this.setState({code: e.target.value});
  }
  handleSubmit = e =>{
    e.preventDefault();
    // const country = {
    //   name: this.state.name,
    //   code:  this.state.code
    // }
    axios.post('http://localhost:8000/api/countries/', {name: this.state.name, code: this.state.code}).then(
      res=>{
        console.log(res.data);
      }
    );
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
        Nombre:
        <input type='text' name='name' onChange={this.handleChange} />
        </label>
        <label>
        Acronimo:
        <input type='text' code='code' onChange={this.handleChange1} />
        </label>
        <button type='submit'>Guardar</button>
      </form>
    );
  }
}
