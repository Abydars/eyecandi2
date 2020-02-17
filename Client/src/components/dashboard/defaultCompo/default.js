import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb';

const Dashboard = () => {

    return (
        <Fragment>
            <Breadcrumb parent="Dashboard" title="Dashboard" sub_title="Frames" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Dashboard;