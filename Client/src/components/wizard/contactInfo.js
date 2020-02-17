import React, {Component, Fragment} from 'react';
import useForm from 'react-hook-form';


class ContactInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            main_url: props.getStore().main_url,
            main_contact_phone: props.getStore().main_contact_phone,
            main_contact_email: props.getStore().main_contact_email
        }

        this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms

        this.validationCheck = this.validationCheck.bind(this);
        this.isValidated = this.isValidated.bind(this);
    }

    isValidated() {
        const userInput = this._grabUserInput(); // grab user entered vals
        const validateNewInput = this._validateData(userInput); // run the new input against the validator
        let isDataValid = false;
        // if full validation passes then save to store and pass as valid
        if (Object.keys(validateNewInput).every((k) => {
            return validateNewInput[k] === true
        })) {
            if (this.props.getStore().main_url !== userInput.main_url || this.props.getStore().main_contact_email !== userInput.main_contact_email || this.props.getStore().main_contact_phone !== userInput.main_contact_phone) { // only update store of something changed
                this.props.updateStore({
                    ...userInput,
                    savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
                });  // Update store here (this is just an example, in reality you will do it via redux or flux)
            }
            isDataValid = true;
        } else {
            // if anything fails then update the UI validation state but NOT the UI Data State
            this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
        }
        return isDataValid;
    }

    validationCheck() {
        if (!this._validateOnDemand)
            return;
        const userInput = this._grabUserInput(); // grab user entered vals
        const validateNewInput = this._validateData(userInput); // run the new input against the validator
        this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
    }

    _validateData(data) {
        return {
            urlVal: (data.main_url !== ""), // required: anything besides N/A
            phoneVal : (data.main_contact_phone !== ""), // required: anything besides N/A
            emailVal: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(data.main_contact_email), // required: regex w3c uses in html5
        }
    }

    _validationErrors(val) {
        const errMsgs = {
            main_urlValMsg: val.urlVal ? '' : 'URL is required',
            main_contact_phoneValMsg: val.phoneVal ? '' : 'A phone is required',
            main_contact_emailValMsg: val.emailVal ? '' : 'A Email is required'
        }
        return errMsgs;
    }

    _grabUserInput() {
        return {
            main_url: this.refs.main_url.value,
            main_contact_phone: this.refs.main_contact_phone.value,
            main_contact_email: this.refs.main_contact_email.value
        };
    }

    render() {

        // explicit class assigning based on validation
        let notValidClasses = {};


        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-12">

                        <div className="ml-auto mr-auto" style={{width: '90%'}}>
                            <p className="h4 txt-info mt-5 mb-5">
                                The following information will be used in your frames
                                gallery to let your patients and potentials patients know
                                how to contact you for an exam or anything else.
                            </p>

                            <form className="needs-validation">
                                <div className="form-row">
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="validationCustom01">Main Website URL</label>
                                        <div className={notValidClasses.main_urlCls}>
                                            <input
                                                ref="main_url"
                                                className="form-control"
                                                id="validationCustom01"
                                                name="main_url"
                                                type="text"
                                                required
                                                defaultValue={this.state.main_url}
                                                onBlur={this.validationCheck}
                                            />
                                            <div className={notValidClasses.main_urlValGrpCls}>
                                                <span className="txt-danger"> {this.state.main_urlValMsg} </span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="validationCustom02">Main Contact Phone</label>
                                        <div className={notValidClasses.main_contact_phoneCls}>
                                            <input
                                                ref="main_contact_phone"
                                                className="form-control"
                                                id="validationCustom02"
                                                name="main_contact_phone"
                                                type="text"
                                                required
                                                defaultValue={this.state.main_contact_phone}
                                                onBlur={this.validationCheck}
                                                />
                                            <div className={notValidClasses.main_contact_phoneValGrpCls}>
                                                <span className="txt-danger"> {this.state.main_contact_phoneValMsg} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="validationCustom02">Main Contact Email</label>
                                        <div className={notValidClasses.main_contact_emailCls}>
                                            <input
                                                ref="main_contact_email"
                                                className="form-control"
                                                id="validationCustom03"
                                                name="main_contact_email"
                                                type="email"
                                                required
                                                defaultValue={this.state.main_contact_email}
                                                onBlur={this.validationCheck}
                                            />
                                            <div className={notValidClasses.main_contact_emailValGrpCls}>
                                                <span className="txt-danger"> {this.state.main_contact_emailValMsg} </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }

}

export default ContactInfo