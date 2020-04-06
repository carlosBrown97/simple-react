import React from 'react'

class Searcher extends React.Component {
  searchRef = React.createRef();

  getInformation = (e) => {
    e.preventDefault();
    let term = this.searchRef.current.value

    this.props.message(term)
    //console.log('SEARCH REF -->', this.searchRef.current.value)
  }

  render() {
    return(
      <form onSubmit={this.getInformation}>
        <div className="row">

          <div className="form-group col-md-8">
            <input
              ref={this.searchRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Find your image"
            />
          </div>

          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Shearch"
            />
          </div>

        </div>
      </form>
    )
  }
}

export default Searcher;
