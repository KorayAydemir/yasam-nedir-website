import Landing from "./index";
import { AllProviders } from "../../../utils/test-utils";
import { render } from "@testing-library/react";
const ahto = "../../../../../public/assets/images/ahto.png";

test("should render", () => {
    expect.assertions(1);
    const comp = render(
        <AllProviders>
            <Landing />
        </AllProviders>
    );
    expect(comp).toBeTruthy();
});

test("should render the right image", () => {
    expect.assertions(1);
    const comp = render(
        <AllProviders>
            <Landing />
        </AllProviders>
    );

    const bigImage = comp.getByRole("img", { name: "background" });
    expect(bigImage).toHaveAttribute("src", ahto);
});
