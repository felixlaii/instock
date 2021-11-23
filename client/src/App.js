import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WarehouseDetailsPage from './pages/WarehouseDetails/WarehouseDetailsPage';
import PageHeader from '../src/components/PageHeader/PageHeader';
import EditWarehouse from '../src/pages/EditWarehouse/EditWarehouse'
import WarehouseList from './pages/WarehouseList/WarehouseList';
import WarehouseDetails from '../src/components/WarehouseDetails/WarehouseDetails'
import AddWarehouse from '../src/pages/AddWarehouse/AddWarehouse'
import InventoryPage from './pages/InventoryPage/InventoryPage';
import AddInventory from './pages/AddInventoryItem/AddInventoryItem';
import InventoryItemDetails from './pages/InventoryItemDetails/InventoryItemDetails';


class App extends Component {

  render() {
    return (
      <>
        <PageHeader />
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path="/" exact component={WarehouseList} />
              <Route path="/warehouse-details/:id"
                render={(routerProps) => { return <WarehouseDetailsPage {...routerProps} /> }} />
              <Route path="/edit-warehouse" component={EditWarehouse} />
              render={(routerProps) => { return <WarehouseDetailsPage {...routerProps} /> }}
              <Route path="/add-new-warehouse" component={AddWarehouse}/>
              <Route path="/inventory" exact component={InventoryPage} />
              <Route path="/inventory-item-details" />
              <Route path="/edit-inventory-item-" />
              <Route path="/add-new-inventory-item-" />
            </Switch>

          </div>
        </BrowserRouter>
      </>
    );
  }
}


export default App;
