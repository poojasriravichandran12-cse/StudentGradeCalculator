function generateSubjectFields() {
    const numSubjects = document.getElementById('numSubjects').value;
    const subjectsContainer = document.getElementById('subjectsContainer');
    const gradeForm = document.getElementById('gradeForm');
    
    subjectsContainer.innerHTML = '';
    
    if (numSubjects <= 0 || isNaN(numSubjects)) {
        alert("Please enter a valid number of subjects");
        return;
    }

    for (let i = 1; i <= numSubjects; i++) {
        const div = document.createElement('div');
        div.classList.add('input-group');
        
        const label = document.createElement('label');
        label.textContent = `Subject ${i}):`;

        const input = document.createElement('input');
        input.type = 'number';
        input.id = `subject${i}`;
        input.name = `subject${i}`;
        input.required = true;

        div.appendChild(label);
        div.appendChild(input);
        subjectsContainer.appendChild(div);
    }

    gradeForm.classList.remove('hidden');
}

function calculateGrade() {
    const numSubjects = document.getElementById('numSubjects').value;
    let total = 0;
    let validInput = true;

    for (let i = 1; i <= numSubjects; i++) {
        const subjectGrade = parseFloat(document.getElementById(`subject${i}`).value);
        
        if (isNaN(subjectGrade)) {
            validInput = false;
            break;
        }
        
        total += subjectGrade;
    }

    const resultText = document.getElementById('resultText');
    
    if (validInput) {
        const average = total / numSubjects;
        resultText.textContent = `Average Grade: ${average.toFixed(2)}`;
    } else {
        alert("(Please enter valid numbers for all subjects)");
    }
}


