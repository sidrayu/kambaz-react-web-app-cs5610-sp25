import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1235/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/angular.jpg" width={200} />
                        <div>
                            <h5> CS1235 Angular </h5>
                            <p className="wd-dashboard-course-title">
                                Frontend software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1236/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/TypeScript.jpg" width={200} />
                        <div>
                            <h5> CS1236 TypeScript </h5>
                            <p className="wd-dashboard-course-title">
                                Strongly typed JavaScript for large-scale projects  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1237/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/NodeJS.jpg" width={200} />
                        <div>
                            <h5> CS1237 NodeJS </h5>
                            <p className="wd-dashboard-course-title">
                                Server-side JavaScript  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1238/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/ExpressJS.jpg" width={200} />
                        <div>
                            <h5> CS1238 ExpressJS </h5>
                            <p className="wd-dashboard-course-title">
                                NodeJS web application framework  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1239/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/MongoDB.jpg" width={200} />
                        <div>
                            <h5> CS1239 MongoDB </h5>
                            <p className="wd-dashboard-course-title">
                                NoSQL database  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1240/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/SQL.jpg" width={200} />
                        <div>
                            <h5> CS1240 SQL </h5>
                            <p className="wd-dashboard-course-title">
                                Structured Query Language  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1241/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/Python.jpg" width={200} />
                        <div>
                            <h5> CS1241 Python </h5>
                            <p className="wd-dashboard-course-title">
                                Programming language  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
