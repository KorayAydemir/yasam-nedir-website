import renderer from "react-test-renderer";
import Landing from "./index";
import { AllProviders } from "../../../utils/test-utils";
import { render } from "@testing-library/react";

describe("views > landing", () => {
    it("should render", () => {
        expect.assertions(1);
        const comp = render(
            <AllProviders>
                <Landing />
            </AllProviders>
        );
        expect(comp).toBeTruthy();
    });
    it("should match snapshot", () => {
        expect.assertions(1);
        const comp = renderer.create(
            <AllProviders>
                <Landing />
            </AllProviders>
        );

        const tree = comp.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it.todo("should render the big image");
});
