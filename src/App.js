import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'
import NavBar from './components/NavBar'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import Search from './components/Search'
import About from './components/About'
import {withRouter} from 'react-router-dom'

class App extends React.Component {
  state = {
  }

  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")
  }


  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form
        formName="Login Form"
        handleSubmit={this.handleLoginSubmit}
      />
    } else if (routerProps.location.pathname === "/register") {
      return <Form
        formName="Register Form"
        handleSubmit={this.handleRegisterSubmit}
      />
    }
  }


  renderProfile = (routerProps) => {
    return <ProfileContainer />
  }



  renderSearch = (routerProps) => {
    return <Search />
  }

  renderAbout = (routerProps) => {
    return <About />
  }

  render(){
    return (
      <div className="App">
        <NavBar/>  
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" render={this.renderForm}/>
        <Route path="/search" render={this.renderSearch} />
        <Route path="/register" render={this.renderForm}/>
        <Route path="/profile" render={this.renderProfile} />
        <Route path="/about" render={this.renderAbout} />
      
        </Switch>
      </div>
    );
  }
}

//export default App;

let MagicalComponent = withRouter(App)
export default MagicalComponent
