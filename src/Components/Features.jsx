import { Fragment, useState } from "react";
import FeaturesBox from "./FeaturesBox";
import icon1 from "../assets/images/icon-access-anywhere.svg";
import icon2 from "../assets/images/icon-collaboration.svg";
import icon3 from "../assets/images/icon-arrow.svg";
import icon4 from "../assets/images/icon-any-file.svg";

export default function Features() {
  const [items, setItems] = useState([
    {
      icon: icon1,
      desc: "this is description ",
      title: "you can do any thing",
    },
    {
      icon: icon2,
      desc: "this is description ",
      title: " we are muslims , we stand with palastine",
    },
    ,
    { icon: icon3, desc: "this is description ", title: "do you know me" },
    { icon: icon4, desc: "this is description ", title: "do the best please" },
  ]);
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 text-white ">
        {items.map((item) => (
          <Fragment key={item.title}>
            <FeaturesBox icon={item.icon} desc={item.desc} title={item.title} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
