import { useState } from 'react';
import './App.css';
import Header from "./components/Header.js"
import Publication from './components/Publication';
import PublicationCreator from "./components/PublicationCreator.js"
import LogIn from "./components/LogIn.js"
import {useStateValue} from "./Backed/Context"

function App() {
  const [{user}, dispatch] = useStateValue();
  console.log(user)
  
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
          <PublicationCreator/>
          <Publication
            Owner = "Jahel"
            Text = "lorem ipsu facto terci derma preto di maria"
          />
        </div>        
        {/*Right*/}
      </div>
    </div>
  );
}

export default App;
