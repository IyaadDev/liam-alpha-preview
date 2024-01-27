import '../css/bootstrap/bootstrap.min.css';
import '../css/custom/gTexts.css';
import '../css/custom/nav.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand sticky-top bg-body d-md-flex justify-content-md-center align-items-md-center py-3" style={{ paddingTop: "0.25rem", paddingBottom: "0.25rem", background: "var(--bs-border-color-translucent)", marginBottom: "2rem" }}>
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" data-bss-disabled-mobile="true" href="#" style={{ fontWeight: "bold", fontSize: "3rem" }}>
          <div className="d-md-flex justify-content-md-center align-items-md-center" style={{ padding: "0.25rem", paddingTop: "0px", paddingBottom: "0px", borderRadius: "0.5rem", fontSize: "1rem" }}>
            <img src="/logo.webp" style={{ width: "2rem", height: "auto" }} />
            <span className="sct" style={{ fontSize: "1.25rem", marginLeft: "0.25rem" }}>Liam</span>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Nav; 