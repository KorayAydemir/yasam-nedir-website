import renderer from "react-test-renderer";
import Landing from "./index";

it("should render", () => {
    const comp = renderer.create(<Landing />);

    const tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
});
