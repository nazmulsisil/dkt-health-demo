import { useState, useEffect } from "react";
import activityStore from "../../store/store";

export const ActivityDetailsTable = ({ activityId }) => {
  const [jointCallAnswers, setJointCallAnswers] = useState({});
  const activities = activityStore((state) => state.data);
  const activity = activities.find(
    (activity) => activity.activityKey === activityId
  );

  useEffect(() => {
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
            <th className="px-4 py-2 font-medium text-gray-800">Activity</th>
            <th className="px-4 py-2 font-medium text-gray-800">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-bold text-gray-700 w-2/5 px-2 py-3 border-bottom">Product Detailing</td>
            <td className="w-3/5 px-2 py-3 border-bottom">
              {activity.productDetailing.products.map((product, index) => (
                <p key={index}>{product.name}</p>
              ))}
            </td>
          </tr>

          <tr>
            <td className="font-bold text-gray-700 w-2/5 px-2 py-3 border-bottom">Market Research</td>
            <td className="w-3/5 px-2 py-3 border-bottom">
              {activity.marketResearch.questions.map((question, index) => (
                <p key={index}>
                  {question.question}: {question.answer}
                </p>
              ))}
            </td>
          </tr>

          <tr>
            <td className="font-bold text-gray-700 w-2/5 px-2 py-3 border-bottom">Product Samples</td>
            <td className="w-3/5 px-2 py-3 border-bottom">
              {activity.productSamples.samples.map((sample, index) => (
                <p key={index}>
                  {sample.name}: {sample.quantity}
                </p>
              ))}
            </td>
          </tr>

          <tr>
            <td className="font-bold text-gray-700 w-2/5 px-2 py-3 border-bottom">Joint Call</td>
            <td className="w-3/5 px-2 py-3 border-bottom">
              {activity.jointCall.qa.map((qaItem, index) => (
                <p key={index}>
                  {qaItem.question}: {qaItem.answer}
                </p>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
