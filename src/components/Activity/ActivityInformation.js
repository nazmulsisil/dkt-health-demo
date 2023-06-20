const ActivityInformation = ({ info }) => {
    return (
        <div className="flex flex-col items-start justify-center">
            <ul className="flex flex-col gap-2 text-lg">
                <li>
                    <strong className="box-border inline-block w-32">
                        MD Name:{" "}
                    </strong>
                    <span className=" text-textPrimaryLight">
                        {info.mdName || ""}
                    </span>
                </li>
                <li>
                    <strong className="box-border inline-block w-32">
                        Speciality:{" "}
                    </strong>
                    {info.speciality || ""}
                </li>
                <li>
                    <strong className="box-border inline-block w-32">
                        Location:{" "}
                    </strong>
                    {info.location || ""}
                </li>
                <li>
                    <strong className="box-border inline-block w-32">
                        Visits:{" "}
                    </strong>
                    {info.visits || ""}
                </li>
                <li>
                    <strong className="box-border inline-block w-32">
                        Objective:{" "}
                    </strong>
                    {info.objective || ""}
                </li>
            </ul>
        </div>
    );
};

export default ActivityInformation;
