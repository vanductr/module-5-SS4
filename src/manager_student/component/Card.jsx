import React from "react";
import "../css/Style.css";
import Control from "./Control";
import ListStudent from "./ListStudent";

export default function Card({
  handleAddStudentClick,
  isAddNewStudent,
  studentInfo,
  setStudentInfo,
  showForm,
  setShowForm,
  setIsAddNewStudent,
}) {
  return (
    <div className="card">
      <Control handleAddStudentClick={handleAddStudentClick} />
      <ListStudent
        isAddNewStudent={isAddNewStudent}
        setIsAddNewStudent={setIsAddNewStudent}
        studentInfo={studentInfo}
        setStudentInfo={setStudentInfo}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    </div>
  );
}
