import logo from '../../images/2 svg transparent.svg'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo" width="120px" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav" >
                            <a className="nav-link active" aria-current="page" style={{color: "white"}} href="/">Home</a>
                            <a className="nav-link" href="/" style={{color: "white"}}>Contacts</a>
                            <a className="nav-link" href="/" style={{color: "white"}}>About</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar