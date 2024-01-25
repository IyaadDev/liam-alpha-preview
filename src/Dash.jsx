import "./Panel.css";
import IntroWidget from "./prebuilt/DashWidgets";
import Nav from "./prebuilt/Nav";
import "./index.css";

function Dash () {
    // Preview for developing primarily
    return (
      <>
      <Nav />
      <Widgets />
      </>
    );
}

function Widgets () {
  return (
    <div className="container">
    <div className="row text-center">
    <div className="col-md-10 col-lg-7" style={{height: '100%;'}}>
      <IntroWidget />
      </div>
    </div>
    </div>
  );
}

export default Dash;