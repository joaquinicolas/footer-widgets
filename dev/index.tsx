import * as React from "react";
import * as ReactDOM from "react-dom";

import FooterComponent from "../src";

ReactDOM.render(
    <FooterComponent contactInfo={{mail:"mj@test.com",phone:"12345667890",streetAddress:"test 123",title:"some title" }} tweetData={{tweets:[]}} />,
    document.getElementById("root")
);
