// doctor.js
// E-CARE / My Healthcare Companion
// Doctor-specific interactions and theme switching

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

    // Patient list actions
    const viewBtns = document.querySelectorAll('.viewBtn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Viewing patient details (Demo only)');
        });
    });
    const consultBtns = document.querySelectorAll('.consultBtn');
    consultBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Consulting patient (Demo only)');
        });
    });

    // Consultation reply actions
    const replyBtns = document.querySelectorAll('.replyBtn');
    const replySection = document.getElementById('replySection');
    if (replyBtns && replySection) {
        replyBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                replySection.style.display = 'block';
            });
        });
        const replyForm = document.getElementById('replyForm');
        if (replyForm) {
            replyForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Reply sent! (Demo only)');
                replySection.style.display = 'none';
            });
        }
    }

    // Prescription actions
    const prescriptionViewBtns = document.querySelectorAll('.prescription-list .viewBtn');
    prescriptionViewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Viewing prescription details (Demo only)');
        });
    });
    const createPrescriptionForm = document.getElementById('createPrescriptionForm');
    if (createPrescriptionForm) {
        createPrescriptionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Prescription created! (Demo only)');
        });
    }

    // Dashboard/profile actions (download, print, share, upload)
    const downloadReportBtn = document.getElementById('downloadReportBtn');
    if (downloadReportBtn) {
        downloadReportBtn.addEventListener('click', function() {
            const summary = document.querySelector('.summary ul').innerText;
            const blob = new Blob([summary], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'doctor_report.txt';
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
                    text: 'Check out my doctor dashboard!',
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
    // Profile actions
    const downloadProfileBtn = document.getElementById('downloadProfileBtn');
    if (downloadProfileBtn) {
        downloadProfileBtn.addEventListener('click', function() {
            const summary = document.getElementById('profileSummary').innerText;
            const blob = new Blob([summary], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'doctor_profile.txt';
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
                    text: 'Check out my doctor profile!',
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
});
