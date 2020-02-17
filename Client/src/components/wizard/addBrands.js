import React, { Component , Fragment } from 'react';
import TypeaheadOne from '../base/typeaheadComponent/typeahead-one';

class AddBrands extends Component{

    // constructor(props){
    //     super(props);
    //     this.state = {};
    // }
    //
    // componentDidMount() {}
    // componentWillUnmount() {}

    render() {
        return(

            <Fragment>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="ml-auto mr-auto" style={{width:'90%'}}>
                            <p className="h4 txt-info mt-5 mb-5">
                                Cras mattis consectetur purus sit amet fermentum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Praesent commodo curus magna.
                            </p>

                            <div className="form-row">
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="validationCustom04">Brands</label>
                                    <TypeaheadOne />
                                </div>
                            </div>

                            {/*<form className="needs-validation">*/}
                            {/*   */}
                            {/*</form>*/}
                        </div>
                    </div>
                </div>
            </Fragment>

        );
    }

}

export default AddBrands