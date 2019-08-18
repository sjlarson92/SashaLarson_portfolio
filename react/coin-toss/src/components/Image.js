import React from 'react';
import heads from './heads.jpg'
import tails from './tails.jpeg'

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      userChoice: props.name
    };
  }
  imageClick = () => {
    console.log("image clicked!");
    console.log("name is ", this.state.name);
  }
  render(){
    if (this.state.name === "heads"){
      return (
      <div>
        <div>
          <img onClick={this.imageClick} className="image" src={heads} alt="heads"/>
        </div>
      </div>
      )
    }
    else {
      return (
        <div>
          <img onClick={this.imageClick} className="image" src={tails} alt="tails"/>
        </div>
      )
    }
  }
}

export default Image;
