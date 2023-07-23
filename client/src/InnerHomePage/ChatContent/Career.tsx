import { useState, useEffect } from "react";
import ImperialCollege from "../../assets/icons/ImperialCollege.svg";
import RSAF from "../../assets/icons/RSAF.svg";
export default function Career(): JSX.Element {
  const [showFirstBubble, setShowFirstBubble] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(true);

  console.log("showLoading", showLoading);
  useEffect(() => {
    setShowFirstBubble(true);

    const secondBubbleTimer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    return () => {
      clearTimeout(secondBubbleTimer);
    };
  }, []);

  return (
    <div className="flex flex-col gap-y-4">
      {showFirstBubble && (
        <div className="chat chat-end text-left">
          <div className="chat-header">You</div>
          <div className="chat-bubble bg-primary">
            Share with me your{" "}
            <span className="font-bold text-neutral">career</span> journey so
            far!
          </div>
        </div>
      )}

      {showLoading && (
        <div className="flex px-4">
          <div className="loading loading-dots loading-lg self-start"></div>
        </div>
      )}

      {!showLoading && showFirstBubble && (
        <div className="chat chat-start">
          <div className="chat-header">Gregory</div>
          <div className="chat-bubble bg-neutral my-4">
            <div className="card w-full md:w-96 bg-base-100 shadow-xl text-left">
              <figure>
                <img src={RSAF} alt="RSAF" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-amber-300">
                  Republic of Singapore Air Force (RSAF)
                </h2>
                <p className="underline">Roles</p>
                <ul className="list-decimal px-5">
                  <a className="underline">May 23 - Present</a>
                  <li>
                    Software Engineer @ RSAF Agile innovation Department (RAiD)
                  </li>
                  <br></br>
                  <a className="underline">Oct 20 - Apr 23</a>
                  <li>
                    {" "}
                    OC (Acting) & OIC @ Aircraft Weapons Operations Department
                  </li>
                  <br></br>
                  <a className="underline">May 19 - Sep 20</a>
                  <li> Project Officer @ Aerodynamics Department</li>
                </ul>
                <p className="underline">Awards & Technical Projects</p>
                <ul className="list-decimal px-5">
                  <li>
                    Exemplary Innovator Award in MINDEF IGNITE Awards 2022
                  </li>
                  <br></br>
                  <li>
                    Equipment Management App (VBA): Dashboard and Userform
                    function for rapid computation of wartime decisions
                  </li>
                  <br></br>
                  <li>
                    {" "}
                    Predictive Maintenance Machine Learning Model applied on
                    Aircraft Data: Data extraction through web-parsing of HTML
                    file, logistic regression and K-Nearest Neighbors for
                    predictive failure forecasting
                  </li>
                  <br></br>
                  <li>
                    {" "}
                    Reliability Management of Aircraft Systems using Power BI
                  </li>
                  <br></br>
                  <li>
                    {" "}
                    Key Management Web-App: Accounting of Physical keys within
                    department, utilized streamlit library and data
                    visualizations within Python
                  </li>
                  <br></br>
                  <li>
                    {" "}
                    Telegram Bot for Work Process Reporting: Rapid access to key
                    data for decisionmaking, developed in Python
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
