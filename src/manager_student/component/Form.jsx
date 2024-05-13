import React from "react";

export default function Form({
  isAddNewStudent,
  setIsAddNewStudent,
  studentInfo,
  setStudentInfo,
  showForm,
  setShowForm,
}) {
  // Hàm xử lý khi người dùng nhập liệu vào các input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo({ ...studentInfo, [name]: value });
  };

  // Hàm xử lý khi người dùng gửi thông tin sinh viên
  const handleSubmit = (e) => {
    e.preventDefault();

    // Lấy dữ liệu từ localStorage
    const storedData = localStorage.getItem("userData");

    let userData = [];

    // Nếu đã có dữ liệu trong localStorage
    if (storedData) {
      // Chuyển đổi dữ liệu từ chuỗi JSON thành mảng
      userData = JSON.parse(storedData);
    }

    // Kiểm tra xem có đang trong quá trình chỉnh sửa hay không
    if (isAddNewStudent) {
      // Thêm mới sinh viên
      userData.push(studentInfo);
    } else {
      // Tìm và cập nhật thông tin sinh viên cũ
      const updatedData = userData.map((student) =>
        student.studentID === studentInfo.studentID ? studentInfo : student
      );
      userData = updatedData;
    }

    // Lưu mảng userData vào localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    setIsAddNewStudent(!isAddNewStudent);

    // Reset form sau khi gửi thành công
    setStudentInfo({
      studentID: "",
      studentName: "",
      age: "",
      gender: "Nam",
      dateOfBirth: "",
      placeOfBirth: "",
      address: "",
    });

    setShowForm(false);
  };

  return (
    <div className="col-5 grid-margin">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample" onSubmit={handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="studentID"
                  value={studentInfo.studentID}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="studentName"
                  value={studentInfo.studentName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  value={studentInfo.age}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="gender"
                  value={studentInfo.gender}
                  onChange={handleChange}
                >
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="dateOfBirth"
                  value={studentInfo.dateOfBirth}
                  onChange={handleChange}
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="placeOfBirth"
                  value={studentInfo.placeOfBirth}
                  onChange={handleChange}
                >
                  <option>Hà Nội</option>
                  <option>TP. Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                  <option>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  name="address"
                  value={studentInfo.address}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">
              {isAddNewStudent ? "Thêm mới" : "Cập nhật"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
