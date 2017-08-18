import React, {Component} from 'react';
import {Provider} from 'react-redux';
import App from 'grommet/components/App';
import {ConnectedRouter} from 'react-router-redux';
import {history, store} from './store';
import Route from './authRoute';
import SingleLayout from "./layout/SingleLayout";
import SplittedLayout from "./layout/SplittedLayout";

class ReactRoot extends Component {
    render() {
        return (
            <Provider store={store}>
                {/* ConnectedRouter will use the store from Provider automatically */}
                <ConnectedRouter history={history}>
                    <App centered={false}>
                        <Route path="/private/" component={SplittedLayout}/>
                        <Route path="/public/" component={SingleLayout}/>
                    </App>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default ReactRoot;
