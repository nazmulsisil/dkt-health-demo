import { Fragment } from "react";
// import activitiesJSON from "../../mocks/activities.json";
import { useNavigate } from "react-router-dom";
import activityStore from "../../store/store";
const data = [
  {
    id: 1,
    activity: "Product Detailing",
    key: "productDetailing",
  },
  {
    id: 2,
    activity: "Market Research",
    key: "marketResearch",
  },
  {
    id: 3,
    activity: "Product Samples",
    key: "productSamples",
  },
  {
    id: 4,
    activity: "Joint Call",
    key: "jointCall",
  },
  {
    id: 5,
    activity: "UA Acitivity 5",
    key: "uaactivity",
  },
];

const ActivityTable = ({ activityId }) => {
  // const [activities, setActivities] = useState<any>({});

  const navigate = useNavigate();
  const ACTIVITIES = activityStore((state) => state.data);

  // useEffect(() => {
  //     setActivities(
  //         ACTIVITIES.filter(
  //             (activity: any) => activity.activityKey == activityId
  //         )[0]
  //     );
  // }, []);

  const handleChange = (e, rowKey) => {
    e.preventDefault();

    navigate(`/activities/${activityId}/${rowKey}`);
  };

  const ShowFilled = (rowKey) => {
    switch (rowKey) {
      case "productDetailing":
        return ACTIVITIES.filter(
          (activity) => activity.activityKey == activityId
        )[0]
          [rowKey]?.products?.filter((product) => product.rank !== "")
          ?.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between w-full p-2 ml-2 text-sm border-x-2"
            >
              <span className="text-base">{product.name}</span>
            </div>
          ));
      case "marketResearch":
        return ACTIVITIES.filter(
          (activity) => activity.activityKey == activityId
        )[0]
          [rowKey]?.questions?.filter((question) => question.answer != "")
          ?.map((question) => (
            <div
              key={question.id}
              className="flex items-center justify-between w-full p-2 ml-2 text-sm"
            >
              <span className="text-base">
                {question.question}
                <span className="whitespace-pre ">{`             `}</span>
                {question.answer}
              </span>
            </div>
          ));

      case "productSamples":
        return ACTIVITIES.filter(
          (activity) => activity.activityKey == activityId
        )[0]
          [rowKey]?.samples?.filter((sample) => sample.quantity != "")
          ?.map((sample) => (
            <div
              key={sample.id}
              className="flex items-center justify-between w-full p-2 ml-2 text-sm"
            >
              <span className="text-base">
                {sample.name}
                <span className="whitespace-pre ">{`             `}</span>
                <span>{sample.quantity}</span>
              </span>
            </div>
          ));

      case "jointCall":
        return ACTIVITIES.filter(
          (activity) => activity.activityKey == activityId
        )[0]
          [rowKey]?.qa?.filter((question) => question.answer != "")
          ?.map((question) => (
            <div
              key={question.id}
              className="flex items-center justify-between w-full p-2 ml-2 text-sm"
            >
              <span className="text-base">
                {question.question}
                <span className="whitespace-pre ">{`             `}</span>
                {question.answer}
              </span>
            </div>
          ));

      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-start justify-center w-full my-10">
      <table className="w-full border border-gray-500">
        <thead className="text-lg text-center text-gray-800 uppercase bg-bgPrimary">
          <tr>
            <th className="px-4 py-2">Activity</th>
            <th className="px-4 py-2">Done?</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <Fragment key={row.id}>
              <tr className="text-lg">
                <td className="w-3/4 px-4 py-2 border">
                  <span className="font-bold">{row.activity}</span>

                  {ShowFilled(row.key)}
                </td>
                <td className="w-1/4 px-4 py-3 text-center border">
                  <input
                    type="checkbox"
                    checked={
                      ACTIVITIES.filter(
                        (activity) => activity.activityKey == activityId
                      )[0][row.key]?.done || false
                    }
                    className="border-gray-600 align-top rounded-[4px] checkbox bordered checkbox-success"
                    onChange={(e) => handleChange(e, row.key)}
                  />
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-center w-full py-5">
        <button
          onClick={() => {
            navigate(`/activities/${activityId}/callSummary`);
          }}
          className=" btn btn-primary px-4 font-semibold !bg-textPrimary"
        >
          SIGN
        </button>
      </div>
    </div>
  );
};

export default ActivityTable;
