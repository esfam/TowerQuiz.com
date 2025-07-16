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
async function generateCertificate(score) {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const totalQuestions = questions[studentData.department].length;
    let yPos = 20;

    // Performance remark based on score
    const getPerformanceRemark = () => {
        const percentage = (score / totalQuestions) * 100;
        
        if (percentage >= 90) return "Excellent!";
        if (percentage >= 75) return "Very Good!";
        if (percentage >= 60) return "Good!";
        if (percentage >= 40) return "Fair";
        return "Needs Improvement";
    };

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
        `Score: ${score}/${totalQuestions}`,
        `Performance: ${getPerformanceRemark()}`,
        `Date: ${new Date().toLocaleDateString()}`
    ];
    
    details.forEach(text => {
        doc.text(text, pageWidth/2, yPos, { align: 'center' });
        yPos += 10;
    });
    
    yPos += 15;
    
    // Add visual performance indicator
    doc.setDrawColor(200, 200, 200);
    doc.setFillColor(240, 240, 240);
    doc.rect(30, yPos, pageWidth - 60, 15, 'F');
    
    const progressWidth = (pageWidth - 60) * (score / totalQuestions);
    doc.setFillColor(
        score === totalQuestions ? 46, 204, 113 : // Green for perfect
        score >= totalQuestions * 0.75 ? 52, 152, 219 : // Blue for very good
        score >= totalQuestions * 0.6 ? 241, 196, 15 : // Yellow for good
        score >= totalQuestions * 0.4 ? 243, 156, 18 : // Orange for fair
        231, 76, 60 // Red for poor
    );
    doc.rect(30, yPos, progressWidth, 15, 'F');
    yPos += 25;
    
    // Heartfelt message based on performance
    doc.setFontSize(14);
    doc.setTextColor(60, 60, 60);
    
    let message;
    if (score === totalQuestions) {
        message = [
            "Exceptional performance! You've demonstrated complete mastery",
            "of the subject matter. Your perfect score is a testament to",
            "your dedication and hard work. Keep setting the bar high!",
            "~ Tower College Academic Board ~"
        ];
    } else if (score >= totalQuestions * 0.75) {
        message = [
            "Outstanding achievement! You've shown excellent understanding",
            "of the core concepts. Your performance demonstrates strong",
            "knowledge and analytical skills. Continue striving for excellence!",
            "~ Tower College Academic Board ~"
        ];
    } else if (score >= totalQuestions * 0.6) {
        message = [
            "Good performance! You have a solid grasp of the material",
            "with room to grow. Your results show good understanding of",
            "key concepts. Keep building on this foundation!",
            "~ Tower College Academic Board ~"
        ];
    } else if (score >= totalQuestions * 0.4) {
        message = [
            "Fair performance. You've demonstrated basic understanding",
            "but should focus on strengthening your knowledge. Review the",
            "material and don't hesitate to seek help from instructors.",
            "~ Tower College Academic Board ~"
        ];
    } else {
        message = [
            "Your results indicate you need to strengthen your understanding.",
            "This is an opportunity to identify areas for improvement.",
            "Meet with your instructors for guidance and dedicate more",
            "time to studying. You can improve!",
            "~ Tower College Academic Board ~"
        ];
    }
    
    message.forEach(line => {
        doc.text(line, pageWidth/2, yPos, { align: 'center' });
        yPos += 8;
    });

    doc.save(`certificate-${studentData.matric}.pdf`);
        }
