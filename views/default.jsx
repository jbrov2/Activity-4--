const React = require('react')

function Def (html) {
    return(
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
            </head>
            <body>
                <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className="navbar-brand" href="/">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className="nav-link" href="/places">Places</a>
                        </li>
                        <li className='nav-item'>
                            <a className="nav-link" href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def