import React, { useState } from "react";
import { Card, Button, Badge, Form, Col } from "react-bootstrap";
import ErrMsg from './ErrMsg';
import Banner from "./Banner";

function Back(props) {
  const [state, setState] = useState({
    field: {
      username: {value:'', required: true, errors: []},
      password: {value:'', required: true, errors: []}
    },
    bannerIsShown: false,
    msg: ""
  });

  const onInputChange = (e) => {
    setState({...state, field : {
      ...state.field, [e.target.name] : {
        ...state.field[e.target.name], value : e.target.value
        }
      }
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
      setState((state) => ({ ...state, msg: `Sorry, can't authenticate.`, bannerIsShown: true }));
    }
  
  const bannerHide = () => setState((state) => ({ ...state, bannerIsShown : false }));
  const bannerShow = () => setState((state) => ({ ...state, bannerIsShown : true }));

  return (
    <div>
      <Card className="back text-center">
        <Card.Header>Sign In</Card.Header>
        <Card.Body>
          <Card.Title>Enter Your Credentials</Card.Title>
          <Card.Text>
          <Form className="form" onSubmit={onSubmit}>
            <Form.Row>
              <Col>
                <Form.Control className="mb-2" type="text" placeholder="Enter Username" name="username" id="usernameSI" onBlur={onInputChange} />
                {state.field.username.errors.length > 0 && <ErrMsg errors={state.field.username.errors} />}
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Control className="mb-2" type="password" placeholder="Enter Password" name="password" id="passwordSI" onBlur={onInputChange} />
                {state.field.username.errors.length > 0 && <ErrMsg errors={state.field.password.errors} />}
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Button className="btn-sign-in" block type="submit">
                  Sign In
                </Button>
              </Col>
            </Form.Row>
          </Form>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div>Don't Have an Account?</div>
          <Badge className="btn-sign-in" variant="primary" onClick={props.onFlipCard}>Sign Up</Badge>
        </Card.Footer>
      </Card>
      <Banner isBannerShown={state.bannerIsShown} onShowBanner={bannerShow} onHideBanner={bannerHide} txt={state.msg} />
    </div>
  );
}

export default Back;
