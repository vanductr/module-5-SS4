// ================== Thực hành 1: Xử lý Form Với React Hook ============================================================
// import './App.css';
// import OrderForm from './component/form_handling_withFunction/OrderForm';

// function App() {
//   return (
//     <div className="App">
//       <OrderForm/>
//     </div>
//   );
// }

// export default App;


// =============================== Giáo trình của Thầy Quý ==================================================

//  ================== 1. Tạo một ứng dụng đếm số lần Click ==================================
// import React from 'react'
// import Count from './component/giao_trinh_cua_thay_quy/Count'

// export default function App() {
//   return (
//     <div>
//       <Count/>
//     </div>
//   )
// }

// ==================== 2. Tạo một ứng dụng đếm số ký tự trong một đoạn văn bản ==================
// import React from 'react'
// import CounText from './component/giao_trinh_cua_thay_quy/CounText'

// export default function App() {
//   return (
//     <div>
//       <CounText/>
//     </div>
//   )
// }

// ==================== 3. Ứng dụng đếm thời gian ===================================================
// import React from 'react'
// import CountTime from './component/giao_trinh_cua_thay_quy/CountTime'

// export default function App() {
//   return (
//     <div>
//       <CountTime/>
//     </div>
//   )
// }

// ==================== 4. Active khi chuyển Tab ===================================================
// import React from 'react'
// import Navbar from './component/giao_trinh_cua_thay_quy/Navbar'

// export default function App() {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   )
// }

// ==================== 5. Xây dựng ứng dụng quản lý Sinh viên =======================================
import React, { useState } from 'react'
import "./manager_student/css/Style.css"
import Form from './manager_student/component/Form'
import Card from './manager_student/component/Card'

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [isAddNewStudent, setIsAddNewStudent] = useState(true);

  // State để lưu trữ thông tin sinh viên
  const [studentInfo, setStudentInfo] = useState({
    studentID: "",
    studentName: "",
    age: "",
    gender: "Nam",
    dateOfBirth: "",
    placeOfBirth: "",
    address: "",
  });

  const handleAddStudentClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="row">
      <Card showForm={showForm} setShowForm={setShowForm} handleAddStudentClick = {handleAddStudentClick} isAddNewStudent={isAddNewStudent} setIsAddNewStudent={setIsAddNewStudent} studentInfo={studentInfo} setStudentInfo={setStudentInfo}/>
      {showForm && <Form showForm={showForm} setShowForm={setShowForm} isAddNewStudent={isAddNewStudent} setIsAddNewStudent={setIsAddNewStudent} studentInfo={studentInfo} setStudentInfo={setStudentInfo}/>}
    </div>
  )
}
