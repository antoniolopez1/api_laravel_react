import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class AllCity extends Component{
  state={
    depart_name:'',
    cities:[],
    city_id: 0,
    depart_id: 0
  }
  destroy = event=>{
    event.preventDefault();
    const city= this.state.city_id;
    //console.log({depart});
    axios.delete(`http://localhost:8000/api/cities/${city}`).then(
      res=>{
      //  console.log(res);
        axios.get('http://localhost:8000/api/cities').then(res=>{
          console.log(res.data);
          this.setState({cities: res.data});
        }).catch(error=>{alert(error)});
      }
    );
  }
  componentDidMount(){
    axios.get('http://localhost:8000/api/cities').then(res=>{
      console.log(res.data.city_id);
      this.setState({cities: res.data});
    }).catch(error=>{alert(error)});

  }
  render(){
    return(
      <div>
        <p>Ciudades</p>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th colSpan='2'>Departamento</th>
            </tr>
          </thead>
          {this.renderList()}
        </table>
      </div>
    );
  }
  // departamento_pais(cou_id){
  //   const country_id = cou_id;
  //   return axios.get(`http://localhost:8000/api/countries/${country_id}`).then(res=>{
  //   console.log(res.data);
  //   // const name_pais = {
  //   //     name: res.data.name,
  //   //     code: res.data.code
  //   // }
  //   return res.data;
  // }).catch(error=>{alert(error)});
  //
  // }
  renderList(){
    return this.state.cities.map((data)=>{

        return(

        <tbody key={data.city_id}>
          <tr>
            <td>{data.name}</td>
            <td>{data.depart_id}</td>
            <td>{data.depart_name}</td>
            <td></td>
              <td>
                <Link to={`/show_city/${data.city_id}`}>Ver</Link>
              </td>
            <td>
              <Link to={`/edit_city/${data.city_id}`}>Editar</Link>
            </td>
            <td>
              <form onSubmit={this.destroy}>
              <button type='submit' onClick={()=>{this.setState({city_id: data.city_id})}}>Borrar</button>
              </form>
            </td>
          </tr>
        </tbody>
      );
    });
  }
}
