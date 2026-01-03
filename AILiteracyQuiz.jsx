import React, { useState } from 'react';

const AILiteracyQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState('');
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "Your AI assistant confidently cites a 2023 study that doesn't exist. This is called:",
      options: [
        "Model drift",
        "Hallucination",
        "Shadow AI",
        "Fine-tuning"
      ],
      correct: 1,
      explanation: "Hallucination is when AI confidently generates false information that sounds real."
    },
    {
      id: 2,
      question: "You paste a 50-page confidential contract into ChatGPT to summarize it. What's the primary governance risk?",
      options: [
        "The summary might be inaccurate",
        "It costs too many tokens",
        "Your data has left your secure systems",
        "The AI can't handle that many pages"
      ],
      correct: 2,
      explanation: "The primary governance risk is that your confidential data has been sent to external servers."
    },
    {
      id: 3,
      question: "A black-box model is problematic in hiring because:",
      options: [
        "It can't explain why it rejected a candidate",
        "It's too slow",
        "It costs too much",
        "It only works with certain file types"
      ],
      correct: 0,
      explanation: "Black-box models can't explain their decisions, creating legal and governance problems in high-stakes situations."
    },
    {
      id: 4,
      question: "The EU AI Act classifies AI used in hiring as:",
      options: [
        "Prohibited",
        "Limited-risk",
        "Minimal-risk",
        "High-risk"
      ],
      correct: 3,
      explanation: "Hiring AI is explicitly classified as high-risk under the EU AI Act, requiring strict compliance."
    },
    {
      id: 5,
      question: "RAG (Retrieval Augmented Generation) helps reduce:",
      options: [
        "Costs",
        "Token usage",
        "Hallucinations",
        "Training time"
      ],
      correct: 2,
      explanation: "RAG grounds AI responses in real documents, significantly reducing false outputs and hallucinations."
    },
    {
      id: 6,
      question: "Your team is using ChatGPT without IT approval. This is called:",
      options: [
        "Prompt engineering",
        "Vibe coding",
        "Chain of thought",
        "Shadow AI"
      ],
      correct: 3,
      explanation: "Shadow AI refers to unauthorized AI tool usage within an organization."
    },
    {
      id: 7,
      question: "MCP (Model Context Protocol) is best compared to:",
      options: [
        "HTTPS for AI",
        "A database",
        "A programming language",
        "An AI model"
      ],
      correct: 0,
      explanation: "MCP is a standardized protocol that secures how AI interacts with systems, like HTTPS secures web traffic."
    },
    {
      id: 8,
      question: "What does GPT stand for?",
      options: [
        "General Purpose Technology",
        "Global Processing Tool",
        "Guided Prompt Template",
        "Generative Pre-trained Transformer"
      ],
      correct: 3,
      explanation: "GPT stands for Generative Pre-trained Transformer."
    },
    {
      id: 9,
      question: "Agentic AI differs from regular AI because it:",
      options: [
        "Is cheaper",
        "Can take actions autonomously",
        "Never makes mistakes",
        "Only works with text"
      ],
      correct: 1,
      explanation: "Agentic AI can independently plan and take actions without waiting for human instructions."
    },
    {
      id: 10,
      question: "In AI governance, 'red lines' refer to:",
      options: [
        "Error messages",
        "Deleted content",
        "Non-negotiable boundaries",
        "Training data limits"
      ],
      correct: 2,
      explanation: "Red lines are non-negotiable ethical, legal, or operational limits for AI use."
    },
    {
      id: 11,
      question: "Embeddings are:",
      options: [
        "Numerical representations of text meaning",
        "AI-generated images",
        "Error logs",
        "Video outputs"
      ],
      correct: 0,
      explanation: "Embeddings are vectors (lists of numbers) that capture semantic meaning of text."
    },
    {
      id: 12,
      question: "Human-in-the-loop (HITL) means:",
      options: [
        "AI trains itself",
        "Humans write all the code",
        "AI replaces human workers",
        "Humans review AI decisions before they're finalized"
      ],
      correct: 3,
      explanation: "HITL is a governance safeguard where humans review and approve AI decisions."
    },
    {
      id: 13,
      question: "A foundation model is:",
      options: [
        "The first version of any AI",
        "Only used for image generation",
        "A large base model that powers multiple applications",
        "Cheaper than specialized models"
      ],
      correct: 2,
      explanation: "Foundation models are large base models (like GPT-4, Claude) that power multiple applications."
    },
    {
      id: 14,
      question: "Model drift occurs when:",
      options: [
        "An AI model's performance degrades as real-world data changes",
        "Your API connection fails",
        "You use the wrong prompt",
        "The model costs increase"
      ],
      correct: 0,
      explanation: "Model drift is when AI performance degrades because real-world data has changed from training data."
    },
    {
      id: 15,
      question: "ISO 42001 is a standard for:",
      options: [
        "Image quality",
        "Data encryption",
        "AI management systems",
        "Programming languages"
      ],
      correct: 2,
      explanation: "ISO 42001 is an international standard for AI management systems and governance."
    }
  ];

  const getTier = (score) => {
    if (score === 15) {
      return {
        title: "AI Governance Expert",
        description: "Perfect score. You're not just familiar with AI — you understand the governance implications. You know which questions to ask vendors, which risks to flag, and where the regulatory landmines are. You're ready to lead AI strategy in your organization.",
        nextStep: "Start drafting your organization's AI governance framework. If you haven't already, look into ISO 42001 implementation.",
        color: "border-l-4",
        bgColor: "#BDCF55",
        borderColor: "border-[#BDCF55]",
        textColor: "text-[#414041]"
      };
    } else if (score >= 11) {
      return {
        title: "AI Strategy Ready",
        description: "You have strong AI literacy across technical and governance domains. You understand the risks and opportunities, and you can contribute meaningfully to AI strategy decisions. A few knowledge gaps remain, but you're operating at a high level.",
        nextStep: "Focus on the areas you missed. Review EU AI Act compliance requirements and technical infrastructure concepts like MCP and RAG to round out your expertise.",
        color: "border-l-4",
        bgColor: "#80CFEE",
        borderColor: "border-[#80CFEE]",
        textColor: "text-[#414041]"
      };
    } else if (score >= 7) {
      return {
        title: "AI Literacy Leader",
        description: "You've got solid foundational knowledge and understand key governance concepts. You can participate meaningfully in AI strategy conversations and spot obvious risks. With a bit more depth on regulatory frameworks and technical infrastructure, you'll be ready for strategic leadership.",
        nextStep: "Deep dive into EU AI Act requirements and how MCP/RAG work in practice. Focus on the 'Governance & Risk' concepts.",
        color: "border-l-4",
        bgColor: "#F7EE60",
        borderColor: "border-[#F7EE60]",
        textColor: "text-[#414041]"
      };
    } else if (score >= 4) {
      return {
        title: "AI-Aware Professional",
        description: "You understand the basics and recognize important terms, but there are gaps in governance knowledge. You might be using AI tools effectively but may not fully understand the compliance and risk implications.",
        nextStep: "Focus on the governance concepts: red lines, EU AI Act, ISO 42001, and shadow AI. These will protect you and your organization as you scale AI use.",
        color: "border-l-4",
        bgColor: "#FAAA31",
        borderColor: "border-[#FAAA31]",
        textColor: "text-[#414041]"
      };
    } else {
      return {
        title: "AI Curious",
        description: "You're building foundational AI literacy — and that's exactly where everyone starts. The gap between AI adoption rates and actual AI understanding is massive. But if you're making decisions about AI tools or strategy at this level, you need to build more knowledge first.",
        nextStep: "Take the full 30-term series seriously. Start with GPT, Generative AI, and Red Lines. Don't deploy AI tools until you understand what you're actually using.",
        color: "border-l-4",
        bgColor: "#f3f4f6",
        borderColor: "border-[#414041]",
        textColor: "text-[#414041]"
      };
    }
  };

  const handleAnswer = (optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: optionIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correct) {
        totalScore++;
      }
    });
    setScore(totalScore);
    setShowEmailCapture(true);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend/Mailchimp
    console.log('Email captured:', email);
    setShowEmailCapture(false);
    setShowResults(true);
  };

  const handleSkipEmail = () => {
    setShowEmailCapture(false);
    setShowResults(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setShowEmailCapture(false);
    setEmail('');
    setScore(0);
  };

  const [showShareText, setShowShareText] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const getShareText = () => {
    const tier = getTier(score);
    return `I just scored ${score}/15 on the AI Literacy Quiz and earned the "${tier.title}" badge! 🎯

Test your AI governance knowledge 👇
https://mavesocialai.com/try-ai-literacy-quiz

#AILiteracy #AIGovernance #MaveSocialAI`;
  };

  const shareOnLinkedIn = () => {
    const text = getShareText();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => {
        window.open('https://www.linkedin.com/feed/?shareActive=true', '_blank');
      }, 1500);
    }).catch(() => {
      // Fallback - show the text box if clipboard fails
      setShowShareText(true);
    });
  };

  // Email capture screen
  if (showEmailCapture) {
    const tier = getTier(score);
    
    return (
      <div className="min-h-screen p-6" style={{background: 'linear-gradient(to bottom right, #F7EE60, #FAAA31)'}}>
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <p className="text-6xl font-bold my-4" style={{color: '#FAAA31'}}>{score}/15</p>
              <h2 className="text-2xl font-bold mb-2" style={{color: '#414041'}}>{tier.title}</h2>
              <p className="text-gray-600">You've completed the quiz!</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold mb-3" style={{color: '#414041'}}>
                Want to stay ahead with AI literacy?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Get weekly insights on AI governance, risk, and strategy — no jargon, just clarity.
              </p>
              
              <form onSubmit={handleEmailSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 border-2 border-gray-200 rounded-lg mb-3 focus:outline-none focus:border-orange-400"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold text-white transition-colors hover:opacity-90"
                  style={{backgroundColor: '#FAAA31'}}
                >
                  Subscribe to Newsletter
                </button>
              </form>
            </div>

            <button
              onClick={handleSkipEmail}
              className="w-full py-2 text-gray-500 hover:text-gray-700 text-sm"
            >
              Skip and see my results →
            </button>

            <div className="mt-6 text-center text-sm" style={{color: '#414041'}}>
              <p className="font-semibold">Keep the AI. Kill the Jargon.</p>
              <p className="text-xs text-gray-500 mt-1">Mave Social AI</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results screen
  if (showResults) {
    const tier = getTier(score);
    
    return (
      <div className="min-h-screen p-6" style={{background: 'linear-gradient(to bottom right, #F7EE60, #FAAA31)'}}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2" style={{color: '#414041'}}>Quiz Complete!</h1>
              <p className="text-6xl font-bold my-6" style={{color: '#FAAA31'}}>{score}/15</p>
            </div>

            <div className={`${tier.color} ${tier.borderColor} rounded-lg p-6 mb-8`} style={{backgroundColor: tier.bgColor}}>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#414041'}}>{tier.title}</h2>
              <p className="mb-4 leading-relaxed" style={{color: '#414041'}}>{tier.description}</p>
              <div className="bg-white bg-opacity-50 rounded p-4">
                <p className="font-semibold mb-2" style={{color: '#414041'}}>Next Step:</p>
                <p style={{color: '#414041'}}>{tier.nextStep}</p>
              </div>
            </div>

            {/* Share section */}
            <div className="mb-8">
              <div className="text-center">
                {copied ? (
                  <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
                    <p className="text-green-700 font-semibold">✓ Your score is copied — just paste to share on LinkedIn when it opens!</p>
                  </div>
                ) : (
                  <button
                    onClick={shareOnLinkedIn}
                    className="px-8 py-4 rounded-lg font-semibold text-white transition-colors hover:opacity-90 text-lg"
                    style={{backgroundColor: '#0077B5'}}
                  >
                    🔗 Share My Score on LinkedIn
                  </button>
                )}
              </div>
              
              {showShareText && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2 font-semibold">Copy this text and paste it into your LinkedIn post:</p>
                  <textarea
                    readOnly
                    value={getShareText()}
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm bg-white"
                    rows={6}
                    onClick={(e) => e.target.select()}
                  />
                  <p className="text-xs text-gray-500 mt-2">Click the text to select all, then copy (Ctrl+C / Cmd+C)</p>
                </div>
              )}
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4" style={{color: '#414041'}}>Your Answers:</h3>
              <div className="space-y-4">
                {questions.map((q, index) => {
                  const userAnswer = selectedAnswers[index];
                  const isCorrect = userAnswer === q.correct;
                  
                  return (
                    <div key={q.id} className={`border rounded-lg p-4 ${isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
                      <div className="flex items-start gap-3">
                        <div className={`font-bold text-lg ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {isCorrect ? '✓' : '✗'}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold mb-2">Q{index + 1}: {q.question}</p>
                          {!isCorrect && (
                            <>
                              <p className="text-red-700 text-sm mb-1">Your answer: {q.options[userAnswer]}</p>
                              <p className="text-green-700 text-sm mb-1">Correct answer: {q.options[q.correct]}</p>
                            </>
                          )}
                          <p className="text-gray-600 text-sm italic mt-2">{q.explanation}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-center mb-8">
              <button
                onClick={restartQuiz}
                className="font-bold py-3 px-8 rounded-lg transition-colors text-white hover:opacity-90"
                style={{backgroundColor: '#FAAA31'}}
              >
                Retake Quiz
              </button>
            </div>

            <div className="pt-8 border-t">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-3" style={{color: '#414041'}}>
                  Stay ahead with AI literacy
                </h3>
                <p className="text-gray-600 mb-2">
                  Weekly insights on AI governance, risk, and strategy — no jargon, just clarity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="https://mavesocial.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg font-semibold text-center transition-colors text-white hover:opacity-90"
                  style={{backgroundColor: '#414041'}}
                >
                  Visit Mave Social AI
                </a>
                <a
                  href="https://www.linkedin.com/company/mave-social-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg font-semibold text-center transition-colors text-white hover:opacity-90"
                  style={{backgroundColor: '#FAAA31'}}
                >
                  Follow on LinkedIn
                </a>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">
                  Founded by <strong>Sumathi Menon</strong> | Regional Lead - UK, Women Defining AI
                </p>
                <p className="text-xs text-gray-500">
                  © 2025 Mave Social Limited. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz questions screen
  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen p-6" style={{background: 'linear-gradient(to bottom right, #F7EE60, #FAAA31)'}}>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold" style={{color: '#414041'}}>AI Literacy Quiz</h1>
              <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%`, backgroundColor: '#FAAA31' }}
              />
            </div>
            <p className="text-sm text-gray-600 text-right">{Math.round(progress)}% complete</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {currentQ.question}
            </h2>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => {
                const isSelected = selectedAnswers[currentQuestion] === index;
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full text-left p-4 rounded-lg border-2 transition-all bg-white"
                    style={{
                      borderColor: isSelected ? '#FAAA31' : '#e5e7eb',
                      backgroundColor: isSelected ? '#FEF3E2' : 'white'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                        style={{
                          borderColor: isSelected ? '#FAAA31' : '#d1d5db',
                          backgroundColor: isSelected ? '#FAAA31' : 'transparent'
                        }}
                      >
                        {isSelected && <div className="w-3 h-3 bg-white rounded-full" />}
                      </div>
                      <span className={isSelected ? 'font-semibold' : ''} style={{color: '#414041'}}>
                        {option}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-between items-center pt-6 border-t">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                currentQuestion === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className="px-8 py-2 rounded-lg font-semibold transition-colors text-white"
              style={{
                backgroundColor: selectedAnswers[currentQuestion] === undefined ? '#e5e7eb' : '#FAAA31',
                color: selectedAnswers[currentQuestion] === undefined ? '#9ca3af' : 'white',
                cursor: selectedAnswers[currentQuestion] === undefined ? 'not-allowed' : 'pointer'
              }}
            >
              {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
            </button>
          </div>

          <div className="mt-8 text-center text-sm" style={{color: '#414041'}}>
            <p className="font-semibold">Keep the AI. Kill the Jargon.</p>
            <p className="text-xs text-gray-500 mt-1">Brought to you by Sumathi Menon — Mave Social AI | WDAI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILiteracyQuiz;
