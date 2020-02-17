import React , {Component} from 'react';
import logo from '../../assets/images/endless-logo.png'


export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: false,
            loginSuccess: false,
        };
    }

    handleOnChangeEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    };

    handleOnChangePassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    };


    onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            user_name: this.state.user_name,
            password: this.state.password,
        };
        this.props.history.push('/');

        //console.log(data);
        // const loginResult = await LoginService(data);
        // if (loginResult !== 200) {
        //     this.setState({
        //         error: true,
        //         loginSuccess: false,
        //     });
        // } else
        //     this.setState({
        //         loginSuccess: true,
        //         error: false,
        //     });
    };


    render() {
        return (
            <div>
                <div className="page-wrapper">
                    <div className="container-fluid p-0">
                        {/* <!-- login page start--> */}
                        <div className="authentication-main">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="auth-innerright">
                                        <div className="authentication-box">
                                            <div className="text-center"><img src={logo} alt="" /></div>
                                            <div className="card mt-4">
                                                <div className="card-body">
                                                    <div className="text-center">
                                                        <h4 className="custom-heading-color text-capitalize">LOGIN</h4>
                                                    </div>
                                                    <form className="theme-form" onSubmit={this.onSubmit}>
                                                        <div className="form-group">
                                                            <label className="col-form-label pt-0">Email</label>
                                                            <input className="form-control" type="text" name="email" required="" value={this.state.email} onChange={this.handleOnChangeEmail} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-form-label">Password</label>
                                                            <input className="form-control" type="password" name="password" required=""  value={this.state.password} onChange={this.handleOnChangePassword } />
                                                        </div>
                                                        <div className="checkbox p-0">
                                                            <input id="checkbox1" type="checkbox" />
                                                            <label htmlFor="checkbox1">Remember me</label>
                                                        </div>
                                                        <div className="form-group form-row mt-3 mb-0">
                                                            {/*<a href="/signup" className="custom-anchor-no-color">Signup</a>*/}
                                                            <button className="btn btn-primary btn-block custom-btn-color" type="submit">Login</button>
                                                        </div>

                                                        <div className="form-group mt-3 mb-0">
                                                            <div className="text-center">
                                                                Need an account? <a href="/signup" className="custom-anchor-no-color">Signup</a>
                                                            </div>
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- login page end--> */}
                    </div>
                </div>
            </div>
        );
    }

}
