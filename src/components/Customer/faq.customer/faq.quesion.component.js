// import React from "react";
// import "./style.css";
// function CustomerFaq() {
//   return (
//     <div className=" ">
//       <h1> Customer Faq </h1>
//     </div>
//   );
// }

// export default CustomerFaq;

import React, { useState } from "react";
import { Typography } from "antd";
import "./style.css";

import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

const FaqQuestionComponent = ({ question, answer }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="question" onClick={toggleShowMore}>
        {showMore ? (
          <div>
            <Paragraph className="bold">{question}</Paragraph>
            <Paragraph className="text">{answer}</Paragraph>
          </div>
        ) : (
          <Paragraph ellipsis={{ rows: 2 }} className="bold">
            {question}
          </Paragraph>
        )}
        <div>{showMore ? <MinusOutlined /> : <PlusOutlined />}</div>
      </div>
    </>
  );
};

export default FaqQuestionComponent;
