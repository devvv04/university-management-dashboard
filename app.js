document.addEventListener("DOMContentLoaded", () => {
    const sideMenu = document.querySelector("aside");
    const profileBtn = document.querySelector("#profile-btn");
    const themeToggler = document.querySelector(".theme-toggler");
    const nextDay = document.getElementById('nextDay');
    const prevDay = document.getElementById('prevDay');

    profileBtn.onclick = function() {
        sideMenu.classList.toggle('active');
    }
    window.onscroll = () => {
        sideMenu.classList.remove('active');
        if (window.scrollY > 0) {
            document.querySelector('header').classList.add('active');
        } else {
            document.querySelector('header').classList.remove('active');
        }
    }

    themeToggler.onclick = function() {
        document.body.classList.toggle('dark-theme');
        themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
        themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
    }

    const sem_1 = [
        { courseid: 'CS101', coursename: 'Computer Science I', credits: 3, grade: 'A' },
        { courseid: 'MATH101', coursename: 'Calculus I', credits: 4, grade: 'B+' },
        { courseid: 'PHYS101', coursename: 'Physics I', credits: 3, grade: 'B' },
        { courseid: 'ENG101', coursename: 'English I', credits: 2, grade: 'A-' },
        { courseid: 'HIST101', coursename: 'History I', credits: 2, grade: 'B+' }
    ];
    const sem_2 = [
        { courseid: 'CS102', coursename: 'Computer Science II', credits: 3, grade: 'A' },
        { courseid: 'MATH102', coursename: 'Calculus II', credits: 4, grade: 'A-' },
        { courseid: 'PHYS102', coursename: 'Physics II', credits: 3, grade: 'B+' },
        { courseid: 'ENG102', coursename: 'English II', credits: 2, grade: 'B' },
        { courseid: 'HIST102', coursename: 'History II', credits: 2, grade: 'A' }
    ];
    const sem_3 = [
        { courseid: 'CS201', coursename: 'Data Structures', credits: 3, grade: 'A-' },
        { courseid: 'MATH201', coursename: 'Linear Algebra', credits: 4, grade: 'B+' },
        { courseid: 'PHYS201', coursename: 'Modern Physics', credits: 3, grade: 'B' },
        { courseid: 'ENG201', coursename: 'Technical Writing', credits: 2, grade: 'A' },
        { courseid: 'HIST201', coursename: 'World History', credits: 2, grade: 'B+' }
    ];
    const sem_4 = [
        { courseid: 'CS202', coursename: 'Algorithms', credits: 3, grade: 'A' },
        { courseid: 'MATH202', coursename: 'Probability and Statistics', credits: 4, grade: 'A-' },
        { courseid: 'PHYS202', coursename: 'Thermodynamics', credits: 3, grade: 'B+' },
        { courseid: 'ENG202', coursename: 'Creative Writing', credits: 2, grade: 'B' },
        { courseid: 'HIST202', coursename: 'Ancient Civilizations', credits: 2, grade: 'A' }
    ];
    const sem_5 = [
        { courseid: 'CS301', coursename: 'Operating Systems', credits: 3, grade: 'A-' },
        { courseid: 'MATH301', coursename: 'Discrete Mathematics', credits: 4, grade: 'B+' },
        { courseid: 'PHYS301', coursename: 'Electromagnetism', credits: 3, grade: 'B' },
        { courseid: 'ENG301', coursename: 'Business Communication', credits: 2, grade: 'A' },
        { courseid: 'HIST301', coursename: 'Medieval History', credits: 2, grade: 'B+' }
    ];
    const sem_6 = [
        { courseid: 'CS302', coursename: 'Computer Networks', credits: 3, grade: 'A' },
        { courseid: 'MATH302', coursename: 'Numerical Methods', credits: 4, grade: 'A-' },
        { courseid: 'PHYS302', coursename: 'Quantum Mechanics', credits: 3, grade: 'B+' },
        { courseid: 'ENG302', coursename: 'Professional Writing', credits: 2, grade: 'B' },
        { courseid: 'HIST302', coursename: 'Modern History', credits: 2, grade: 'A' }
    ];

    let setData = (day) => {
        document.querySelector('table tbody').innerHTML = ''; // To clear out previous table data
        let daylist = ["6th Semester", "5th Semester", "4th Semester", "3rd Semester", "2nd Semester", "1st Semester"];
        document.querySelector('.timetable div h2').innerHTML = daylist[day];
        
        let semesterData;
        switch (day) {
            case 0: semesterData = sem_6; break;
            case 1: semesterData = sem_5; break;
            case 2: semesterData = sem_4; break;
            case 3: semesterData = sem_3; break;
            case 4: semesterData = sem_2; break;
            case 5: semesterData = sem_1; break;
        }

        semesterData.forEach(sub => {
            const tr = document.createElement('tr');
            const trContent = `
                <td>${sub.courseid}</td>
                <td>${sub.coursename}</td>
                <td>${sub.credits}</td>
                <td>${sub.grade}</td>
            `;
            tr.innerHTML = trContent;
            document.querySelector('table tbody').appendChild(tr);
        });
    }

    let now = new Date();
    let today = now.getDay(); // Will return the present day in numerical value
    let day = today % 6; // To prevent the today value from changing and map it to available semesters

    function timeTableAll() {
        document.getElementById('timetable').classList.toggle('active');
        setData(today);
        document.querySelector('.timetable div h2').innerHTML = "This Semester's Grades";
    }

    nextDay.onclick = function() {
        day <= 4 ? day++ : day = 0;  // If else one liner
        setData(day);
    }

    prevDay.onclick = function() {
        day >= 1 ? day-- : day = 5;
        setData(day);
    }

    setData(day); // To set the data in the table on loading window
    document.querySelector('.timetable div h2').innerHTML = "This Semester's Grades"; // To prevent overwriting the heading on loading
});
