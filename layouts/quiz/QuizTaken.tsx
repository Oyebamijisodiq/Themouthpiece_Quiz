import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AlertCircle, LogOut } from "lucide-react";
import React from "react";

const QuizTaken = ({ handleLogout }: { handleLogout: () => void }) => {
  return (
    <div className="flex justify-center items-center h-dvh bg-[#60e1e0] px-3">
      <Card className="w-full max-w-lg mx-auto">
        <CardContent className="pt-6">
          <div className="flex items-center justify-center space-x-2">
            <AlertCircle className="h-4 w-4 md:h-6 md:w-6 text-yellow-500 hidden md:block" />
            <p className="md:text-lg font-medium  text-center">
              You have already taken the quiz.
            </p>
          </div>
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

export default QuizTaken;
