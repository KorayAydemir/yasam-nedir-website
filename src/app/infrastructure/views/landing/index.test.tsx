import renderer from "react-test-renderer";
import Landing from "./index";
import { Provider } from "react-redux";
import { setupStore } from "../../../../store";
import { BrowserRouter } from "react-router-dom";

describe("Views > Landing", () => {
    it("should render", () => {
        const store = setupStore({});
        const comp = renderer.create(
            <BrowserRouter>
                <Provider store={store}>
                    <Landing />
                </Provider>
            </BrowserRouter>
        );

        const tree = comp.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
