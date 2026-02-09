// patient.js
// E-CARE / My Healthcare Companion
// Patient-specific interactions and theme switching

// Theme toggle logic
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}

// Restore theme on page load
function restoreTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    setTheme(theme);
}

document.addEventListener('DOMContentLoaded', function() {
    restoreTheme();
    const lightBtn = document.getElementById('lightThemeBtn');
    const darkBtn = document.getElementById('darkThemeBtn');
    if (lightBtn) {
        lightBtn.addEventListener('click', function() {
            setTheme('light');
        });
    }
    if (darkBtn) {
        darkBtn.addEventListener('click', function() {
            setTheme('dark');
        });
    }
});

// Demo: Form handlers for patient pages
const bookAppointmentForm = document.getElementById('bookAppointmentForm');
if (bookAppointmentForm) {
    bookAppointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Appointment booked! (Demo only)');
    });
}

const consultForm = document.getElementById('consultForm');
if (consultForm) {
    consultForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent! (Demo only)');
    });
}

const uploadRecordForm = document.getElementById('uploadRecordForm');
if (uploadRecordForm) {
    uploadRecordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Record uploaded! (Demo only)');
    });
}

const addMedicationForm = document.getElementById('addMedicationForm');
if (addMedicationForm) {
    addMedicationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Medication added! (Demo only)');
    });
}

const notificationSettingsForm = document.getElementById('notificationSettingsForm');
if (notificationSettingsForm) {
    notificationSettingsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Settings saved! (Demo only)');
    });
}

// Enhanced: Profile form handler
const profileForm = document.getElementById('profileForm');
if (profileForm) {
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Collect profile data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const chronic = document.getElementById('chronic').value;
        // Demo: Show updated info
        alert(`Profile updated!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nChronic Illness: ${chronic}`);
        // Optionally update summary section
        const summary = document.querySelector('.profile-summary ul');
        if (summary) {
            summary.innerHTML = `
                <li>Name: ${name}</li>
                <li>Email: ${email}</li>
                <li>Phone: ${phone}</li>
                <li>Chronic Illness: ${chronic || 'None'}</li>
            `;
        }
    });
}

// Enhanced: Dashboard actions
const downloadReportBtn = document.getElementById('downloadReportBtn');
if (downloadReportBtn) {
    downloadReportBtn.addEventListener('click', function() {
        const summary = document.getElementById('dashboardSummary').innerText;
        const blob = new Blob([summary], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'patient_report.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}
const printBtn = document.getElementById('printBtn');
if (printBtn) {
    printBtn.addEventListener('click', function() {
        window.print();
    });
}
const shareBtn = document.getElementById('shareBtn');
if (shareBtn) {
    shareBtn.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                text: 'Check out my healthcare dashboard!',
                url: window.location.href
            });
        } else {
            alert('Sharing not supported on this browser.');
        }
    });
}
const uploadDocsForm = document.getElementById('uploadDocsForm');
if (uploadDocsForm) {
    uploadDocsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const files = document.getElementById('uploadDocs').files;
        if (files.length > 0) {
            alert('Documents uploaded! (Demo only)');
        } else {
            alert('Please select files to upload.');
        }
    });
}

// Enhanced: Profile actions
const downloadProfileBtn = document.getElementById('downloadProfileBtn');
if (downloadProfileBtn) {
    downloadProfileBtn.addEventListener('click', function() {
        const summary = document.getElementById('profileSummary').innerText;
        const blob = new Blob([summary], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'patient_profile.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}
const printProfileBtn = document.getElementById('printProfileBtn');
if (printProfileBtn) {
    printProfileBtn.addEventListener('click', function() {
        window.print();
    });
}
const shareProfileBtn = document.getElementById('shareProfileBtn');
if (shareProfileBtn) {
    shareProfileBtn.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                text: 'Check out my healthcare profile!',
                url: window.location.href
            });
        } else {
            alert('Sharing not supported on this browser.');
        }
    });
}
const uploadProfileDocsForm = document.getElementById('uploadProfileDocsForm');
if (uploadProfileDocsForm) {
    uploadProfileDocsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const files = document.getElementById('uploadProfileDocs').files;
        if (files.length > 0) {
            alert('Documents uploaded! (Demo only)');
        } else {
            alert('Please select files to upload.');
        }
    });
}
