// *************************************************
// forgot-password.js
// *************************************************

document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault(); // ป้องกันการส่งฟอร์มตามปกติ

    const input = document.getElementById('emailOrUsername').value;

    // 1. ตรวจสอบความถูกต้องเบื้องต้น (Client-side validation)
    if (input.trim() === '') {
        alert('กรุณากรอกชื่อผู้ใช้หรืออีเมล');
        return;
    }

    // *** 2. จำลองการส่งคำขอไปยัง Server ***
    // ในระบบจริง: ใช้ fetch() หรือ XMLHttpRequest ส่งข้อมูลไปที่ Server
    
    console.log('Sending reset request for:', input);

    // 3. แสดงข้อความแจ้งเตือนความสำเร็จ (Success message)
    alert(`ระบบได้ส่งลิงก์สำหรับตั้งรหัสผ่านใหม่ไปยัง ${input} แล้ว กรุณาตรวจสอบอีเมลของคุณ`);

    // 4. (ทางเลือก) เปลี่ยนหน้ากลับไปที่ Login หลังจากส่งสำเร็จ
    window.location.href = 'login.html';
});