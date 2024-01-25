import "../../index.css";

function IntroWidget() {
    return (
        <div
            className="card"
            style={{ background: 'rgba(255,255,255,0.6)'}}
        >
            <div
                className="card-body text-center"
                style={{ borderRadius: '5rem', background: '#ffffff00' }}
            >
                <img
                    src="https://schooltool.io/assets/img/logo.webp?h=0722d3247654ad6b5121ce1ebd28d5fc"
                    style={{ width: '5rem', height: 'auto' }}
                />
                <h2>
                    Welcome to
                    <span className="sct" style={{ marginLeft: '0.25rem' }}>
                        School Tool
                    </span>
                    !
                </h2>
                <p>
                    Check your timetable⏰, Study smarter 🧠, list tasks 📃 and everything
                    else, all in one place 😉. Welcome to School Tool 📚
                </p>
            </div>
        </div>
    );
}

export default IntroWidget;