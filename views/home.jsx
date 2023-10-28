const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                     <img src='/images/alina-karpenko-03RUtFXdu1w-unsplash.jpg' alt='Alina Karpenko Green Drink' />
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@alinasagirova?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alina Karpenko</a> on <a href="https://unsplash.com/photos/avocado-shake-on-glass-cup-03RUtFXdu1w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
                <a href="/places">
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>  
        </Def>
        
    )
}

module.exports = home