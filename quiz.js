let currentQuestion = 0;
let timeLeft = 900;
let timerInterval;
let userAnswers = [];
let studentData = null;
const { jsPDF } = window.jspdf;

// Initialize Quiz
function startQuiz() {
    studentData = {
        name: document.getElementById('name').value.trim(),
        matric: document.getElementById('matric').value.trim(),
        department: document.getElementById('department').value,
        level: document.getElementById('level').value
    };

    if (!validateInputs()) return;

    document.getElementById('bio-data').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('department-header').textContent = 
        `${studentData.department} Quiz - Level ${studentData.level}`;

    initializeQuiz();
    startTimer();
    showQuestion(currentQuestion);
}

function validateInputs() {
    if (!Object.values(studentData).every(field => field)) {
        alert('Please fill all fields');
        return false;
    }
    if (!questions[studentData.department]) {
        alert('Invalid department selection');
        return false;
    }
    return true;
}

function initializeQuiz() {
    userAnswers = new Array(questions[studentData.department].length).fill(null);
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) submitQuiz();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function showQuestion(index) {
    const questionset = questions[studentData.department];
    const question = questionset[index];
    
    document.getElementById('question-number').textContent = 
        `Question ${index + 1} of ${questionset.length}`;
    document.getElementById('question-text').textContent = question.question;
    
    renderOptions(question.options, index);
    updateNavigation(index, questionset.length);
}

function renderOptions(options, qIndex) {
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    options.forEach((option, oIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <input type="radio" name="q${qIndex}" id="opt-${qIndex}-${oIndex}"
                   ${userAnswers[qIndex] === oIndex ? 'checked' : ''}>
            <label for="opt-${qIndex}-${oIndex}">${option}</label>
        `;
        optionDiv.querySelector('input').addEventListener('change', () => {
            userAnswers[qIndex] = oIndex;
        });
        container.appendChild(optionDiv);
    });
}

function updateNavigation(currentIndex, totalQuestions) {
    document.getElementById('prev-btn').disabled = currentIndex === 0;
    document.getElementById('next-btn').style.display = 
        currentIndex === totalQuestions - 1 ? 'none' : 'block';
    document.getElementById('submit-btn').style.display = 
        currentIndex === totalQuestions - 1 ? 'block' : 'none';
}

function previousQuestion() {
    if (currentQuestion > 0) showQuestion(--currentQuestion);
}

function nextQuestion() {
    const total = questions[studentData.department].length;
    if (currentQuestion < total - 1) showQuestion(++currentQuestion);
}

async function submitQuiz() {
    clearInterval(timerInterval);
    
    try {
        const score = calculateScore();
        await generateCertificate(score);
    } catch (error) {
        console.error('Submission Error:', error);
        alert('Error generating certificate. Please try again.');
    } finally {
        setTimeout(() => window.location.reload(), 3000);
    }
}

function calculateScore() {
    return questions[studentData.department].reduce((acc, q, index) => 
        acc + (userAnswers[index] === q.answer ? 1 : 0), 0);
}

async function generateCertificate(score) {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    let yPos = 20;

    try {
        const img = await loadImage('college-logo.png');
        const imgWidth = 40;
        const imgHeight = 40;
        doc.addImage(img, 'PNG', (pageWidth - imgWidth)/2, yPos, imgWidth, imgHeight);
        yPos += imgHeight + 20;
    } catch {
        yPos += 10;
    }

    // Certificate Content
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("TOWER COLLEGE QUIZ CERTIFICATE", pageWidth/2, yPos, { align: 'center' });
    yPos += 25;

    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    const details = [
        `Student Name: ${studentData.name}`,
        `Matric Number: ${studentData.matric}`,
        `Department: ${studentData.department}`,
        `Academic Level: ${studentData.level}`,
        `Score: ${score}/${questions[studentData.department].length}`,
        `Date: ${new Date().toLocaleDateString()}`
    ];
    
    details.forEach(text => {
        doc.text(text, pageWidth/2, yPos, { align: 'center' });
        yPos += 10;
    });
    
    yPos += 15;
    doc.setFontSize(14);
    doc.setTextColor(60, 60, 60);
    const message = [
        "This certificate is proudly presented to recognize",
        "your academic achievement and dedication to learning.",
        "Your success demonstrates commitment to excellence",
        "and we celebrate your intellectual growth.",
        "Keep striving for greater heights!",
        "~ Tower College Academic Board ~"
    ];
    
    message.forEach(line => {
        doc.text(line, pageWidth/2, yPos, { align: 'center' });
        yPos += 8;
    });

    doc.save(`certificate-${studentData.matric}.pdf`);
}

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}