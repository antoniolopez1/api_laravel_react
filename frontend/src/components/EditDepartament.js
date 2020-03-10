import React, {Component} from 'react';
import Select from 'react-select';
import axios from 'axios';



export default class EditDepartament extends Component {
  state={
    depart_id: 0,
    depart_name:'',
    name:'',
    cou_id:0,
    countries:[]
  }
  componentDidMount(){
    const depart ={
      depart_id: this.props.match.params.depart_id

    }
  console.log('llega: '+depart.depart_id);
  axios.get(`http://localhost:8000/api/departaments/${depart.depart_id}`).then(res=>{
    console.log(res.data);
    this.setState({name: res.data.name, cou_id: res.data.cou_id});
  }).catch(error=>{alert(error)});

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
    const depart ={
      depart_id: this.props.match.params.depart_id

    }
    axios.put(`http://localhost:8000/api/departaments/${depart.depart_id}`, {name: this.state.name, cou_id: this.state.cou_id}).then(
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
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
        Pais:
        {/*<input type='text' cou_id='cou_id' onChange={this.handleChange1} />*/}
        <Select cou_id='cou_id'  value={this.state.cou_id} options={this.Country()} onChange={this.handleChange1}/>
        </label>
        <button type='submit'>Guardar</button>
      </form>
    );
  }
}
