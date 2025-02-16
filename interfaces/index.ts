interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  selectedAnswer?: string;
}

interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  timeLeft: number;
  quizCompleted: boolean;
  timerId: number | null;
  fetchQuestions: () => void;
  selectAnswer: (answer: string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  startTimer: () => void;
  stopTimer: () => void;
  submitQuiz: () => void;
  resetQuiz: () => void;
}

interface QuizAppProps {
  timeLeft: number;
  currentQuestionIndex: number;
  questions: Question[];
  progressPercentage: number;
  currentQuestion: Question;
  selectAnswer: (option: string) => void;
  previousQuestion: () => void;
  nextQuestion: () => void;
  submitQuiz: () => void;
}

export type { Question, QuizState, QuizAppProps };
