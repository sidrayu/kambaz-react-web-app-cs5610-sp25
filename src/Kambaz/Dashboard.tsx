import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>

                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1235/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/angular.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1235 Angular</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Frontend software developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>

                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1236/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/TypeScript.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1236 TypeScript</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Strongly typed JavaScript for large-scale projects</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>

                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1237/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/NodeJS.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1237 NodeJS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Server-side JavaScript</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>

                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1238/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/ExpressJS.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1238 ExpressJS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">NodeJS web application framework</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>

                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1239/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/MongoDB.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1239 MongoDB</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">NoSQL database</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>

                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1240/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/SQL.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1240 SQL</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Structured Query Language</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>

                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1241/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/Python.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1241 Python</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Programming language</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>

                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
