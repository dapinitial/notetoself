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

  describe("when creating a note", () => {
    let testNote = "test note";

    beforeEach(() => {
      app.find("FormControl").simulate("change", {
        target: { value: testNote }
      });
    });

    it("updates the text in state", () => {
      expect(app.state().text).toEqual(testNote);
    });

    describe("and submitting a new note", () => {
      beforeEach(() => {
        app
          .find(".btn")
          .at(0)
          .simulate("click");
      });

      it("adds the new note to state", () => {
        //console.log(app.state());
        expect(app.state().notes[0].text).toEqual(testNote);
      });

      describe("and clicking the clear button", () => {
        beforeEach(() => {
          app
            .find(".btn")
            .at(1)
            .simulate("click");
        });

        it("clears the notes in state", () => {
          //console.log(app.state());
          expect(app.state().notes).toEqual([]);
        });
      });
    });
  });
});
