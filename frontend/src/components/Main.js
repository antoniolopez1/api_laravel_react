import React,{Component} from 'react';
import {Switch, Route } from 'react-router-dom';
import AllCountries from './AllCountries';
import Home from './Home';
import AddCountry from './AddCountry';
import EditCountry from './EditCountry';
import ShowCountry from './ShowCountry';
import AllDepartaments from './AllDepartaments';
import AddDepartament from './AddDepartament';
import EditDepartament from './EditDepartament';


class Main extends Component{
  render(){
    return(
      <div>
        <Switch>
            <Route exact path='/' component={Home} />
          <Route path='/countries' component={AllCountries} />
          <Route path='/departaments' component={AllDepartaments} />
          <Route path='/add' component={AddCountry} />
          <Route path='/add_departament' component={AddDepartament} />
          <Route path='/edit_departament/:depart_id' component={EditDepartament} />
          <Route path='/edit/:country_id' component={EditCountry} />
          <Route path='/show/:country_id' component={ShowCountry} />
        </Switch>
      </div>
    );

  }

}
export default Main;
