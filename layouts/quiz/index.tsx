"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useQuizStore } from "@/store/useQuizStore";
import { signOut } from "firebase/auth";
import QuizTaken from "./QuizTaken";
import LoadingQuestions, { Loading } from "./LoadingQuestions";
import QuizCompleted from "./QuizCompleted";
import QuizApp from "./QuizApp";
import toast from "react-hot-toast";
import { MAX_WARNINGS, WARNING_TIMEOUT } from "./constants";

const Quiz = () => {
  const [user, loading] = useAuthState(auth);
  const [quizTaken, setQuizTaken] = useState(false);
  const [warnings, setWarnings] = useState(0);
  const router = useRouter();
  const {
    questions,
    currentQuestionIndex,
    fetchQuestions,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    timeLeft,
    startTimer,
    score,
    submitQuiz,
    quizCompleted,
    resetQuiz,
  } = useQuizStore();

  const saveScore = async () => {
    if (user) {
      await updateDoc(doc(db, "users", user.uid), {
        quizTaken: true,
        score: ((score / questions.length) * 100).toFixed(2),
      });
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    toast.success("Logged out successfully");
    router.replace("/");
  };

  const checkQuizStatus = async () => {
    if (user) {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists() && userDoc.data().quizTaken) {
        setQuizTaken(true);
        resetQuiz(); // Reset the quiz state if the user has already taken it
      } else if (questions.length === 0) {
        fetchQuestions();
        startTimer();
      }
    }
  };

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    } else if (user) {
      checkQuizStatus();
    }
  }, [user, loading, router]); // Removed checkQuizStatus from dependencies

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setWarnings((prev) => prev + 1);
        toast.error(
          `Warning: You've left the quiz page. (${
            warnings + 1
          }/${MAX_WARNINGS})`,
          {
            duration: WARNING_TIMEOUT,
          }
        );

        if (warnings + 1 >= MAX_WARNINGS) {
          submitQuiz();
          toast.error("Quiz auto-submitted due to multiple warnings.");
        }
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [warnings, submitQuiz]);

  useEffect(() => {
    if (timeLeft === 0) {
      submitQuiz();
    }
  }, [timeLeft, submitQuiz]);

  const answeredQuestionsCount = questions.filter(
    (q) => q.selectedAnswer
  ).length;
  const progressPercentage = Math.round(
    (answeredQuestionsCount / questions.length) * 100
  );

  if (loading) return <Loading />;

  if (quizTaken) return <QuizTaken handleLogout={handleLogout} />;

  if (questions.length === 0) return <LoadingQuestions />;

  if (quizCompleted || timeLeft === 0) {
    saveScore();

    return (
      <QuizCompleted
        score={score}
        totalQuestions={questions.length}
        handleLogout={handleLogout}
      />
    );
  }

  return (
    <QuizApp
      timeLeft={timeLeft}
      currentQuestionIndex={currentQuestionIndex}
      questions={questions}
      progressPercentage={progressPercentage}
      currentQuestion={questions[currentQuestionIndex]}
      selectAnswer={selectAnswer}
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      submitQuiz={submitQuiz}
    />
  );
};

export default Quiz;
