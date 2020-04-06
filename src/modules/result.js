import React from 'react';
import Image from './image';

class Result extends React.Component {

  viewImages = () => {
  //console.log('RESULT', this.props.images)
    const images = this.props.images

    if ( images.length === 0) {
      return null
    }

    return(
      <React.Fragment>
        <div className="col-12 p-5 row">
          {images.map(i => (
            <Image
              key={i.id}
              image={i}
            />
          ))}
        </div>
      </React.Fragment>
    )
  }

  render() {
    return(
      <React.Fragment>
        {this.viewImages()}
      </React.Fragment>
    )
  }
}

export default Result;
