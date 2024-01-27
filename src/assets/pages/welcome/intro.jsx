// This serves as a sign up / login page
// Looks like GitHub's Page, uses typing animation

import '../../css/bootstrap/bootstrap.min.css';
import './css/welcomeGlobals.css';

function SignUpOrLogin() {
    return (
        <div className='container container2'>
            <div className='heading'>
                <h1 className='heading'>Welcome to Liam.</h1>
            </div>
            <div className='content'>
                <div className='buttons'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <button className='btn btn-primary btn-block'>Sign Up</button>
                            </div>
                            <div className='col'>
                                <button className='btn btn-primary btn-block'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpOrLogin;