import renderer from "react-test-renderer";
import Landing from "./index";
import { AllProviders } from "../../../utils/test-utils";

describe("Views > Landing", () => {
    it("should render", () => {
        const comp = renderer.create(
            <AllProviders>
                <Landing />
            </AllProviders>
        );

        const tree = comp.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
