import { Award, BookOpen, Clock } from "lucide-react";
import React from "react";

const Welcome = () => {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-[#60e1e0] flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        The Mouthpiece Techsphere
      </h1>
      <p className="text-lg mb-6 text-center">Get ready to be assessed!</p>
      <div className="grid grid-cols-1 gap-6 w-full max-w-md">
        <div className="flex items-center bg-white p-4 rounded-lg shadow">
          <BookOpen className="h-8 w-8 text-[#131eff] mr-4" />
          <div>
            <h3 className="font-semibold">Comprehensive Questions</h3>
            <p className="text-sm text-gray-600">
              Cover a wide range of topics
            </p>
          </div>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow">
          <Clock className="h-8 w-8 text-[#131eff] mr-4" />
          <div>
            <h3 className="font-semibold">Timed Assessments</h3>
            <p className="text-sm text-gray-600">
              Test your knowledge under a specific duration
            </p>
          </div>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow">
          <Award className="h-8 w-8 text-[#131eff] mr-4" />
          <div>
            <h3 className="font-semibold">Instant Results</h3>
            <p className="text-sm text-gray-600">Get your score immediately</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
