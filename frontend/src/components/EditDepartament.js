import React, {Component} from 'react';
import Select from 'react-select';
import axios from 'axios';



export default class EditDepartament extends Component {
  state={
    depart_id: 0,
    name:'',
    cou_id:0,
    country_name: '',
    countries:[]
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
    let depart ={
      depart_id: this.state.depart_id

    }
    //console.log(depart.depart_id);
    axios.put(`http://localhost:8000/api/departaments/${depart.depart_id}`, {name: this.state.name, cou_id: this.state.cou_id}).then(
      res=>{
      //  console.log(res.data);
      }
    );
  }
  componentDidMount(){
      const depart ={
        depart_id: this.props.match.params.depart_id
      }
      this.setState({depart_id:depart.depart_id});
  //  console.log('llega: '+depart.depart_id);
    axios.get(`http://localhost:8000/api/departaments/${depart.depart_id}`).then(res=>{
    // console.log(res.data);
      this.setState({name:res.data.name, cou_id: res.data.cou_id, country_name:res.data.country_name});
      //console.log(this.state.departaments.name);
      //console.log(this.state);
    }).catch(error=>{alert(error)});
    axios.get('http://localhost:8000/api/countries').then(res=>{
      //console.log(res.data);
      this.setState({countries: res.data});
      //console.log(this.state.countries);
    }).catch(error=>{alert(error)});
  }
  Country() {
          return (this.state.countries.map(data => ({ label: data.name, value: data.country_id })));
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
          <Select cou_id='cou_id'  value={{label:this.state.country_name, value:this.state.cou_id}} options={this.Country()} onChange={this.handleChange1.bind(this)}/>
          </label>
        <button type='submit'>Guardar</button>
      </form>
    );
  }

}
