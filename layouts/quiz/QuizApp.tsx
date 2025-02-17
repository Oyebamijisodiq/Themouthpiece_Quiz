import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { QuizAppProps } from "@/interfaces";
import { formatTime } from "@/utils/functions";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

const QuizApp: React.FC<QuizAppProps> = ({
  timeLeft,
  currentQuestionIndex,
  questions,
  progressPercentage,
  currentQuestion,
  selectAnswer,
  previousQuestion,
  nextQuestion,
  submitQuiz,
}) => {
  const [displayTime, setDisplayTime] = useState(timeLeft);

  useEffect(() => {
    setDisplayTime(timeLeft);
  }, [timeLeft]);

  return (
    <div className="flex justify-center items-center h-dvh bg-[#60e1e0] px-3">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl font-bold">
            Quiz Assessment
          </CardTitle>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 md:h-5 w-4 md:w-5 text-blue-500" />
              <p>{formatTime(displayTime)}</p>
            </div>
            <p>
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          </div>
          <Progress value={progressPercentage} className="w-full mt-4" />
        </CardHeader>
        <CardContent>
          <p className="md:text-lg mb-3 md:mb-4">{currentQuestion.question}</p>
          <div className="space-y-2">
            {currentQuestion.options.map((option) => (
              <Button
                key={option}
                onClick={() => selectAnswer(option)}
                variant={
                  currentQuestion.selectedAnswer === option
                    ? "default"
                    : "outline"
                }
                className="w-full justify-start text-left"
              >
                {option}
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={previousQuestion}
            variant="outline"
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          {currentQuestionIndex < questions.length - 1 ? (
            <Button onClick={nextQuestion}>Next</Button>
          ) : (
            <Button onClick={submitQuiz} variant="default">
              Submit Quiz
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuizApp;
