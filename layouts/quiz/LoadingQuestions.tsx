import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export const Loading = () => <div>Loading...</div>;

const LoadingQuestions = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-lg mx-auto mt-1">
        <CardContent className="pt-6">
          <div className="flex items-center justify-center space-x-2">
            <AlertCircle className="h-6 w-6 text-yellow-500" />
            <p className="text-lg font-medium">Loading questions...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoadingQuestions;
