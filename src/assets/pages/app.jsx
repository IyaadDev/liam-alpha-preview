import '../css/bootstrap/bootstrap.min.css';
import '../css/global.css';
import Nav from '../../../../src/assets/components/Nav';
import Widgets from "../../../../src/assets/components/Widgets";

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
