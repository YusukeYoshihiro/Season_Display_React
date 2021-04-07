import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
  // constructor(props) with super(props) is automatically created when we create class components
  // When if you want to need some "State" in a class component, 
  // we must initialize the "State" like below inside of constructor(props) with super(props);

  //  constructor(props){
  //    super(props);
  //   //  
  //    this.state = { 
  //      lat: null,
  //      errorMessage: ''
  //   };
  // }

  state = { 
    lat: null,
    errorMessage: ''
 };
  
  // visible screen at first render 
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // React says we have to define render!
  render() {
    return (
      
      <div >
       {
       this.state.errorMessage && !this.state.lat ? 
       <h2>Error:{this.state.errorMessage}</h2>
       :
        !this.state.errorMessage && this.state.lat ? 
        <SeasonDisplay lat={this.state.lat} /> 
       :
       <Spinner message="Please accept location request"/>
      }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);


