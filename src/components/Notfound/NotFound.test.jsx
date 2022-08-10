/* eslint-disable no-undef */
import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import NotFound from "./NotFound";

it("to do snapshot", () => {
  const component = TestRenderer.create(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
  const tree = component.toJson;
  expect(tree).toMatchSnapshot();
});
