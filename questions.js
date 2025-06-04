const questions = {
    "Computer Science": [
        {
            question: "What is the time complexity of a binary search?",
            options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
            answer: 1
        },
        {
            question: "Which protocol is used for secure web communication?",
            options: ["HTTP", "FTP", "HTTPS", "SMTP"],
            answer: 2
        },
        {
            question: "What does SQL stand for?",
            options: ["Structured Query Language", "Simple Question Language", "System Query Logic", "Sequential Query Layer"],
            answer: 0
        },
        {
            question: "Which data structure uses FIFO principle?",
            options: ["Stack", "Queue", "Tree", "Graph"],
            answer: 1
        },
        {
            question: "What is the main purpose of an operating system?",
            options: ["Manage hardware resources", "Create documents", "Browse internet", "Play games"],
            answer: 0
        },
        {
            question: "Which language is object-oriented?",
            options: ["C", "Java", "Assembly", "HTML"],
            answer: 1
        },
        {
            question: "What does API stand for?",
            options: ["Application Programming Interface", "Advanced Programming Instruction", "Automated Process Integration", "Application Protocol Internet"],
            answer: 0
        },
        {
            question: "Which is NOT a programming paradigm?",
            options: ["Object-oriented", "Functional", "Procedural", "Hexadecimal"],
            answer: 3
        },
        {
            question: "What is the binary equivalent of decimal 10?",
            options: ["1010", "1001", "1100", "1111"],
            answer: 0
        },
        {
            question: "Which is a NoSQL database?",
            options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
            answer: 1
        },
        {
            question: "What does CSS stand for?",
            options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Syntax"],
            answer: 1
        },
        {
            question: "Which is NOT a version control system?",
            options: ["Git", "SVN", "Mercurial", "Python"],
            answer: 3
        },
        {
            question: "What is the main purpose of DNS?",
            options: ["Translate domain names to IP addresses", "Secure connections", "Store websites", "Manage databases"],
            answer: 0
        },
        {
            question: "Which is a compiled language?",
            options: ["Python", "JavaScript", "C++", "PHP"],
            answer: 2
        },
        {
            question: "What does RAM stand for?",
            options: ["Random Access Memory", "Read-Only Memory", "Rapid Access Module", "Random Allocation Memory"],
            answer: 0
        }
    ],
    "Accounting": [
        {
            question: "What is the fundamental accounting equation?",
            options: ["Assets = Liabilities + Equity", "Profit = Revenue - Expenses", "Debits = Credits", "Cash Flow = Net Income + Depreciation"],
            answer: 0
        },
        {
            question: "Which financial statement shows profitability?",
            options: ["Balance Sheet", "Income Statement", "Cash Flow Statement", "Trial Balance"],
            answer: 1
        },
        {
            question: "What is FIFO in inventory valuation?",
            options: ["First-In First-Out", "Fixed Input Financial Output", "Financial Inventory Flow Order", "First Inventory First Order"],
            answer: 0
        },
        {
            question: "Which account has normal credit balance?",
            options: ["Assets", "Expenses", "Liabilities", "Dividends"],
            answer: 2
        },
        {
            question: "What is double-entry bookkeeping?",
            options: ["Every transaction affects two accounts", "Using two journals", "Two accountants review entries", "Two financial statements"],
            answer: 0
        },
        {
            question: "Which is a current asset?",
            options: ["Accounts Payable", "Inventory", "Long-term Loan", "Building"],
            answer: 1
        },
        {
            question: "What is GAAP?",
            options: ["General Accounting Assistance Program", "Generally Accepted Accounting Principles", "Government Approved Accounting Procedures", "Global Asset Allocation Policy"],
            answer: 1
        },
        {
            question: "What does ROI stand for?",
            options: ["Return on Investment", "Rate of Interest", "Risk of Inflation", "Revenue Operating Income"],
            answer: 0
        },
        {
            question: "Which ratio measures liquidity?",
            options: ["Debt-to-Equity", "Current Ratio", "Return on Equity", "Gross Margin"],
            answer: 1
        },
        {
            question: "What is an audit trail?",
            options: ["Path through financial statements", "Sequence of documentary evidence", "Tax filing procedure", "Bank reconciliation process"],
            answer: 1
        },
        {
            question: "Which is a liability account?",
            options: ["Accounts Receivable", "Prepaid Expenses", "Mortgage Payable", "Inventory"],
            answer: 2
        },
        {
            question: "What is depreciation?",
            options: ["Asset value increase", "Cost allocation over time", "Liability reduction", "Equity growth"],
            answer: 1
        },
        {
            question: "Which is an operating activity?",
            options: ["Issuing shares", "Buying equipment", "Cash from sales", "Taking loans"],
            answer: 2
        },
        {
            question: "What is break-even point?",
            options: ["Zero profit position", "Maximum profit level", "Tax exemption limit", "Inventory turnover rate"],
            answer: 0
        },
        {
            question: "Which is NOT a financial statement?",
            options: ["Balance Sheet", "Income Statement", "Trial Balance", "Cash Flow Statement"],
            answer: 2
        }
    ],
    "Nursing Science": [
        {
            question: "What is normal blood pressure range?",
            options: ["120/80 mmHg", "140/90 mmHg", "100/60 mmHg", "160/100 mmHg"],
            answer: 0
        },
        {
            question: "Which vitamin is crucial for blood clotting?",
            options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
            answer: 2
        },
        {
            question: "What is the first step in CPR?",
            options: ["Check responsiveness", "Start chest compressions", "Give rescue breaths", "Call for help"],
            answer: 0
        },
        {
            question: "Which is a sign of hypoxia?",
            options: ["Cyanosis", "Hypertension", "Bradycardia", "Hyperglycemia"],
            answer: 0
        },
        {
            question: "What is the normal heart rate for adults?",
            options: ["60-100 bpm", "100-120 bpm", "40-60 bpm", "120-140 bpm"],
            answer: 0
        },
        {
            question: "Which is NOT a vital sign?",
            options: ["Blood pressure", "Pain level", "Respiratory rate", "Height"],
            answer: 3
        },
        {
            question: "What does PPE stand for?",
            options: ["Personal Protective Equipment", "Patient Progress Evaluation", "Primary Physical Examination", "Professional Practice Environment"],
            answer: 0
        },
        {
            question: "Which injection is given intramuscularly?",
            options: ["Insulin", "Heparin", "Vaccines", "All of the above"],
            answer: 2
        },
        {
            question: "What is the primary role of hemoglobin?",
            options: ["Fight infection", "Carry oxygen", "Clot blood", "Digest food"],
            answer: 1
        },
        {
            question: "Which position prevents aspiration?",
            options: ["Supine", "Fowler's", "Trendelenburg", "Prone"],
            answer: 1
        },
        {
            question: "What is asepsis?",
            options: ["Absence of microbes", "Blood clotting", "Tissue inflammation", "Pain management"],
            answer: 0
        },
        {
            question: "Which is a cardiovascular drug?",
            options: ["Insulin", "Digoxin", "Paracetamol", "Omeprazole"],
            answer: 1
        },
        {
            question: "Normal body temperature range?",
            options: ["36.5-37.5°C", "35.0-36.0°C", "38.0-39.0°C", "34.0-35.0°C"],
            answer: 0
        },
        {
            question: "What does BMI measure?",
            options: ["Body fat percentage", "Height-weight ratio", "Muscle mass", "Bone density"],
            answer: 1
        },
        {
            question: "Which is a neurological assessment tool?",
            options: ["Glasgow Coma Scale", "Apgar Score", "Pain Scale", "Bristol Stool Chart"],
            answer: 0
        }
    ],
    "International Relations": [
        {
            question: "What is the main purpose of the UN?",
            options: ["Maintain international peace", "Global economic control", "Cultural assimilation", "Military dominance"],
            answer: 0
        },
        {
            question: "Which theory emphasizes state power?",
            options: ["Liberalism", "Realism", "Constructivism", "Marxism"],
            answer: 1
        },
        {
            question: "What is soft power?",
            options: ["Military strength", "Economic coercion", "Cultural influence", "Political threats"],
            answer: 2
        },
        {
            question: "Which is a non-state actor?",
            options: ["Microsoft", "UNICEF", "Amnesty International", "All of the above"],
            answer: 3
        },
        {
            question: "What is détente?",
            options: ["Arms race", "Easing of tensions", "Trade war", "Cultural exchange"],
            answer: 1
        },
        {
            question: "Which country is permanent UNSC member?",
            options: ["Japan", "India", "France", "Germany"],
            answer: 2
        },
        {
            question: "What is globalization?",
            options: ["Worldwide integration", "Cultural isolation", "Military expansion", "Economic protectionism"],
            answer: 0
        },
        {
            question: "Which is a human rights document?",
            options: ["Kyoto Protocol", "Universal Declaration of Human Rights", "WTO Agreement", "NATO Charter"],
            answer: 1
        },
        {
            question: "What is sovereignty?",
            options: ["Supreme authority", "Economic power", "Military strength", "Cultural dominance"],
            answer: 0
        },
        {
            question: "Which organization handles trade disputes?",
            options: ["IMF", "WTO", "WHO", "UNESCO"],
            answer: 1
        },
        {
            question: "What is multilateralism?",
            options: ["Single-state dominance", "Three-way alliances", "Multiple nation cooperation", "Bilateral agreements"],
            answer: 2
        },
        {
            question: "Which concept refers to statelessness?",
            options: ["Anarchy", "Sovereignty", "Cosmopolitanism", "Nationalism"],
            answer: 2
        },
        {
            question: "What is humanitarian intervention?",
            options: ["Economic sanctions", "Military aid for human rights", "Cultural exchange", "Diplomatic negotiations"],
            answer: 1
        },
        {
            question: "Which is a current global issue?",
            options: ["Climate change", "Local trade", "Urban planning", "Domestic politics"],
            answer: 0
        },
        {
            question: "What is public diplomacy?",
            options: ["Government propaganda", "International broadcasting", "Engaging foreign publics", "Secret negotiations"],
            answer: 2
        }
    ],
    "Public Administration": [
        {
            question: "What is bureaucracy?",
            options: ["Government red tape", "Efficient management system", "Administrative system", "Corrupt officials"],
            answer: 2
        },
        {
            question: "Which theory emphasizes hierarchy?",
            options: ["Scientific Management", "Human Relations", "Systems Theory", "Contingency Theory"],
            answer: 0
        },
        {
            question: "What is policy implementation?",
            options: ["Law making", "Putting policies into action", "Policy evaluation", "Budget allocation"],
            answer: 1
        },
        {
            question: "Which is a government function?",
            options: ["Profit maximization", "Public service delivery", "Market competition", "Product manufacturing"],
            answer: 1
        },
        {
            question: "What is decentralization?",
            options: ["Central government control", "Transfer of authority to locals", "Privatization", "Military governance"],
            answer: 1
        },
        {
            question: "Which is a public policy tool?",
            options: ["Regulation", "Market pricing", "Private contracts", "Corporate mergers"],
            answer: 0
        },
        {
            question: "What is governance?",
            options: ["Government control", "Decision-making process", "Military rule", "Economic policy"],
            answer: 1
        },
        {
            question: "Which is a leadership style?",
            options: ["Autocratic", "Democratic", "Laissez-faire", "All of the above"],
            answer: 3
        },
        {
            question: "What is SWOT analysis?",
            options: ["Strengths, Weaknesses, Opportunities, Threats", "Social Welfare Optimization Tool", "Systematic Workforce Organization Technique", "Strategic Weapons Oversight Team"],
            answer: 0
        },
        {
            question: "Which is a public service?",
            options: ["Private hospital", "Municipal waste management", "Retail banking", "Airline company"],
            answer: 1
        },
        {
            question: "What is ethics in public service?",
            options: ["Profit maximization", "Accountability and integrity", "Political loyalty", "Bureaucratic efficiency"],
            answer: 1
        },
        {
            question: "Which is a budgeting method?",
            options: ["Zero-based budgeting", "Market budgeting", "Corporate budgeting", "Private budgeting"],
            answer: 0
        },
        {
            question: "What is e-governance?",
            options: ["Electronic government services", "Economic governance", "Environmental governance", "Educational governance"],
            answer: 0
        },
        {
            question: "Which is a policy cycle stage?",
            options: ["Agenda setting", "Implementation", "Evaluation", "All of the above"],
            answer: 3
        },
        {
            question: "What is administrative law?",
            options: ["Law governing citizens", "Regulation of government agencies", "Corporate law", "International law"],
            answer: 1
        }
    ]
};