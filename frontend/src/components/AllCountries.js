import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class AllCountries extends Component{
  state={
    countries:[],
    country_id: 0
  }
  destroy = event=>{
    event.preventDefault();
    const country= this.state.country_id;

    console.log({country});
    axios.delete(`http://localhost:8000/api/countries/${country}`).then(
      res=>{
        console.log(res);
        axios.get('http://localhost:8000/api/countries').then(res=>{
          console.log(res);
          this.setState({countries: res.data});
        }).catch(error=>{alert(error)});
      }
    );
  }
  componentDidMount(){
    axios.get('http://localhost:8000/api/countries').then(res=>{
      console.log(res.data);
      this.setState({countries: res.data});
    }).catch(error=>{alert(error)});
  }
  render(){
    return(
      <div>
        <p>Paises</p>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th colSpan='2'>Acronimo</th>
            </tr>
          </thead>
          {this.renderList()}
        </table>
      </div>
    );
  }
  renderList(){
    return this.state.countries.map((data)=>{
      return(
        <tbody key={data.country_id}>
          <tr>
            <td>{data.name}</td>
            <td>{data.code}</td>
              <td>
                <Link to={`/show/${data.country_id}`}>Ver</Link>
              </td>
            <td>
              <Link to={`/edit/${data.country_id}`}>Editar</Link>
            </td>
            <td>
              <form onSubmit={this.destroy}>
              <button type='submit' onClick={()=>{this.setState({country_id: data.country_id})}}>Borrar</button>
              </form>
            </td>
          </tr>
        </tbody>
      );
    });
  }
}
