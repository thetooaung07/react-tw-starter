import React, { useEffect, useState } from "react";
import { StudentTabView } from "../components/StudentTabView";
import { InstructorTabView } from "../components/InstructorTabView";
import { CoursetTabView } from "../components/CourseTabView";
import { useLocation } from "react-router-dom";

export const AdminPage = () => {
  const [openTab, setOpenTab] = useState(1);
  const location = useLocation();

  useEffect(() => {
    if(location.state &&  location.state.tab == 3) {
      setOpenTab(location.state.tab);
    }
    
  }, [location.state]);

  return (
    <div className="h-screen w-screen">
      <div className="p-8">
        <div className="max-w-md">
          <div className="mb-4 flex space-x-4 p-2 rounded-lg shadow-md">
            <button
              onClick={() => setOpenTab(1)}
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                openTab === 1 ? "bg-blue-600 text-white" : ""
              }`}
            >
              Students
            </button>
            <button
              onClick={() => setOpenTab(2)}
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                openTab === 2 ? "bg-blue-600 text-white" : ""
              }`}
            >
              Instructors
            </button>
            <button
              onClick={() => setOpenTab(3)}
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                openTab === 3 ? "bg-blue-600 text-white" : ""
              }`}
            >
              Courses
            </button>
          </div>
        </div>

        {openTab === 1 && <StudentTabView></StudentTabView>}

        {openTab === 2 && <InstructorTabView></InstructorTabView>}

        {openTab === 3 && <CoursetTabView></CoursetTabView>}
      </div>
    </div>
  );
};
