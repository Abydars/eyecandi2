import React, {Component, Fragment} from 'react';
import Breadcrumb from '../common/breadcrumb';
import StepZilla from "react-stepzilla";
import ContactInfo from './contactInfo';
import AddBrands from './addBrands';
import PublicGallery from './publicGallery';
import Registration from './registration';
import Email from './email';
import Birthdate from './birthdate';


class FormWizard extends Component {

    constructor(props){
        super(props);

        this.state = {};

        this.sampleStore = {
            main_url: '',
            main_contact_phone: '',
            main_contact_email: '',
            all_brands:'',
            public_gallery_url:'',
            profile_pic_file:'',
            savedToCloud: false
        }

    }

    componentDidMount() {}

    componentWillUnmount() {}

    getStore() {
        return this.sampleStore;
    }

    updateStore(update) {
        this.sampleStore = {
            ...this.sampleStore,
            ...update,
        }
    }

    render() {

        const steps = [
            {name: 'Step 1', component: <ContactInfo getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}}   />},
            {name: 'Step 2', component: <AddBrands getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
            {name: 'Step 3', component: <PublicGallery getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
        ];

        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">

                            <StepZilla
                                steps={steps}
                                showSteps={true}
                                showNavigation={true}
                                stepsNavigation={false}
                                prevBtnOnLastStep={true}
                                backButtonText="Back"
                                // hocValidationAppliedTo={[0,1]}
                                preventEnterSubmission={true}
                                backButtonCls="ml-4 btn btn-prev btn-primary btn-lg pull-left"
                                nextButtonCls="mr-4 btn btn-prev btn-primary btn-lg pull-right"
                                startAtStep={window.sessionStorage.getItem('step') ? parseFloat(window.sessionStorage.getItem('step')) : 0}
                                onStepChange={(step) => window.sessionStorage.setItem('step', step)}
                            />

                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </Fragment>
        );

    }
};

export default FormWizard;