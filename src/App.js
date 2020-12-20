import logo from './logo.svg';
import './App.css';
import { BasicTable } from './components/BasicTable';
import { FilteringTable } from './components/FilteringTable';
import { PaginatonTable } from './components/PaginationTable';


function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <FilteringTable /> */}
      <PaginatonTable />
    </div>
  );
}

export default App;
