import React,{Component} from 'react';
import axios from 'axios';

export default class EditCountry extends Component{
  state={
    country_id: 0,
    name: '',
    code: '',
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
    const country ={
      country_id: this.props.match.params.country_id

    }
    //console.log(country.country_id);
    axios.put(`http://localhost:8000/api/countries/${country.country_id}`, {name: this.state.name, code: this.state.code}).then(
      res=>{
        console.log(res.data);
      }
    );
  }
  componentDidMount(){
      const country ={
        country_id: this.props.match.params.country_id

      }
    console.log('llega: '+country.country_id);
    axios.get(`http://localhost:8000/api/countries/${country.country_id}`).then(res=>{
      console.log('+res.data');
      this.setState({country_id:res.data.id, name: res.data.name, code: res.data.code});
    }).catch(error=>{alert(error)});
  }


  render(){


    return(
      <form onSubmit={this.handleSubmit}>
        <label>
        Nombre:
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
        Acronimo:
        <input type='text' code='code' value={this.state.code} onChange={this.handleChange1} />
        </label>
        <button type='submit'>Guardar</button>
      </form>

    )
  }

}
