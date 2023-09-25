import Landing from "./index";
import { AllProviders } from "../../../utils/test-utils";
import { render } from "@testing-library/react";
const ahto = "../../../../../public/assets/images/ahto.png";

const renderComp = () => {
    return render(
        <AllProviders>
            <Landing />
        </AllProviders>
    );
};

test("should render", () => {
    expect.assertions(1);
    const comp = renderComp();

    expect(comp).toBeTruthy();
});

test("should render the right image", () => {
    expect.assertions(1);
    const comp = renderComp();

    const bigImage = comp.getByRole("img", { name: "background" });
    expect(bigImage).toHaveAttribute("src", ahto);
});
