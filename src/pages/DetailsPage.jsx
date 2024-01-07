import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getEntryById } from "../service";

export const DetailsPage = () => {
  const [data, setData] = useState();
  const params = useParams();

  useEffect(() => {
    getEntryById("/student/", params.id).then((res) => setData(res));
  }, []);

  return (
    <div className="w-screen h-screen pl-20 pt-20 overflow-hidden">
      {data && (
        <div>
          <div className="text-3xl mb-4">{data.studentName}</div>

          <div className=""> date of birth - {data.dateOfBirth}</div>
          <div className=""> contact info - {data.contactInfo}</div>
          <div className=""> gpa - {data.gpa}</div>

          {data.attends &&
            data.attends.map((el, index) => (
              <div key={index}>
                <div>
                  {el.courseName}({el.department})
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
