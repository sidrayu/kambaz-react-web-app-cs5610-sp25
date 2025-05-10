import { FaPlus } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
export default function AssignmentsControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assigment
      </Button>
      <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-view-progress">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </Button>
      <div style={{ display: 'flex', alignItems: 'center', width: '300px', border: '1px solid lightGRAY', borderRadius: '8px', padding: '9px', backgroundColor: 'white' }}>
      {/* Magnifying Glass Icon */}
      <BiSearch size={20} style={{ marginRight: '8px', color: '#6c757d' }} />

      {/* Search Input Field */}
      <input
        type="text"
        placeholder="Search..."
        style={{
          border: 'none',
          outline: 'none',
          fontSize: '18px',
          color: '#333',
          width: '100%', // Makes the input field stretch to fill available space
        }}
      />
    </div>
    </div>
  );
}

