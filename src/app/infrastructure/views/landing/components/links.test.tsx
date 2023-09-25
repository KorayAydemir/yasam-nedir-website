import renderer from "react-test-renderer";
import Links from "./links";
import { AllProviders } from "../../../../utils/test-utils";

test("snapshot test", () => {
    expect.assertions(1);

    const comp = renderer.create(
        <AllProviders>
            <Links />
        </AllProviders>
    );

    expect(comp).toMatchSnapshot();
});
