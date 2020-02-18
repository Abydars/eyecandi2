import React, { Fragment, useState } from 'react';
import { Home } from 'react-feather';
import { Link } from 'react-router-dom'
import Bookmark from './bookmark';


const Breadcrumb = props => {
   const [breadcrumb, setBreadcrumb] = useState(props);

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col">
                            <div className="page-header-left">
                                <h3 className="txt-danger">{breadcrumb.title}</h3>
                                <ol className="breadcrumb pull-right">
                                    <li className="breadcrumb-item">
                                        <Link to="/dashboard/default">
                                            <Home />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">{breadcrumb.parent}</li>
                                    <li className="breadcrumb-item active">{breadcrumb.sub_title}</li>
                                </ol>
                            </div>
                        </div>

                        {
                            props.title === "Frames" ?

                                <div className="col text-right">
                                    <a href="#_" className="btn btn-outline-info mr-3">Setting</a>
                                    <a href="#_" className="btn btn-secondary">My Public Gallery</a>
                                </div>

                                : null
                        }



                        {/* <!-- Bookmark Start--> */}
                       {/*<Bookmark />*/}
                        {/* <!-- Bookmark Ends--> */}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Breadcrumb
