import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <Container className="mt-4" style={{ maxWidth: "350px" }}>
      <h3 className="mb-4">Profile</h3>
      <Form>
        {/* Username */}
        <Form.Group className="mb-3" controlId="wd-username">
          <Form.Control type="text" defaultValue="alice" placeholder="Username" />
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3" controlId="wd-password">
          <Form.Control type="password" defaultValue="123" placeholder="Password" />
        </Form.Group>

        {/* First Name */}
        <Form.Group className="mb-3" controlId="wd-firstname">
          <Form.Control type="text" defaultValue="Alice" placeholder="First Name" />
        </Form.Group>

        {/* Last Name */}
        <Form.Group className="mb-3" controlId="wd-lastname">
          <Form.Control type="text" defaultValue="Wonderland" placeholder="Last Name" />
        </Form.Group>

        {/* Date of Birth */}
        <Form.Group className="mb-3" controlId="wd-dob">
          <Form.Control type="date" defaultValue="2000-01-01" />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3" controlId="wd-email">
          <Form.Control type="email" defaultValue="alice@wonderland.com" placeholder="Email" />
        </Form.Group>

        {/* Role Selection */}
        <Form.Group className="mb-3" controlId="wd-role">
          <Form.Control as="select" defaultValue="USER">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Control>
        </Form.Group>

        {/* Sign Out Button */}
        <Link to="/Kambaz/Account/Signin">
          <Button
            variant="danger"
            className="w-100">
            Signout
          </Button>
        </Link>
      </Form>
    </Container>
  );
}
