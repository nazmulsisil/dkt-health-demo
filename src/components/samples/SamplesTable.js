// import { useEffect, useState } from "react";
// import activitiesJSON from "../../mocks/activities.json";
import activityStore from "../../store/store";

const SamplesTable = ({ activityId }) => {
    // const [activities, setActivities] = useState<any>({});

    const ACTIVITIES = activityStore((state) => state.data);
    const updateQuantity = activityStore((state) => state.updateQuantity);

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
                            Product
                        </th>
                        <th className="px-4 py-2 font-medium text-center text-gray-800">
                            Quantity
                        </th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {ACTIVITIES.filter(
                        (activity) => activity.activityKey == activityId
                    )[0]?.productSamples?.samples.map((row) => (
                        <tr key={row.id} className="w-full">
                            <td className="w-3/4 px-4 py-2 border">
                                {row.name}
                            </td>
                            <td className="w-1/4">
                                <input
                                    type="text"
                                    onChange={(e) => {
                                        updateQuantity(
                                            e.target.value,
                                            row.id,
                                            activityId
                                        );
                                    }}
                                    // value={row.quantity}
                                    className="w-full px-4 py-2 text-center bg-white border "
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SamplesTable;
