import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { QuizState } from "@/interfaces";
import data from "./questions.json";

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      questions: [],
      currentQuestionIndex: 0,
      score: 0,
      timeLeft: 720, // 12 minutes
      quizCompleted: false,
      timerId: null,

      fetchQuestions: () => {
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 20);
        set({ questions: selected });
      },

      selectAnswer: (answer) => {
        set((state) => ({
          questions: state.questions.map((q, index) =>
            index === state.currentQuestionIndex
              ? { ...q, selectedAnswer: answer }
              : q
          ),
        }));
      },

      nextQuestion: () => {
        set((state) => ({
          currentQuestionIndex: Math.min(
            state.currentQuestionIndex + 1,
            state.questions.length - 1
          ),
        }));
      },

      previousQuestion: () => {
        set((state) => ({
          currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
        }));
      },

      startTimer: () => {
        const startTime = Date.now();
        const timerId = window.setInterval(() => {
          const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
          set(() => {
            const newTimeLeft = Math.max(720 - elapsedSeconds, 0);
            if (newTimeLeft <= 0) {
              clearInterval(timerId);
              get().submitQuiz();
              return { timeLeft: 0, timerId: null };
            }
            return { timeLeft: newTimeLeft };
          });
        }, 1000);
        set({ timerId });
      },

      stopTimer: () => {
        const { timerId } = get();
        if (timerId) {
          clearInterval(timerId);
          set({ timerId: null });
        }
      },

      submitQuiz: () => {
        const { questions } = get();
        const score = questions.filter(
          (q) => q.selectedAnswer === q.correctAnswer
        ).length;
        set({ score, quizCompleted: true });
        get().stopTimer();
      },

      resetQuiz: () => {
        get().stopTimer();
        set({
          questions: [],
          currentQuestionIndex: 0,
          score: 0,
          timeLeft: 720,
          quizCompleted: false,
          timerId: null,
        });
      },
    }),
    {
      name: "mouthpiece-quiz-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
