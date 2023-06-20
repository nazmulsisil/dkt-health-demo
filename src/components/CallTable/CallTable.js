import { useState, useEffect } from "react";

import activityStore from "../../store/store";

export const CallTable = ({ activityId }) => {
  const [jointCallAnswers, setJointCallAnswers] = useState({});

  const ACTIVITIES = activityStore((state) => state.data);

  useEffect(() => {
    // Process answers and update store when jointCallAnswers changes
    Object.keys(jointCallAnswers).forEach((id) => {
      activityStore
        .getState()
        .updateJointCallAnswers(jointCallAnswers[id], parseInt(id), activityId);
    });
  }, [jointCallAnswers]);

  return (
    <div className="flex flex-col items-start justify-center my-10">
      <table className="w-full">
        <thead className="uppercase bg-bgPrimary">
          <tr>
            <th className="px-4 py-2 font-medium text-gray-800">Question</th>
            <th className="px-4 py-2 font-medium text-gray-800">Answer</th>
          </tr>
        </thead>
        <tbody>
          {ACTIVITIES.filter(
            (activity) => activity.activityKey == activityId
          )[0]?.jointCall?.qa.map(({ id, question, inputField, answer }) => (
            <tr key={id}>
              <td className="w-2/5 px-2 py-3 border-bottom">{question}</td>
              <td className="w-3/5 px-2 py-3 border-bottom">
                {inputField.type === "textarea" && (
                  <textarea
                    className="w-full px-2 py-2 bg-white border block"
                    value={jointCallAnswers[id] || answer || ""}
                    onChange={(e) =>
                      setJointCallAnswers((prev) => ({
                        ...prev,
                        [id]: e.target.value,
                      }))
                    }
                  />
                )}

                {inputField.type === "select" && (
                  <select
                    className="w-full px-2 py-2 bg-white border"
                    value={jointCallAnswers[id] || answer || "default"}
                    onChange={(e) =>
                      setJointCallAnswers((prev) => ({
                        ...prev,
                        [id]: e.target.value,
                      }))
                    }
                  >
                    <option value="default" disabled>
                      Select
                    </option>
                    {inputField.options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
