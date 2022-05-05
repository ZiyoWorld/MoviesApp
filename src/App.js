import React, {Component} from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';

class App extends Component {
    
    state = { 
        
     }
    render() { 
        return <div>
            <Header />
            <Main />
            <Footer />
        </div>;
    }
}
 
export default App;



