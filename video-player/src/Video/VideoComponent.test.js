import React from "react";
import { shallow, mount } from "enzyme";
import { VideoComponent } from "./VideoComponent";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
Enzyme.configure({ adapter: new Adapter() });

test("Renders without crashing", () => {
  shallow(<VideoComponent />);
});

test("Click on play triggers video playing", () => {
  const play = mount(<VideoComponent />);

  // needed to remove jsdom error when testing
  window.HTMLMediaElement.prototype.play = () => {
    /* do nothing */
  };

  expect(play.state("played")).toEqual(false);

  play.find("button").simulate("click");

  expect(play.state("played")).toEqual(true);

  setTimeout(() => {
    expect(play.state("currentTime")).toBeGreaterThan(0);
  }, 2000);
});
