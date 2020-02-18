import React, { useState , Fragment, Component} from 'react';
import axios from 'axios';
import useForm from 'react-hook-form'
// import Redirect from 'react-hook-form'

import logo from '../../assets/images/eyeCandi/logo-ss.png';


const Signup = (props) => {

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [practiceName, setpracticeName] = useState('');
    const [state, setstate] = useState('');
    const [oa_Member, setoa_Member] = useState('');
    const [oa_MemberCode, setoa_MemberCode] = useState('');
    const [oa_MemberState, setoa_MemberState] = useState(false);
    const [promoCode, setpromoCode] = useState('');

    const { register, handleSubmit, errors, redirect } = useForm(); // initialise the hook

    const stateRedirect = {redirect:null};

    const handleOnChangeFirstName = (e) => {
       setfirstName(e.target.value);
    };

    const handleOnChangeLastName = (e) => {
       setlastName(e.target.value);
    };

    const handleOnChangePracticeName = (e) => {
       setpracticeName(e.target.value);
    };

    const handleOnChangeState = (e) => {
       setstate(e.target.value);
    };

    const handleOnChangeOAmember = (e) => {
        setoa_Member(e.target.value);
        handleOAmember_selectCondition(e.target.value)
    };


    function handleOAmember_selectCondition(param){
        if (param === 'yes') {
            console.log("--YES");
            operation(true)
        } else if (param === 'no') {
            console.log("--NO");
            operation(false)
        } else {
            console.log("--Select");
            operation(false)
        }
    }

    function operation(param){
        setoa_MemberState(param);
    }

    const handleOnChangeOAmember_Code = (e) =>{
        setoa_MemberCode(e.target.value);
    };

    const handleOnChangePromoCode = (e) => {
        setpromoCode(e.target.value);
    };

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         first_name: '',
    //         last_name: '',
    //         practice_name: '',
    //         state: '',
    //         oa_member: '',
    //         oa_member_code: '',
    //         oa_member_state: false,
    //         promo_code: '',
    //         error: false,
    //         register: false
    //     }
    // }

    // handleOnChangeFirstName = (e) => {
    //     this.setState({
    //         first_name: e.target.value,
    //     });
    // };

    // handleOnChangeLastName = (e) => {
    //     this.setState({
    //         last_name: e.target.value,
    //     });
    // };

    // handleOnChangePracticeName = (e) => {
    //     this.setState({
    //         practice_name: e.target.value,
    //     });
    // };

    // handleOnChangeState = (e) => {
    //     this.setState({
    //         state: e.target.value,
    //     });
    // };

    // handleOnChangeOAmember = (e) => {
    //     this.setState({oa_member: e.target.value},
    //         () => console.log("Value Change:", this.state.oa_member),
    //         this.handleOAmember_selectCondition(e.target.value)
    //     );
    // };

    // handleOAmember_selectCondition(param) {
    //     if (param === 'yes') {
    //         console.log("--YES");
    //         this.operation(true)
    //     } else if (param === 'no') {
    //         console.log("--NO");
    //         this.operation(false)
    //     } else {
    //         console.log("--Select");
    //         this.operation(false)
    //     }
    // }

    // operation(param){
    //     this.setState({
    //         oa_member_state: param
    //     });
    // }

    // handleOnChangeOAmember_Code = (e) => {
    //     this.setState({
    //         oa_member_code: e.target.value,
    //     });
    // };

    // handleOnChangePromoCode = (e) => {
    //     this.setState({
    //         promo_code: e.target.value,
    //     });
    // };

    //  onSubmit = e => {
    //
    //     // e.preventDefault();
    //     // const data = {
    //     //     first_name: this.state.first_name,
    //     //     last_name : this.state.last_name,
    //     //     practice_name: this.state.practice_name,
    //     //     state : this.state.state,
    //     //     oa_member: this.state.oa_member,
    //     //     promo_code : this.state.promo_code
    //     // }
    //     // console.log(data);
    //
    //     // axios.post('http://localhost:4000/users/register', data)
    //     //     .then(response => {
    //     //         // console.log(response.data._id)
    //     //         // reactLocalStorage.set('id', <response className="data _id"></response>);
    //     //         this.setState({
    //     //             first_name: '',
    //     //             last_name: '',
    //     //             practice_name: '',
    //     //             state: '',
    //     //             oa_member: '',
    //     //             promo_code: '',
    //     //         });
    //     //         console.log("inserted");
    //     //         //this.props.history.push('/website');
    //     //     })
    //     //     .catch(error => {
    //     //         console.log(error);
    //     //     });
    //
    // }

    const onSubmit = data => {
        if (data !== '') {
            console.log(data);
            props.history.push('/Setup-Wizard');
        } else {
            errors.showMessages();
        }
    };


    // render() {

        return (
            <Fragment>
                <div className="page-wrapper">
                    <div className="container-fluid">
                        {/* <!-- sign up page start--> */}
                        <div className="authentication-main">
                            <div className="row">
                                <div className="col-sm-12 p-0">
                                    <div className="auth-innerright">
                                        <div className="authentication-box">
                                            <div className="text-center"><img src={logo} alt=""/></div>
                                            <div className="card mt-4 p-4">
                                                <h4 className="text-center text-capitalize txt-danger f-w-700">Register</h4>
                                                <form className="theme-form needs-validation" noValidate="" onSubmit={handleSubmit(onSubmit)}>

                                                    <div className="form-row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label className="col-form-label">First Name</label>
                                                                <input className="form-control" type="text"
                                                                       name="first_name"
                                                                       onChange={handleOnChangeFirstName}
                                                                       value={firstName}
                                                                       ref={register({ required: true })}
                                                                />
                                                                <span>{errors.first_name && 'First name is required'}</span>
                                                                <div className="valid-feedback">Looks good!</div>

                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label className="col-form-label">Last Name</label>
                                                                <input className="form-control" type="text"
                                                                       name="last_name"
                                                                       onChange={handleOnChangeLastName}
                                                                       value={lastName}
                                                                       ref={register({ required: true })}
                                                                />
                                                                <span>{errors.last_name && 'Last name is required'}</span>
                                                                <div className="valid-feedback">Looks good!</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label className="col-form-label">Practice Name</label>
                                                                <input className="form-control" type="text"
                                                                       name="practice_name"
                                                                       onChange={handleOnChangePracticeName}
                                                                       value={practiceName}
                                                                       ref={register({ required: true })}
                                                                />
                                                                <span>{errors.practice_name && 'Practice name is required'}</span>
                                                                <div className="valid-feedback">Looks good!</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label className="col-form-label">State</label>
                                                                <input className="form-control" type="text"
                                                                       name="state"
                                                                       onChange={handleOnChangeState}
                                                                       value={state}
                                                                       ref={register({ required: true })}
                                                                />
                                                                <span>{errors.state && 'State is required'}</span>
                                                                <div className="valid-feedback">Looks good!</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label className="col-form-label">OA Member?</label>
                                                                <select name="oa_member"
                                                                        id="oa_member"
                                                                        className="form-control"
                                                                        onChange={handleOnChangeOAmember}
                                                                        value={oa_Member}
                                                                >
                                                                    <option value="select">Select</option>
                                                                    <option value="yes">Yes</option>
                                                                    <option value="no">No</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        {
                                                           oa_MemberState   ?
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <label className="col-form-label">OA Member
                                                                        Code</label>
                                                                    <input className="form-control" type="text"
                                                                           name="oa_member_code"
                                                                           value={oa_MemberCode}
                                                                           onChange={handleOnChangeOAmember_Code}
                                                                           ref={register({ required: true })}
                                                                    />
                                                                </div>
                                                                <span style={{color:'#ff5370'}}>{errors.oa_member_code && 'Code is required'}</span>
                                                                <div className="valid-feedback">Looks good!</div>
                                                            </div>
                                                            : null
                                                        }

                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label className="col-form-label">Promo Code</label>
                                                                <input className="form-control" type="text"
                                                                       name="promo_code"
                                                                       onChange={handleOnChangePromoCode}
                                                                       value={promoCode}
                                                                       ref={register({ required: false })}
                                                                />
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="form-row">
                                                        <div className="col-md-12">
                                                            <button className="btn btn-primary btn-block" type="submit">Get Started
                                                            </button>

                                                            {/*<button className="btn btn-primary btn-block custom-btn-color" type="submit">Get Started*/}
                                                            {/*</button>*/}

                                                            {/*<a href="/Setup-Wizard" className="btn btn-primary btn-block">Get Started</a>*/}

                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="text-center mt-4 m-l-20 ">Are have an account?&nbsp;
                                                                <a className="btn-link text-capitalize custom-anchor-no-color"
                                                                         href="/login">Login</a></div>
                                                        </div>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- sign up page ends--> */}
                    </div>
                </div>
            </Fragment>
        );
    // }

};

export default Signup

