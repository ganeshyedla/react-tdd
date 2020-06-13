import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Gift from './Gift';
import { shallow } from "enzyme";
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
  const app = shallow(<App />);

  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("initializes the `state` with empty list of gifts", () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe("when clicking the `add Gift` button", () => {
    const id = 1;
    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });
    it("adds a new gift to `state`", () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it("adds a new gift to the rendered list", () => {
      expect(app.find(".gift-list").children().length).toEqual(1);
    });
    it('creates a Gift Component',()=>{
      expect(app.find('Gift').exists()).toBe(true)
    });

    describe('and the user wants to remove added the gift',()=>{
      beforeEach(()=>{
        app.instance().removeGift(id);
      });

      it('removes the gift from state',()=>{
        expect(app.state().gifts).toEqual([]);
      });
    });
  
  });

});
