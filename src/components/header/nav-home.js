export default function NavHome() {
    return (
        <>
            <nav className="navbar z-5 navbar-expand-lg position-fixed w-100">
                <div className="container d-flex align-items-center text-center">

                    <a href="/anime-project"
                        className="navbar-brand fw-bold fs-3 text-semi-danger"
                        style={{fontFamily : "Gloria Hallelujah"}}>
                            
                            MyAnime

                    </a>

                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <ul className="navbar-nav collapse navbar-collapse gap-2">
                        <li className="nav-item dropdown">
                            <button className="btn dropdown-toggle"
                                data-bs-toggle="dropdown"
                                data-bs-target="dropdown-genre"
                                aria-expanded="false">Genre
                            </button>

                            <ul className="dropdown-menu dropdown-genre mt-2">
                                <li><a href="#/genre/action" className="dropdown-item">Action</a></li>
                                <li><a href="#/genre/drama" className="dropdown-item">Drama</a></li>
                                <li><a href="#/genre/adventure" className="dropdown-item">Adventure</a></li>
                                <li><a href="#/genre/fantasy" className="dropdown-item">Fantasy</a></li>
                                <li><a href="#/genre/mistery" className="dropdown-item">Mistery</a></li>
                                <li><a href="#/genre/isekai" className="dropdown-item">Isekai</a></li>
                            </ul>
                        </li>

                        <li className="nav-item me-lg-auto">
                            <a href="#/author" className="nav-link">Tentang Author</a>
                        </li>
                    <div className="d-flex align-items-center">
                        <form className="gap-2 d-flex">
                            <input type="search" placeholder="Cari anime.."className="py-1 px-2 rounded-3"/>
                            <button className="btn btn-danger d-flex align-items-center justify-content-center py-1 px-3">
                                <i className="bx bx-tada fs-5 fw-bold bx-search text-"></i>
                            </button>
                        </form>
                    </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}