// import { useEffect, useState } from "react";
// import activitiesJSON from "../../mocks/activities.json";
import activityStore from "../../store/store";

const DetailingTable = ({ activityId }) => {
    // const [activities, setActivities] = useState<any>({});

    const ACTIVITIES = activityStore((state) => state.data);
    const updateQuestion = activityStore((state) => state.updateQuestion);

    // useEffect(() => {
    //     setActivities(
    //         ACTIVITIES.filter(
    //             (activity) => activity.activityKey == activityId
    //         )[0]
    //     );
    // }, []);

    return (
        <div className="flex flex-col items-start justify-center w-full my-10">
            <table className="w-full border border-gray-500">
                <thead className="uppercase bg-bgPrimary">
                    <tr>
                        <th className="px-4 py-2 font-medium text-center text-gray-800">
                            Question
                        </th>
                        <th className="px-4 py-2 font-medium text-center text-gray-800">
                            Answer
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ACTIVITIES.filter(
                        (activity) => activity.activityKey == activityId
                    )[0]?.marketResearch?.questions.map((row) => (
                        <tr key={row.id}>
                            <td className="px-4 py-2">{row.question}</td>
                            <td>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 bg-white border"
                                    value={row.answer}
                                    onChange={(e) => {
                                        updateQuestion(
                                            e.target.value,
                                            row.id,
                                            activityId
                                        );
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DetailingTable;
