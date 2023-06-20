import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header";
import ActivityInformation from "../../components/Activity/ActivityInformation";
import mdListJSON from "../../mocks/md-list.json";
import { useEffect, useState } from "react";
import { CallTable } from "../../components/CallTable";
import { InputSign } from "../../components/InputSign";
import useStore from "../../store/store";
import { ActivityDetailsTable } from "../../components/ActivityDetailsTable";

export const CallSummary = () => {
  const navigate = useNavigate();
  const activityId = useParams().activityId;

  const [activity, setActivity] = useState({});
  const { data, updateMdSignature } = useStore();

  useEffect(() => {
    setActivity(mdListJSON.find((activity) => activity.key === activityId));
  }, []);

  const handleSign = (signature, signDate) => {
    updateMdSignature(signature, signDate, activityId);
  };

  // get the current signature for the activity
  const signatureState = data.find(
    (activity) => activity.activityKey === activityId
  )?.mdSign?.signature;

  const signatureDate = data.find(
    (activity) => activity.activityKey === activityId
  )?.mdSign?.signDate;

  return (
    <section className="w-full">
      <Header title="Call Summary" onBack={() => navigate(-1)} />
      <main className="w-full px-4 my-10">
        <ActivityInformation info={activity} />
        <ActivityDetailsTable activityId={activityId} />

        <InputSign
          label="MD Signature:"
          signDate={signatureDate}
          onSign={handleSign}
          initialSignature={signatureState}
        />

        <div className="flex items-center justify-center w-full">
          <button
            disabled={!signatureState}
            onClick={() => {
              navigate(`/activities/${activityId}/postCall`);
            }}
            className=" btn btn-primary !bg-textPrimary"
          >
            Next
          </button>
        </div>
      </main>
    </section>
  );
};
