import { Card, Badge } from "react-bootstrap";
import UserForm from "./UserForm"

function Front(props) {
  return (
    <Card className="front text-center">
      <Card.Header>Sign Up</Card.Header>
      <Card.Body>
        <Card.Title>Fill in your Details</Card.Title>
        <Card.Text>
          <UserForm type={"signup"} />
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <div>Already Have an Account?</div>
        <Badge variant="primary" onClick={props.onFlipCard}>Sign In</Badge>
      </Card.Footer>
    </Card>
  );
}

export default Front;
