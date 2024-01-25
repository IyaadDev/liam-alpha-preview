import '../css/bootstrap/bootstrap.min.css';
import '../css/global.css';
import Nav from '../components/Nav';
import Widgets from "../components/Widgets";

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className='row'>
          <Widgets className="panel" />
        </div>
      </div>
    </div>
  );
}

export default App;
