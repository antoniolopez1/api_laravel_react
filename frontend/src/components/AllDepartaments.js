import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class AllDepartaments extends Component{
  state={
    country_name:'',
    departaments:[],
    depart_id: 0,
    cou_id: 0
  }
  destroy = event=>{
    event.preventDefault();
    const depart= this.state.depart_id;
    console.log({depart});
    axios.delete(`http://localhost:8000/api/departaments/${depart}`).then(
      res=>{
        console.log(res);
        axios.get('http://localhost:8000/api/departaments').then(res=>{
          console.log(res);
          this.setState({departaments: res.data});
        }).catch(error=>{alert(error)});
      }
    );
  }
  componentDidMount(){
    axios.get('http://localhost:8000/api/departaments').then(res=>{
      console.log(res);
      this.setState({departaments: res.data});
    }).catch(error=>{alert(error)});

  }
  render(){
    return(
      <div>
        <p>Departamentos</p>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th colSpan='2'>Pais</th>
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
    return this.state.departaments.map((data)=>{

        return(

        <tbody key={data.depart_id}>
          <tr>
            <td>{data.name}</td>
            <td>{data.cou_id}</td>
            <td>{data.country_name}</td>
            <td></td>
              <td>
                <Link to={`/show_departament/${data.depart_id}`}>Ver</Link>
              </td>
            <td>
              <Link to={`/edit_departament/${data.depart_id}`}>Editar</Link>
            </td>
            <td>
              <form onSubmit={this.destroy}>
              <button type='submit' onClick={()=>{this.setState({depart_id: data.depart_id})}}>Borrar</button>
              </form>
            </td>
          </tr>
        </tbody>
      );
    });
  }
}
