import ModulesControls from './ModulesControls';
import { ListGroup, Container, FormControl } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs';
import ModuleControlButtons from './ModuleControlButtons';
import LessonControlButtons from './LessonControlButtons';
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useUserRole } from "../../hooks/useUserRole";
import * as coursesClient from "../client";

export default function Modules() {
  const { isFaculty } = useUserRole();
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);
  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  return (
    <Container>
      <div>
        <ModulesControls 
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={createModuleForCourse}
          //addModule={() => {
            //dispatch(addModule({ name: moduleName, course: cid }));
            //setModuleName("");
          //}}
          isFaculty={isFaculty}
        />
        <br /><br /><br /><br />
        <ListGroup className="rounded-0" id="wd-modules">
          {modules
            //.filter((module: any) => module.course === cid)
            .map((module: any) => (
              <ListGroup.Item key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical className="me-2 fs-3" />
                  {!module.editing && module.name}
                  {module.editing && (
                    <FormControl
                      className="w-50 d-inline-block"
                      onChange={(e) =>
                        dispatch(
                          updateModule({ ...module, name: e.target.value })
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(updateModule({ ...module, editing: false }));
                        }
                      }}
                      defaultValue={module.name}
                    />
                  )}
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                    isFaculty={isFaculty}
                  />
                </div>
                {module.lessons && (
                  <ListGroup className="wd-lessons rounded-0">
                    {module.lessons.map((lesson: any) => (
                      <ListGroup.Item key={lesson._id} className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </Container>
  );
}
