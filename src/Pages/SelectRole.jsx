// SelectRole.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from '../context/RoleContext';

const SelectRole = () => {
  const { setRole } = useRole(); // Get the setRole function from context
  const navigate = useNavigate();

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole); // Set the selected role in context
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Select Your Role</h2>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div
            className="card p-3 text-center"
            onClick={() => handleRoleSelection('Student')}
            style={{ cursor: 'pointer' }}
          >
            <h3>Student</h3>
            <p>Access resources, guidance, and more tailored to students.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card p-3 text-center"
            onClick={() => handleRoleSelection('Counsellor')}
            style={{ cursor: 'pointer' }}
          >
            <h3>Counsellor</h3>
            <p>Provide guidance, manage sessions, and connect with students.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectRole;
