import React, { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import * as serviceWorker from './serviceWorker';

// ** Import custom components for redux**
import { Provider } from 'react-redux';
import store from './store/index';
import App from "./components/app";


// Import custom Components 
import Dashboard from './components/dashboard/dashboard';
import Login from './components/eyeCandi/login';
import SignUp from './components/eyeCandi/signup';
import FormWizard from './components/wizard/form-wizard';
import FramesGallery from './components/eyeCandi/pages/frames';



// sample page
import Samplepage from './components/sample/samplepage';
import SupportTicket from './components/support-ticket/supportTicket';

//firebase Auth
function Root() {
    useEffect(() => {
        const themeColor = localStorage.getItem('theme-color')
        const layout = localStorage.getItem('layout_version')
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/${themeColor}.css`);
        document.body.classList.add(layout);
    }, []);
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter basename={'/'}>
                    <ScrollContext>
                        <Switch>
                            <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                            <Route path={`${process.env.PUBLIC_URL}/signup`} component={SignUp} />
                            <Route exact path={`${process.env.PUBLIC_URL}/Setup-Wizard`} component={FormWizard} />

                            <Fragment>
                                <App>
                                    {/* dashboard menu */}
                                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />

                                    {/* Frames Gallery Page */}
                                    <Route exact path={`${process.env.PUBLIC_URL}/FramesGallery`} component={FramesGallery} />



                                </App>
                            </Fragment>
                        </Switch>
                    </ScrollContext>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();