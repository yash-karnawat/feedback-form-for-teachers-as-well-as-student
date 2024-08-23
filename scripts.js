document.getElementById('studentFeedbackButton').addEventListener('click', function() {
    document.getElementById('student-feedback').style.display = 'block';
    document.getElementById('teacher-feedback').style.display = 'none';
    this.classList.add('active');
    document.getElementById('teacherFeedbackButton').classList.remove('active');
});

document.getElementById('teacherFeedbackButton').addEventListener('click', function() {
    document.getElementById('student-feedback').style.display = 'none';
    document.getElementById('teacher-feedback').style.display = 'block';
    this.classList.add('active');
    document.getElementById('studentFeedbackButton').classList.remove('active');
});

function isValidName(name) {
    return /^[a-zA-Z\s]+$/.test(name);
}

function isValidNumber(number) {
    return /^[0-9]+$/.test(number);
}

document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('studentName').value.trim();
    const prnNo = document.getElementById('prnNo').value.trim();
    const rollNo = document.getElementById('rollNo').value.trim();
    const panel = document.getElementById('panel').value.trim();
    const courseName = document.getElementById('courseName').value.trim();
    const teacherName = document.getElementById('teacherName').value.trim();
    const studentAttendance = parseInt(document.getElementById('studentAttendance').value.trim(), 10);
    const courseFeedback = document.querySelector('input[name="courseFeedback"]:checked').value;
    const teacherFeedback = document.querySelector('input[name="teacherFeedback"]:checked').value;

    if (!isValidName(studentName)) {
        alert('Student Name should only contain letters.');
        return;
    }

    if (!isValidName(courseName)) {
        alert('Course Name should only contain letters.');
        return;
    }

    if (!isValidName(teacherName)) {
        alert('Teacher Name should only contain letters.');
        return;
    }

    if (!isValidNumber(prnNo)) {
        alert('PRN No. should only contain numbers.');
        return;
    }

    if (!isValidNumber(rollNo)) {
        alert('Roll No. should only contain numbers.');
        return;
    }

    if (studentAttendance < 80) {
        alert('You are not eligible to provide feedback. Attendance must be above 80%.');
        return;
    }

    alert(`Feedback submitted:\nStudent Name: ${studentName}\nPRN No.: ${prnNo}\nRoll No.: ${rollNo}\nPanel: ${panel}\nCourse Name: ${courseName}\nTeacher Name: ${teacherName}\nCourse Feedback: ${courseFeedback}\nTeacher Feedback: ${teacherFeedback}`);
    document.getElementById('studentForm').reset();
});

document.getElementById('teacherForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const teacherName = document.getElementById('teacherName').value.trim();
    const studentNameTeacher = document.getElementById('studentNameTeacher').value.trim();
    const rollNoTeacher = document.getElementById('rollNoTeacher').value.trim();
    const panelTeacher = document.getElementById('panelTeacher').value.trim();
    const prnNoTeacher = document.getElementById('prnNoTeacher').value.trim();
    const studentFeedbackTeacher = document.getElementById('studentFeedbackTeacher').value.trim();

    // if (!isValidName(teacherName)) {
    //     alert('Teacher Name should only contain letters.');
    //     return;
    // }

    if (!isValidName(studentNameTeacher)) {
        alert('Student Name should only contain letters.');
        return;
    }

    if (!isValidNumber(prnNoTeacher)) {
        alert('PRN No. should only contain numbers.');
        return;
    }

    if (!isValidNumber(rollNoTeacher)) {
        alert('Roll No. should only contain numbers.');
        return;
    }

    alert(`Feedback submitted:\nTeacher Name: ${teacherName}\nStudent Name: ${studentNameTeacher}\nRoll No.: ${rollNoTeacher}\nPanel: ${panelTeacher}\nPRN No.: ${prnNoTeacher}\nStudent Feedback: ${studentFeedbackTeacher}`);
    document.getElementById('teacherForm').reset();
});
