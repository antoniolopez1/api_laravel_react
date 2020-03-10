import React, {Component} from 'react';
import Select from 'react-select';
import axios from 'axios';

export default class AddDepartament extends Component {
  state={
    name:'',
    cou_id:'',
    countries:[]
  }
  componentDidMount(){
    axios.get('http://localhost:8000/api/countries').then(res=>{
      console.log(res.data);
      this.setState({countries: res.data});
    }).catch(error=>{alert(error)});
  }
  handleChange = e =>{
    this.setState({name: e.target.value});

  }
  handleChange1 = e =>{
    this.setState({cou_id: e.value});
  }
  handleSubmit = e =>{
    e.preventDefault();
    // const country = {
    //   name: this.state.name,
    //   code:  this.state.code
    // }
    axios.post('http://localhost:8000/api/departaments/', {name: this.state.name, cou_id: this.state.cou_id}).then(
      res=>{
        console.log(res.data);
      }
    );
  }
  Country() {
          return (this.state.countries.map(data => ({ label: data.name, value: data.country_id })));
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
        Pais:
        {/*<input type='text' cou_id='cou_id' onChange={this.handleChange1} />*/}
        <Select cou_id='cou_id' options={this.Country()} onChange={this.handleChange1}/>
        </label>
        <button type='submit'>Guardar</button>
      </form>
    );
  }
}
