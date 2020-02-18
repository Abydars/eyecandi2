import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';

const Dashboard = () => {

    return (
        <Fragment>
            <Breadcrumb parent="Dashboard" title="Dashboard" sub_title="Frames" />
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-center align-self-center mt-5">

                        <h3 className="txt-secondary f-w-700">Not enough data yet!</h3>
                        <p> Your dashboard will appear after you have setup your</p>
                        <p> frames gallery and start to get traffic to it.</p>
                        <button className="btn btn-secondary">Start a Frame Gallery</button>

                    </div>
                    <div className="col-md-4"></div>


                </div>
            </div>
        </Fragment>
    );
};

export default Dashboard;