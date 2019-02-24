import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Spareside  from './components/spareside/Spareside';
import Kompetanseside from './components/kompetanseside/Kompetanseside';
import Kompetanseforside from './components/kompetanseside/Kompetanseforside';

class App extends React.Component {
    render() {

        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/forside" exact={true} component={Kompetanseforside}/>
                        <Route path="/spare" exact={true} component={Spareside}/>
                        <Route path="/kompetanse" exact={true} component={Kompetanseside}/>
                        <Route render={() => <h3>No Match</h3>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
