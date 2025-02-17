import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, LogOut } from "lucide-react";

const QuizCompleted = ({
  score,
  totalQuestions,
  handleLogout,
}: {
  score: number;
  totalQuestions: number;
  handleLogout: () => void;
}) => {
  return (
    <div className="flex justify-center items-center h-dvh bg-[#60e1e0] px-3">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-lg md:text-2xl font-bold text-center">
            Quiz Completed!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <CheckCircle2 className="h-6 md:h-8 w-6 md:w-8 text-green-500" />
            <p className="md:text-xl font-medium">
              Your Score: {((score / totalQuestions) * 100).toFixed(2)}%
            </p>
          </div>
          <Progress value={(score / totalQuestions) * 100} className="w-full" />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="mr-2 h-4 w-4 rotate-180" /> Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuizCompleted;
