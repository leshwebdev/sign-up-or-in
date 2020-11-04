import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import ErrMsg from './ErrMsg';
import validate from './validate';
import Banner from "./Banner";

function UserForm(props) {
  const [state, setState] = useState({
    field: {
      username: {value:'', required: true, errors: []},
      fullName: {value:'', required: true, errors: []},
      email: {value:'', required: true, errors: []},
      password: {value:'', required: true, errors: []},
      passwordVerify: {value:'', required: true, errors: []},
      rememberMe: {value: false, required: false},
    },
    bannerIsShown: false,
    msg: ""
  });

  const onInputChange = (e) => {
    const errors = validate(e.target, state) ;
    setState({...state, field : {
      ...state.field, [e.target.name] : {
        ...state.field[e.target.name], value : e.target.value, errors
        }
      }
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(state.field).every((k) => state.field[k].errors.length === 0)) {
      setState((state) => ({ ...state, msg : `Thanks for signing up, ${state.field.fullName.value.split(' ').shift()}`, bannerIsShown: true }));
      console.log(state) 
    } else { 
      setState((state) => ({ ...state, msg: 'Some of the fields have issues.', bannerIsShown: true }));
    }
  };
  
  const bannerHide = () => setState((state) => ({ ...state, bannerIsShown : false }));
  const bannerShow = () => setState((state) => ({ ...state, bannerIsShown : true }));

    return (
      <div>
        <Form className="form" onSubmit={onSubmit}>
          <Form.Row>
            <Col>
              <Form.Control className="mb-2" type="text" placeholder="Enter Username" name="username" id="usernameSU" onBlur={onInputChange} />
              {state.field.username.errors.length > 0 && <ErrMsg errors={state.field.username.errors} />}
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Control className="mb-2" type="text" placeholder="Enter Your Full Name" name="fullName" id="fullName" onBlur={onInputChange} />
              {state.field.fullName.errors.length > 0 && <ErrMsg errors={state.field.fullName.errors} />}
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Control className="mb-2" type="text" placeholder="Enter Email" name="email" id="email" onBlur={onInputChange} />
              {state.field.email.errors.length > 0 && <ErrMsg errors={state.field.email.errors} />}
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Control className="mb-2" type="password" placeholder="Enter Password" name="password" id="passwordSU" onBlur={onInputChange} />
              {state.field.password.errors.length > 0 && <ErrMsg errors={state.field.password.errors} />}
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Control className="mb-2" type="password" placeholder="Re-enter Password" name="passwordVerify" id="passwordVerify" onBlur={onInputChange} />
              {state.field.passwordVerify.errors.length > 0 && <ErrMsg errors={state.field.passwordVerify.errors} />}
            </Col>
          </Form.Row>
          <Form.Row className="mb-2 align-items-end">
            <Col md={{ span: 8, offset: 1 }}>
              <div className="txt green mb-2">Remember me?</div>
            </Col>
            <Col md={{ span: 3 }}>
              <Form.Control type="checkbox" className="check-box" name="rememberMe" id="rememberMe" onBlur={onInputChange} />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Button block type="submit">
                Sign Up
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <Banner isBannerShown={state.bannerIsShown} onShowBanner={bannerShow} onHideBanner={bannerHide} txt={state.msg} />
      </div>
    )
}

export default UserForm;
