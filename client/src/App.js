import { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import PageHeader from '../src/components/PageHeader/PageHeader';
import WarehouseList from './pages/WarehouseList/WarehouseList';

class App extends Component {
  
  render () {
    return (
      <>
      <PageHeader />
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={WarehouseList}/>
            <Route path="/warehouse-details"/>
            <Route path="/edit-warehouse"/>
            <Route path="/add-new-warehouse"/>
            <Route path="/inventory"/>
            <Route path="/inventory-item-details"/>
            <Route path="/edit-inventory-item-"/>
            <Route path="/add-new-inventory-item-"/>
          </Switch>

        </div>
      </BrowserRouter>  
      </>    
    );
  }
}

export default App;
