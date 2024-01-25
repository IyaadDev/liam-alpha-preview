import "../bootstrap.min.css";
import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand sticky-top bg-body d-md-flex justify-content-md-center align-items-md-center py-3">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="#" style={{fontWeight: "bold", fontSize: "3rem"}}>
                    <div className="d-md-flex justify-content-md-center align-items-md-center" style={{padding: "0.25rem!important", paddingTop: "0px!important", paddingBottom: "0px!important", borderRadius: "0.5rem!important", fontSize: "1rem"}}>
                        <img src="https://schooltool.io/assets/img/logo.webp?h=0722d3247654ad6b5121ce1ebd28d5fc" style={{width: "2rem", height: "auto"}} />
                        <span className="sct" style={{fontSize: "1.25rem", marginLeft: "0.25rem"}}>
                            School Tool
                        </span>
                    </div>
                </a>
            </div>
        </nav>
    );
}

export default Nav;