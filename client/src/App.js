import { Component } from 'react';
<<<<<<< HEAD
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import PageHeader from '../src/components/PageHeader/PageHeader';
import WarehouseDetailsPage from './pages/WarehouseDetails/WarehouseDetailsPage';
=======
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails';
import PageHeader from '../src/components/PageHeader/PageHeader';
import WarehouseList from './pages/WarehouseList/WarehouseList';
>>>>>>> develop

class App extends Component {

  render() {
    return (
      <>
      <PageHeader />
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={WarehouseList}/>
            <Route path="/warehouse-details/:id"
              render={(routerProps) => {return <WarehouseDetailsPage {...routerProps}/>}}/>
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
