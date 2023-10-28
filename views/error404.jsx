const React = require('react')
const Def = require('./default')

function error404() {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div>
                    <img className='img-fluid' src='/images/ippo_bald.jpeg' alt="Joji Morikawa Hajime No Ippo" />
                </div>
                <p>Oops, sorry, we can't find this page buckaroo!</p>
            </main>
        </Def>
    )
}

module.exports = error404