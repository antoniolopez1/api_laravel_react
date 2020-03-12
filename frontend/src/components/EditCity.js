import React, {Component} from 'react';
import Select from 'react-select';
import axios from 'axios';



export default class EditCity extends Component {
  state={
    city_id: 0,
    name:'',
    depart_id:0,
    depart_name: '',
    departaments:[]
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
    let city ={
      city_id: this.state.city_id

    }
    //console.log(depart.depart_id);
    axios.put(`http://localhost:8000/api/cities/${city.city_id}`, {name: this.state.name, depart_id: this.state.depart_id}).then(
      res=>{
      //  console.log(res.data);
      }
    );
  }
  componentDidMount(){
      const city ={
        city_id: this.props.match.params.city_id
      }
      this.setState({city_id:city.city_id});
  //  console.log('llega: '+depart.depart_id);
    axios.get(`http://localhost:8000/api/cities/${city.city_id}`).then(res=>{
    // console.log(res.data);
      this.setState({name:res.data.name, depart_id: res.data.depart_id, depart_name:res.data.depart_name});
      //console.log(this.state.departaments.name);
      //console.log(this.state);
    }).catch(error=>{alert(error)});
    axios.get('http://localhost:8000/api/departaments').then(res=>{
      //console.log(res.data);
      this.setState({departaments: res.data});
      //console.log(this.state.countries);
    }).catch(error=>{alert(error)});
  }
  Departament() {
          return (this.state.departaments.map(data => ({ label: data.name, value: data.depart_id })));
  }

  render(){


    return(
      <form onSubmit={this.handleSubmit}>
        <label>
        Nombre:
        <input type='text' value={this.state.name} onChange={this.handleChange.bind(this)} />
        </label>
        <label>
        Pais:
        {/*<input type='text' cou_id='cou_id' onChange={this.handleChange1} />*/}
        </label>
        <label style={{width: '200px'}}>
          <Select depart_id='depart_id'  value={{label:this.state.depart_name, value:this.state.depart_id}} options={this.Departament()} onChange={this.handleChange1.bind(this)}/>
          </label>
        <button type='submit'>Guardar</button>
      </form>
    );
  }

}
