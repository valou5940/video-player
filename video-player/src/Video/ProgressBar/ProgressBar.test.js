import React from "react";
import { shallow, mount } from "enzyme";
import { ProgressBar } from "./ProgressBar";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { VideoComponent } from "../VideoComponent";
Enzyme.configure({ adapter: new Adapter() });

test("Click the progressbar change the current video time", () => {
  // const progressBar = mount(
  //   <ProgressBar maxWidth={500} progress={0} onSelectTime={0} />
  // );
  const video = mount(<VideoComponent />);

  expect(video.state("currentTime")).toEqual(0);

  video
    .find("ProgressBar")
    .find("input")
    .simulate("change", { target: { value: 30 } });

  expect(video.state("currentTime")).toBeGreaterThan(0);
});
