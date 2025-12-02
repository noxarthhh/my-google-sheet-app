// *************************************************
// dashboard.js
// *************************************************

document.addEventListener('DOMContentLoaded', function() {
    
    // *** 1. จำลองข้อมูล (ในระบบจริงต้อง Fetch จาก API) ***
    const trainingData = {
        labels: ['อบรมภายใน', 'อบรมภายนอก', 'E-Learning', 'Workshop'],
        data: [150, 90, 60, 100], // จำนวนครั้งที่จัด
        colors: ['#007bff', '#28a745', '#ffc107', '#1abc9c']
    };
    
    const topAffiliationData = {
        labels: ['ส่วนกลาง', 'ร.ร. X', 'ร.ร. Y', 'ร.ร. Z', 'ร.ร. W'],
        data: [1500, 1200, 950, 700, 650], // ชั่วโมงรวม
        colors: ['#004d7a', '#007bff', '#28a745', '#ffc107', '#1abc9c']
    };
    
    // *** 2. สร้าง Chart: Training Type (Doughnut Chart) ***
    const ctx1 = document.getElementById('trainingTypeChart').getContext('2d');
    new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: trainingData.labels,
            datasets: [{
                label: 'จำนวนกิจกรรม',
                data: trainingData.data,
                backgroundColor: trainingData.colors,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: false }
            }
        }
    });

    // *** 3. สร้าง Chart: Top Affiliation (Bar Chart) ***
    const ctx2 = document.getElementById('topAffiliationChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: topAffiliationData.labels,
            datasets: [{
                label: 'ชั่วโมงอบรมรวม',
                data: topAffiliationData.data,
                backgroundColor: topAffiliationData.colors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
    
    // ** 4. โหลดข้อมูล KPI และตาราง (ในระบบจริง) **
    // fetchKPIs();
    // fetchRecentActivities();
});