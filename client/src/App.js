import { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails';
import PageHeader from '../src/components/PageHeader/PageHeader';
import EditWarehouse from '../src/pages/EditWarehouse/EditWarehouse'
class App extends Component {
  
  render () {
    return (
      <>
      <PageHeader />
      {/* <EditWarehouse /> */}
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact/>
            <Route path="/warehouse-details/:id"
              render={(routerProps) => {return <WarehouseDetails {...routerProps}/>}}/>
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
