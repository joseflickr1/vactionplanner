import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Forside  from './components/forside/Forside';

class App extends React.Component {
    render() {

        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact={true} component={Forside}/>
                        <Route render={() => <h3>No Match</h3>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
