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
import AllCity from './AllCity';
import AddCity from './AddCity';
import EditCity from './EditCity';

class Main extends Component{
  render(){
    return(
      <div>
        <Switch>
            <Route exact path='/' component={Home} />
          <Route path='/countries' component={AllCountries} />
          <Route path='/departaments' component={AllDepartaments} />
          <Route path='/cities' component={AllCity} />
          <Route path='/add' component={AddCountry} />
          <Route path='/add_departament' component={AddDepartament} />
          <Route path='/add_city' component={AddCity} />
          <Route path='/edit_departament/:depart_id' component={EditDepartament} />
          <Route path='/edit/:country_id' component={EditCountry} />
          <Route path='/edit_city/:city_id' component={EditCity} />
          <Route path='/show/:country_id' component={ShowCountry} />
        </Switch>
      </div>
    );

  }

}
export default Main;
