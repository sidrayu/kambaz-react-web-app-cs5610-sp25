import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import store from "./store";
import { Provider } from "react-redux";


export default function Labs() {
  return (
    <Provider store={store}>
    <div>
      <h2>Chang Yu</h2>
      <h3>Section 01</h3>
      <a href="https://github.com/sidrayu/kambaz-react-web-app-cs5610-sp25/tree/a1">GitHub For Lab 1</a>
      <br />
      <a href="https://github.com/sidrayu/kambaz-react-web-app-cs5610-sp25/tree/a2">GitHub For Lab 2</a>
      <br />
      <a href="https://github.com/sidrayu/kambaz-react-web-app-cs5610-sp25/tree/a3">GitHub For Lab 3</a>
      <br />
      <a href="https://github.com/sidrayu/kambaz-react-web-app-cs5610-sp25/tree/a4">GitHub For Lab 4</a>
      <br />
      
      <br />
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4/*" element={<Lab4 />} />
      </Routes>
    </div>
    </Provider>
  );
}