import React from 'react';
import '../style/style.sass';
import SignIn from './signIn';
import { connect } from "react-redux";





class App extends React.Component {
    constructor(props) {
      super(props);  
    }

 render(){
   return(
     <div>
       <SignIn/>
     </div>
        );
    }
}

export default connect()(App)