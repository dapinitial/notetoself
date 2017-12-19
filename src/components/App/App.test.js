import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("App", () => {
  let app = mount(<App />);
  it("renders the app title", () => {
    //console.log(app.debug());
    expect(app.find("h2").text()).toEqual("Note to Self App");
  });
  it("renders the clear button", () => {
    expect(
      app
        .find(".btn")
        .at(1)
        .text()
    ).toEqual("Clear Notes");
  });
  describe("when rendering the form", () => {
    it("creates a form component", () => {
      expect(app.find("Form").exists()).toBe(true);
    });

    it("renders a FormControl component", () => {
      expect(app.find("FormControl").exists()).toBe(true);
    });

    it("renders the submit button", () => {
      expect(
        app
          .find(".btn")
          .at(0)
          .text()
      ).toEqual("Submit");
    });
  });
});
