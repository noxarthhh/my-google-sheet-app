// *************************************************
// login.js
// *************************************************

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // ป้องกันการส่งฟอร์มตามปกติ

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // *** 1. ตรวจสอบชื่อผู้ใช้และรหัสผ่าน (ใช้ค่า Dummy สำหรับการทดสอบ) ***
    // ในระบบจริง คุณจะต้องส่งข้อมูลนี้ไปตรวจสอบกับ Server
    if (username === 'admin' && password === '12345') {
        
        // 2. บันทึกสถานะการล็อกอิน
        // ใช้ Local Storage เพื่อจำว่าผู้ใช้ล็อกอินแล้ว
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', username); // อาจบันทึกข้อมูลผู้ใช้อื่นๆ

        // 3. เปลี่ยนเส้นทางไปยังหน้าแรกของระบบ (index.html)
        window.location.href = 'index.html';

    } else {
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        // อาจแสดงข้อความผิดพลาดใน HTML แทน alert
    }
});