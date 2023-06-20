import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header";
import ActivityInformation from "../../components/Activity/ActivityInformation";
import mdListJSON from "../../mocks/md-list.json";
import { useEffect, useState } from "react";
import ResearchTable from "../../components/research/ResearchTable";
import activitiesJSON from "../../mocks/activities.json";

const MarketResearchPage = () => {
    const navigate = useNavigate();
    const activityId = useParams().activityId;

    const [activity, setActivity] = useState({});

    useEffect(() => {
        setActivity(mdListJSON.find((activity) => activity.key === activityId));
    }, []);

    return (
        <section className="w-full pb-10">
            <Header title="Market Research" onBack={() => navigate(-1)} />
            <main className="w-full px-4 my-10">
                <ActivityInformation info={activity} />
                <ResearchTable activityId={activityId} />

                <div className="flex flex-col mb-4 space-x-4 space-y-6">
                    <label
                        htmlFor="textarea"
                        className="font-bold text-gray-700"
                    >
                        MD Behaviour:
                    </label>
                    <textarea
                        id="textarea"
                        name="textarea"
                        rows={3}
                        className="w-full p-2 bg-white border border-gray-400 rounded-lg"
                        placeholder="Type your message here..."
                        required
                    ></textarea>
                </div>
                <div className="flex items-center justify-center w-full">
                    <button
                        onClick={() => {
                            activitiesJSON.map((activity) => {
                                if (activity.activityKey === activityId) {
                                    activity.marketResearch.done = true;
                                }
                            });
                            navigate(-1);
                        }}
                        className=" btn btn-primary !bg-textPrimary"
                    >
                        DONE
                    </button>
                </div>
            </main>
        </section>
    );
};

export default MarketResearchPage;
