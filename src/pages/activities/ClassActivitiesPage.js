import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header";
import ActivityInformation from "../../components/Activity/ActivityInformation";
import mdListJSON from "../../mocks/md-list.json";
import { useEffect, useState } from "react";
// import ActivityTable from "../../components/Activity/ActivityTable";
import ActivityTable from "../../components/Activity/ActivityTable";

// interface ActivityType {
//     key: string;
//     class: string;
//     mdName: string;
//     visits: string;
//     call: boolean;
//     speciality: string;
//     objective: string;
//     location: string;
// }

const ClassActivitiesPage = () => {
    const navigate = useNavigate();
    const activityId = useParams().activityId;

    const [activity, setActivity] = useState({});

    useEffect(() => {
        setActivity(mdListJSON.find((activity) => activity.key === activityId));
    }, []);

    return (
        <section className="w-full">
            <Header
                title="Call Activities"
                onBack={() => navigate("/md-list")}
            />
            <main className="w-full px-4 my-10">
                <ActivityInformation info={activity} />
                <ActivityTable activityId={activityId} />
            </main>
        </section>
    );
};

export default ClassActivitiesPage;
