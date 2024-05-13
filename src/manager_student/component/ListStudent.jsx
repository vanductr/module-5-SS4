import React, { useState, useEffect } from "react";
import "../css/Style.css";

export default function ListStudent({
  isAddNewStudent,
  studentInfo,
  setStudentInfo,
  showForm,
  setShowForm,
  setIsAddNewStudent,
}) {
  const [onDeleteSuccess, SetOnDeleteSuccess] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const storedData = localStorage.getItem("userData");
    // Nếu đã có dữ liệu trong localStorage
    if (storedData) {
      // Chuyển đổi dữ liệu từ chuỗi JSON thành mảng
      const userData = JSON.parse(storedData);
      // Cập nhật state với dữ liệu từ localStorage
      setStudents(userData);
    }
  }, [isAddNewStudent, onDeleteSuccess]);

  // Hàm xác nhận xóa sinh viên
  const handleDeleteStudent = (studentID) => {
    const isConfirmed = window.confirm(
      "Bạn có chắc chắn muốn xóa sinh viên này?"
    );
    if (isConfirmed) {
      // Lấy dữ liệu từ localStorage
      const storedData = localStorage.getItem("userData");
      let userData = [];
      if (storedData) {
        userData = JSON.parse(storedData);
      }

      // Xác định index của sinh viên cần xóa trong mảng userData
      const index = userData.findIndex(
        (student) => student.studentID === studentID
      );

      // Nếu tìm thấy sinh viên cần xóa, thực hiện xóa và cập nhật localStorage
      if (index !== -1) {
        userData.splice(index, 1); // Xóa sinh viên khỏi mảng
        localStorage.setItem("userData", JSON.stringify(userData)); // Cập nhật dữ liệu trên localStorage
        // Cập nhật lại state hoặc render lại giao diện nếu cần thiết
        SetOnDeleteSuccess(!onDeleteSuccess);
      }
    }
  };

  // Hàm sửa thông tin sinh viên
  const handleUpdateStudent = (studentID) => {
    // Lấy dữ liệu từ localStorage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      // Chuyển đổi dữ liệu từ chuỗi JSON thành mảng
      const userData = JSON.parse(storedData);
      // Cập nhật state với dữ liệu từ localStorage
      setStudents(userData);
    }

    // Tìm sinh viên cần sửa trong danh sách sinh viên
    const studentToEdit = students.find(
      (student) => student.studentID === studentID
    );

    setStudentInfo(studentToEdit);
    setShowForm(true);
    setIsAddNewStudent(false);
  };

  return (
    <div className="card-body">
      <h3 className="card-title">Danh sách sinh viên</h3>
      <div className="table-responsive pt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Tuổi</th>
              <th>Giới tính</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {/* Duyệt qua mảng sinh viên để render từng sinh viên */}
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.studentID}</td>
                <td>{student.studentName}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
                <td>
                  <div className="template-demo">
                    <button
                      type="button"
                      className="btn btn-danger btn-icon-text"
                    >
                      Xem
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-icon-text"
                      onClick={() => handleUpdateStudent(student.studentID)} // Gọi hàm để sửa thông tin sinh viên
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-icon-text"
                      onClick={() => handleDeleteStudent(student.studentID)} // Gọi hàm xác nhận xóa sinh viên
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
