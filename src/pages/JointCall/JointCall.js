import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header";
import ActivityInformation from "../../components/Activity/ActivityInformation";
import mdListJSON from "../../mocks/md-list.json";
import { useEffect, useState } from "react";
import { CallTable } from "../../components/CallTable";
import { InputSign } from "../../components/InputSign";
import useStore from "../../store/store";

export const JointCall = () => {
  const navigate = useNavigate();
  const activityId = useParams().activityId;

  const [activity, setActivity] = useState({});
  const { data, updateJointCallSignature } = useStore();

  useEffect(() => {
    setActivity(mdListJSON.find((activity) => activity.key === activityId));
  }, []);

  const handleSign = (signature, signDate) => {
    updateJointCallSignature(signature, signDate, activityId);
  };

  // get the current signature for the activity
  const initialSignature = data.find(
    (activity) => activity.activityKey === activityId
  )?.jointCall?.signature;

  const signatureDate = data.find(
    (activity) => activity.activityKey === activityId
  )?.jointCall?.signDate;

  return (
    <section className="w-full">
      <Header title="Joint Call" onBack={() => navigate(-1)} />
      <main className="w-full px-4 my-10">
        <ActivityInformation info={activity} />
        <CallTable activityId={activityId} />

        
        <InputSign
          label="MD Signature:"
          signDate={signatureDate}
          onSign={handleSign}
          initialSignature={initialSignature}
        />

        <div className="flex items-center justify-center w-full">
          <button
            onClick={() => navigate(-1)}
            className=" btn btn-primary !bg-textPrimary"
          >
            DONE
          </button>
        </div>
      </main>
    </section>
  );
};
