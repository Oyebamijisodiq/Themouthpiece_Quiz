import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AlertCircle, LogOut } from "lucide-react";
import React from "react";

const QuizTaken = ({ handleLogout }: { handleLogout: () => void }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#60e1e0]">
      <Card className="w-full max-w-lg mx-auto mt-1">
        <CardContent className="pt-6">
          <div className="flex items-center justify-center space-x-2">
            <AlertCircle className="h-6 w-6 text-yellow-500" />
            <p className="text-lg font-medium">
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
