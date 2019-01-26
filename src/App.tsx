import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Forside  from './components/forside/Forside';
import Spareside  from './components/spareside/Spareside';
import Trysilside  from './components/trysilside/Trysilside';

class App extends React.Component {
    render() {

        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/forside" exact={true} component={Forside}/>
                        <Route path="/spare" exact={true} component={Spareside}/>
                        <Route path="/" exact={true} component={Trysilside}/>
                        <Route render={() => <h3>No Match</h3>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
