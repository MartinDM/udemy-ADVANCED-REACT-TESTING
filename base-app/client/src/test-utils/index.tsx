import { render as rtlRender } from "@testing-library/react";
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { configureStoreWithMiddlewares, RootState } from "../app/store";

type CustomRenderOptions = {
    preloadedState?: RootState;
    routeHistory?: Array<string>;
    initialRouteIndex?: number;
    renderOptions?: Omit<RenderOptions, "wrapper">;
}

// Custom render method

function render(
    ui: ReactElement,
    {  preloadedState = {}, ...renderOptions } = {}
): RenderResult {
    const Wrapper: React.FC = ({children}) => {
        const store = configureStoreWithMiddlewares(preloadedState)
        return <Provider store={store}>{children}</Provider>
    };
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { render };
