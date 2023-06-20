import { useState } from "react";
// import activitiesJSON from "../../mocks/activities.json";
import Modal from "../modal/Modal";
import activityStore from "../../store/store";
const DetailingTable = ({ activityId }) => {
    // const [activities, setActivities] = useState<any>({});
    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState("");
    const [product, setProduct] = useState(-1);

    const ACTIVITIES = activityStore((state) => state.data);

    // useEffect(() => {
    //     setActivities(
    //         ACTIVITIES.filter(
    //             (activity) => activity.activityKey == activityId
    //         )[0]
    //     );
    // }, []);

    const handleModal = () => {
        setShowModal(false);
    };

    const actionButtonFunc = () => {
        // assign first rank to the product item in activitiesJSON file
        ACTIVITIES.map((activity) => {
            if (activity.activityKey === activityId) {
                activity.productDetailing.products.map((pro) => {
                    if (pro.id == product) {
                        pro.rank = "" + pro.id;
                    }
                });
                // TEMP: make done to true
                activity.productDetailing.done = true;
            }
        });

        // update the store
        activityStore.setState({
            data: ACTIVITIES,
        });

        setShowModal(false);
    };

    const handleClick = (pdf, pid) => {
        setImage(pdf);
        setProduct(pid);
        setShowModal(true);
    };

    return (
        <>
            {showModal && (
                <Modal
                    showModal={showModal}
                    handleModal={handleModal}
                    actionButtonText="Done"
                    actionButtonFunc={actionButtonFunc}
                >
                    <img src={image} alt="product pdf" className="w-full" />
                </Modal>
            )}
            <div className="flex flex-col items-start justify-center my-10">
                <table className="w-full border border-gray-500">
                    <thead className="uppercase bg-bgPrimary">
                        <tr>
                            <th className="px-4 py-2 font-medium text-center text-gray-800">
                                Product
                            </th>
                            <th className="px-4 py-2 font-medium text-center text-gray-800">
                                View
                            </th>
                            <th className="px-4 py-2 font-medium text-center text-gray-800">
                                Rank
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {ACTIVITIES.filter(
                            (activity) =>
                                activity.activityKey == activityId
                        )[0]?.productDetailing?.products.map((row) => (
                            <tr key={row.id}>
                                <td className="w-3/4 px-4 py-2 border">
                                    {row.name}
                                </td>
                                <td className="w-3/4 px-4 py-2 border">
                                    <button
                                        onClick={() =>
                                            handleClick(row.pdf, row.id)
                                        }
                                    >
                                        <PDFIcon />
                                    </button>
                                </td>
                                <td className="w-1/4 px-4 py-2 text-center border">
                                    {row.rank}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default DetailingTable;

function PDFIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 512 512"
        >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g fill="#000" transform="translate(85.333 42.667)">
                    <path d="M75.947 285.653a61.013 61.013 0 00-40.32-8.32H0v128h28.373V356.48h12.16a55.04 55.04 0 0035.84-8.747 38.613 38.613 0 0013.44-30.933 37.333 37.333 0 00-13.866-31.147zm-22.827 46.72a32.853 32.853 0 01-17.067 2.56h-8.32v-36.266h8.32a30.293 30.293 0 0117.494 3.413 17.493 17.493 0 017.466 15.36 15.147 15.147 0 01-7.893 14.933zm97.707-55.04h-35.414v128h33.92a90.24 90.24 0 0050.134-9.6 60.16 60.16 0 0023.893-54.4 64 64 0 00-17.707-48.853 73.387 73.387 0 00-54.826-15.147zm28.16 98.987a51.2 51.2 0 01-29.227 6.4h-5.547v-82.773h5.12c17.92 0 24.96 1.706 32 8.106a43.947 43.947 0 0112.16 33.28 41.387 41.387 0 01-14.506 34.987zm75.52 29.013h28.8v-53.546h58.026v-22.614h-58.026v-29.226h58.026v-22.614h-86.826v128zM234.667 0H0v234.667h42.667v-192H216.96l81.707 81.706v110.294h42.666v-128L234.667 0z"></path>
                </g>
            </g>
        </svg>
    );
}
