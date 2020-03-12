import React, {Component} from 'react';
import Select from 'react-select';
import axios from 'axios';

export default class AddCity extends Component {
  state={
    name:'',
    depart_id:'',
    departaments:[]
  }
  componentDidMount(){
    axios.get('http://localhost:8000/api/departaments').then(res=>{
      console.log(res.data);
      this.setState({departaments: res.data});
    }).catch(error=>{alert(error)});
  }
  handleChange = e =>{
    this.setState({name: e.target.value});

  }
  handleChange1 = e =>{
    this.setState({depart_id: e.value});
  }
  handleSubmit = e =>{
    e.preventDefault();
    // const country = {
    //   name: this.state.name,
    //   code:  this.state.code
    // }
    axios.post('http://localhost:8000/api/cities/', {name: this.state.name, depart_id: this.state.depart_id}).then(
      res=>{
        console.log(res.data);
      }
    );
  }
  Departament() {
          return (this.state.departaments.map(data => ({ label: data.name, value: data.depart_id })));
  }
  render(){
  //  console.log('mostrar'+{optionItems});
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
        Nombre:
        <input type='text' name='name' onChange={this.handleChange} />
        </label>
        <label>
        Departamento:
        {/*<input type='text' cou_id='cou_id' onChange={this.handleChange1} />*/}
      </label>
      <label style={{width: '200px'}}>
        <Select depart_id='depart_id' options={this.Departament()} onChange={this.handleChange1}/>
        </label>
        <button type='submit'>Guardar</button>
      </form>
    );
  }
}
