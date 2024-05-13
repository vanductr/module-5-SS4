import React, { useState } from "react";
import "../css/Style.css";

export default function Control({ handleAddStudentClick, students }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Lấy dữ liệu từ localStorage
  const storedData = localStorage.getItem("userData");

  // Chuyển đổi dữ liệu từ chuỗi JSON thành mảng
  const userData = JSON.parse(storedData);

  //   const filteredStudents = students.filter((student) =>
  //     student.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   console.log(filteredStudents);

  return (
    <div className="card-header">
      <div className="row">
        <div className="col-3">
          <button
            type="button"
            className="btn btn-primary btn-icon-text"
            onClick={handleAddStudentClick}
          >
            Thêm mới sinh viên
          </button>
        </div>
        <div className="col-6">
          <form className="search-form" action="#">
            <i className="icon-search" />
            <input
              type="search"
              className="form-control"
              placeholder="Search Here"
              title="Search here"
              value={searchTerm}
              onChange={handleChange}
            />
            <button className="btn btn-primary btn-icon-text">Tìm kiếm</button>
          </form>
        </div>
        <div className="col-3 d-flex align-items-center">
          <select className="form-control">
            <option value="">Sắp xếp</option>
            <option value="">ABC def</option>
            <option value="">ABC def</option>
            <option value="">ABC def</option>
          </select>
        </div>
      </div>
    </div>
  );
}
