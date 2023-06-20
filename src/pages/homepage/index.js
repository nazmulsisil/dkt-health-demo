import CustomLayout from "../../components/layout";
import "./homepage.css";
import mockedMessageBoardData from "../../mocks/message-board.json";
import callSumaryJson from "../../mocks/call-summary.json";

const Homepage = () => {
  return (
    <CustomLayout>
      <>
        <div style={{ background: "rgb(0, 68, 116)", padding: "15px" }}>
          <div className="d-flex justify-content-between align-items-center">
            <h1 style={{ color: "white" }}>
              <i
                className="fa-solid fa-hospital-user"
                style={{ color: "rgb(0, 220, 0)" }}
              ></i>{" "}
              Call Summary MTD
              <span style={{ fontSize: "22px" }}> (2023 - CYCLE 01)</span>
            </h1>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "300",
                color: "rgb(213, 213, 213)",
              }}
            >
              Mon, May 22
            </p>
          </div>
          <div className="table-responsive-sm">
            <table
              className="report border-0"
              style={{ fontSize: "18px", textAlign: "left", color: "white" }}
            >
              <thead>
                <td colSpan={1}> </td>
                <td colSpan={3}> Calls Frequency</td>
                <td colSpan={3}> Doctor Reach</td>
                <td colSpan={2}> Ave. Frequency</td>
              </thead>
              <tr>
                <th>Class</th>
                <th>Actual Calls</th>
                <th>Target Calls</th>
                <th>%</th>
                <th>Actual Count</th>
                <th>Target Count</th>
                <th>%</th>
                <th>Ave. Freq</th>
                <th>Target Freq</th>
              </tr>
              {callSumaryJson?.data?.map((callSummary) => (
                <tr style={{ backgroundColor: "rgb(1, 81, 146)" }}>
                  <td>{callSummary?.class}</td>
                  <td>{callSummary?.actualCalls}</td>
                  <td>{callSummary?.targetCalls}</td>
                  <td>{callSummary?.percent1}</td>
                  <td>{callSummary?.actualCount}</td>
                  <td>{callSummary?.targetCount}</td>
                  <td>{callSummary?.percent2}</td>
                  <td>{callSummary?.averageFrequency}</td>
                  <td>{callSummary?.targetFrequency}</td>
                </tr>
              ))}
              <tr
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                <td style={{ color: "greenyellow" }}>TOTAL</td>
                <td style={{ color: "greenyellow" }}>0</td>
                <td style={{ color: "greenyellow" }}>316</td>
                <td style={{ color: "greenyellow" }}>0.00%</td>
                <td style={{ color: "greenyellow" }}>0</td>
                <td style={{ color: "greenyellow" }}>130</td>
                <td style={{ color: "greenyellow" }}>0.00%</td>
                <td style={{ color: "greenyellow" }}>0.0</td>
                <td style={{ color: "greenyellow" }}>1.2</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="flex row gx-3" style={{ padding: "24px", width: "100%", marginBottom: 120 }}>
          <div className="col">
            <div
              style={{
                background: "#e9f1f1",
                marginRight: "24px",
                minWidth: "100%",
                height: "450px",
                overflow: "scroll",
                borderRadius: "20px",
              }}
            >
              <div
                className="container"
                style={{
                  padding: "10px 30px",
                  borderRadius: "20px",
                  backgroundColor: "#e9f1f1",
                  borderRadius: "20px",
                }}
              >
                <h2
                  style={{
                    textAlign: "left",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: "900",
                    fontSize: "28px",
                    color: "#016a68",
                  }}
                >
                  {" "}
                  Message Board
                </h2>
                <hr />
                {mockedMessageBoardData?.data?.map((messageBoard) => (
                  <div className="row">
                    <div className="col col-md-3">{messageBoard?.date}</div>
                    <div className="col col-md-9 mb-2">
                      <h4
                        style={{
                          textAlign: "left",
                          paddingBottom: "5px",
                          marginBottom: 0,
                        }}
                      >
                        {messageBoard?.title}
                      </h4>
                      <span style={{ fontStyle: "italic", fontSize: "16px" }}>
                        from {messageBoard?.from}
                      </span>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col">
            <div
              style={{
                background: "#e9f1f1",
                height: "450px",
                minWidth: "100%",
                overflow: "scroll",
                borderRadius: "20px",
                padding: "10px 30px",
              }}
            >
              <h2
                style={{
                  textAlign: "left",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: "900",
                  fontSize: "28px",
                  color: "#016a68",
                }}
              >
                {" "}
                Reports
              </h2>
              <hr />
              <table style={{ fontSize: "20px" }}>
                <tr>
                  <td style={{ padding: "10px 20px", cursor: "pointer" }}>
                    Call Concentration
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 20px", cursor: "pointer" }}>
                    Call Summary CTD
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 20px", cursor: "pointer" }}>
                    MD Coverage
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 20px", cursor: "pointer" }}>
                    Call Deviation Summary
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 20px", cursor: "pointer" }}>
                    Days in Field
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 20px", cursor: "pointer" }}>
                    Promo Materials Allocation
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 20px", cursor: "pointer" }}>
                    Promo Materials Allocation
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 20px", cursor: "pointer" }}>
                    Promo Materials Allocation
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 20px", cursor: "pointer" }}>
                    Promo Materials Allocation
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </>
    </CustomLayout>
  );
};

export default Homepage;
