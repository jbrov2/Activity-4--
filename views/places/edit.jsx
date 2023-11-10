const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
            <main>
                <h1>Edit a Place</h1>
                <form action={`/places/${data.place.id}?_method=PUT`} method='POST'>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="name">Place Name</label>
                        <input className='form-control'id='name' name='name'
                        value={data.place.name}
                        required />
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="pic">Place Picture Please</label>
                        <input className='form-control' type="url" id='pic' name='pic' />
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="city">Place City</label>
                        <input className='form-control' id='city' name='city' value={data.place.city}/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="state">Place State</label>
                        <input className='form-control' id='state' name='state' value={data.place.state}/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="cuisines">Place Cuisine</label>
                        <input className='form-control' id='cuisines' name='cusines' value={data.place.cuisine}required/>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place"  />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form
