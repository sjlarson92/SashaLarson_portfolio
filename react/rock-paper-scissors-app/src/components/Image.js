import React from 'react';
import rock1 from '../images/rock1.jpg'
import paper1 from '../images/paper1.jpg'
import scissors1 from '../images/scissors1.jpg'

class Image extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userChoice:""
    };
  }
  imageClickEvent = (userChoice) => {
    console.log("user clicked on: ", userChoice);
  }
  render(){
    return (
      <div>
        <img onClick={() =>
        this.imageClickEvent("rock")}
        src={rock1} alt="rock"/>
        <img onClick={() =>
        this.imageClickEvent("paper")}
        src={paper1} alt="paper"/>
        <img onClick={() =>
        this.imageClickEvent("scissors")}
        src={scissors1} alt="scissors"/>
      </div>
      )
    }
}

export default Image;
