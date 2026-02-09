// main.js
// E-CARE / My Healthcare Companion
// General system logic for main frontend pages

// Utility: Get user role from localStorage/sessionStorage (demo)
function getUserRole() {
    return localStorage.getItem('role') || sessionStorage.getItem('role') || '';
}

// Redirect user to their dashboard based on role
function redirectToDashboard() {
    const role = getUserRole();
    if (role === 'patient') {
        window.location.href = '/FRONTEND/patient.html';
    } else if (role === 'doctor') {
        window.location.href = '/FRONTEND/doctor.html';
    } else if (role === 'admin') {
        window.location.href = '/FRONTEND/admin.html';
    }
}

// Example: Set role after login/register (demo only)
function setUserRole(role) {
    localStorage.setItem('role', role);
}

// Navigation highlight
function highlightNav() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (window.location.pathname.endsWith(link.getAttribute('href'))) {
            link.style.fontWeight = 'bold';
            link.style.color = '#2d3a4a';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    highlightNav();
    // Optionally auto-redirect if already logged in
    // redirectToDashboard();
});

// Example: General system logic for appointments, records, messaging
// These would be replaced with real API calls in production
function bookAppointment(patientId, doctorId, date) {
    // Simulate booking
    console.log(`Appointment booked for patient ${patientId} with doctor ${doctorId} on ${date}`);
}

function sendMessage(senderId, receiverId, message) {
    // Simulate messaging
    console.log(`Message from ${senderId} to ${receiverId}: ${message}`);
}

function uploadMedicalRecord(patientId, recordData) {
    // Simulate upload
    console.log(`Medical record uploaded for patient ${patientId}:`, recordData);
}

// Example usage (demo only)
// setUserRole('patient');
// bookAppointment('p123', 'd456', '2026-02-10');
// sendMessage('p123', 'd456', 'Hello Doctor!');
// uploadMedicalRecord('p123', { diagnosis: 'Diabetes', date: '2026-02-09' });
