import React, {Component} from 'react';
import axios from 'axios';

export default class ShowCountry extends Component{
  state={
    country_id: 0,
    name: '',
    code: ''
  }
  componentDidMount(){
    const country ={
      country_id: this.props.match.params.country_id

    }
//  console.log('llega: '+country.country_id);
    axios.get(`http://localhost:8000/api/countries/${country.country_id}`).then(res=>{
    console.log(res.data);
    this.setState({country_id:res.data.id, name: res.data.name, code: res.data.code});
  }).catch(error=>{alert(error)});
}
  render(){
    return(

      <div>
        <h3>Paises</h3>
        <p>Nombre: {this.state.name}</p>
        <p>Acronimo: {this.state.code}</p>
      </div>
    );
  }
}
