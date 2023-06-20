import CustomLayout from "../../components/layout";
import DatePicker from "../../components/DatePicker";
import Table from '../../components/Table'
import doctorImage from "../../assets/images/doctors.png";
import "../homepage/homepage.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import mdListJson from "../../mocks/md-list.json";

const MDList = () => {
  const [searchVal, setSearchVal] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
      setData(mdListJson);
  }, []);

  useEffect(() => {
    if(searchVal){
        const filteredData = mdListJson.filter(({mdName}) => mdName.toLocaleLowerCase().includes(String(searchVal)?.toLocaleLowerCase()))
        setData(filteredData)
        return
    }
    setData(mdListJson)
  },[searchVal])

  const columns = [
      {
          title: "Class",
          dataIndex: "class",
          key: "class",
          render: (text) => <a>{text}</a>,
          sortDirections: ["descend", "ascend"],
          sorter: (a, b) => a.class.localeCompare(b.class),
          className: "class-row",
      },
      {
          title: "MD Name",
          dataIndex: "mdName",
          key: "mdName",
          sortDirections: ["descend", "ascend"],
          sorter: (a, b) => a.mdName.localeCompare(b.mdName),
          filteredValue: [searchVal],
          onFilter: (value, record) =>
              record.mdName
                  .toLocaleLowerCase()
                  .includes(String(value)?.toLocaleLowerCase()),
      },
      {
          title: "Visits",
          dataIndex: "visits",
          key: "visits",
          className: "visits-row",
      },
      {
          title: "Call",
          dataIndex: "call",
          render: (value) =>
              value === true ? (
                <i class="fa fa-check" style={{color: "green"}}></i>
              ) : (
                  <Link to={`/activities/1`}>
                      <i class="fa fa-arrow-right" style={{color: "green"}}></i>
                  </Link>
              ),
      },
  ];
  return (
      <CustomLayout>
          <>
              <div className="p-3 d-flex align-items-center justify-content-between">
                  <DatePicker />
                  <div className="input-group mb-3" style={{ maxWidth: "300px" }}>
                    <input type="text" class="form-control" placeholder="Search" aria-label="search" aria-describedby="search" value={searchVal} onChange={(e) => setSearchVal(e?.target?.value)}/>
                    <span className="input-group-text" id="search">
                    <i className="fa fa-search"></i>
                    </span>
                </div>
              </div>
              <div style={{ textAlign: "center", padding: "12px 0" }}>
                  <img
                      src={doctorImage}
                      style={{ display: "block", margin: "auto", width: "12%" }}
                  />
                  <span style={{ fontWeight: "700", fontSize: "22px" }}>
                      {" "}
                      May 22, 2023
                  </span>
              </div>
              <div style={{marginBottom: 150}}>
                <Table columns={columns} dataSource={data} />
              </div>
          </>
      </CustomLayout>
  );
};

export default MDList;
