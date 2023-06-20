import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header";
import ActivityInformation from "../../components/Activity/ActivityInformation";
import mdListJSON from "../../mocks/md-list.json";
import { useEffect, useState } from "react";
import { CallTable } from "../../components/CallTable";
import { InputSign } from "../../components/InputSign";
import useStore from "../../store/store";
import { ActivityDetailsTable } from "../../components/ActivityDetailsTable";

export const PostCall = () => {
  const navigate = useNavigate();
  const activityId = useParams().activityId;

  const [activity, setActivity] = useState({});
  const {
    data,
    updateMdSignature,
    updatePostCallAnalysis,
    updateNextCallObjective,
  } = useStore();

  useEffect(() => {
    setActivity(mdListJSON.find((activity) => activity.key === activityId));
  }, []);

  const handleSign = (signature, signDate) => {
    updateMdSignature(signature, signDate, activityId);
  };

  // get the current signature for the activity
  const initialSignature = data.find(
    (activity) => activity.activityKey === activityId
  )?.mdSign?.signature;

  const signatureDate = data.find(
    (activity) => activity.activityKey === activityId
  )?.mdSign?.signDate;

  const postCallAnalysis = data.find(
    (activity) => activity.activityKey === activityId
  )?.postCallAnalysis;

  const nextCallObjective = data.find(
    (activity) => activity.activityKey === activityId
  )?.nextCallObjective;

  return (
    <section className="w-full">
      <Header title="Post Call" onBack={() => navigate(-1)} />
      <main className="w-full px-4 my-10">
        <ActivityInformation info={activity} />
        <ActivityDetailsTable activityId={activityId} />

        <div>
          <label
            htmlFor="postCallAnalysis"
            className="font-bold text-gray-700 mb-2"
          >
            Post Call Analysis:
          </label>
          <textarea
            id="postCallAnalysis"
            name="postCallAnalysis"
            rows={3}
            className="w-full p-2 bg-white border border-gray-400 rounded-lg"
            placeholder="Type your message here..."
            required
            value={postCallAnalysis || ""}
            onChange={(e) => updatePostCallAnalysis(e.target.value, activityId)}
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="nextCallObjective"
            className="font-bold text-gray-700 mb-2 mt-2"
          >
            Next Call Objective:
          </label>
          <textarea
            id="nextCallObjective"
            name="nextCallObjective"
            rows={3}
            className="w-full p-2 bg-white border border-gray-400 rounded-lg"
            placeholder="Type your message here..."
            required
            value={nextCallObjective || ""}
            onChange={(e) =>
              updateNextCallObjective(e.target.value, activityId)
            }
          ></textarea>
        </div>

        <div className="flex items-center justify-center w-full mt-4">
          <button
            onClick={() => {
              navigate("/md-list");
            }}
            className=" btn btn-primary !bg-textPrimary"
          >
            Submit
          </button>
        </div>
      </main>
    </section>
  );
};
