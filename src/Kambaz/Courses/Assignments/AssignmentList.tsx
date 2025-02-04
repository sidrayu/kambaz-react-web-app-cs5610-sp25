import React from 'react';
import { ListGroup } from 'react-bootstrap';

interface Assignment {
  title: string;
  modules: string;
  notAvailableUntil: string;
  dueDate: string;
  points: number;
}

const assignments: Assignment[] = [
  { title: 'A1', modules: 'Multiple Modules', notAvailableUntil: 'May 6 at 12:00am', dueDate: 'May 13 at 11:59pm', points: 100 },
  { title: 'A2', modules: 'Multiple Modules', notAvailableUntil: 'May 13 at 12:00am', dueDate: 'May 20 at 11:59pm', points: 100 },
  { title: 'A3', modules: 'Multiple Modules', notAvailableUntil: 'May 20 at 12:00am', dueDate: 'May 27 at 11:59pm', points: 100 },
];

const AssignmentList: React.FC = () => {
  return (
    <ListGroup className="assignment-list">
      {assignments.map((assignment, index) => (
        <ListGroup.Item key={index} className="assignment-item d-flex align-items-start">
          <div className="assignment-content">
            <h5 className="assignment-title">{assignment.title}</h5>
            <p className="assignment-details">
              <span className="modules">{assignment.modules}</span> | 
              <span className="not-available"> Not available until {assignment.notAvailableUntil}</span> |
              <span className="due"> Due {assignment.dueDate}</span> |
              <span className="points">{assignment.points} pts</span>
            </p>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default AssignmentList;
