import { useState } from 'react';
import './App.css';
import Header from "./components/Header.js"
import LogIn from "./components/LogIn.js"
import {useStateValue} from "./Backed/Context"
import PublicationsPanel from "./components/PublicationsPanel"

function App() {
  const [{user}, dispatch] = useStateValue();       
  
  if(user == null){
    return(
      <LogIn/>
    )
  }

  return (  
    <div className="App">
      {/*Header*/}
      <Header/>      
      {/*Body*/}
      <div className="app__body">
        {/*Left*/}
        {/*Center*/}
        <div className="app__center">
          {<PublicationsPanel/>          }
        </div>        
        {/*Right*/}
      </div>
    </div>
  );
}

export default App;
