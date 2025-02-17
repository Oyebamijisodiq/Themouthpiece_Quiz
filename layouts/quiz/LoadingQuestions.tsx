import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export const Loading = () => (
  <div className="flex justify-center items-center h-dvh bg-[#60e1e0]">
    Loading...
  </div>
);

const LoadingQuestions = () => {
  return (
    <div className="flex justify-center items-center h-dvh bg-[#60e1e0] px-3">
      <Card className="w-full max-w-lg mx-auto">
        <CardContent className="pt-6">
          <div className="flex items-center justify-center space-x-2">
            <AlertCircle className="h-4 w-4 md:h-6 md:w-6 text-yellow-500 hidden md:block" />
            <p className="md:text-lg font-medium text-center">
              Loading questions...
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoadingQuestions;
