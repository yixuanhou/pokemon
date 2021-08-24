import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from 'react-router-dom';

import { Header } from './Header';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('Header component', () => {
    it("should render", () => {
        act(() => {
            render(
                <MemoryRouter>
                    <Header />
                </MemoryRouter>,
                container
            );
        });
        expect(container.querySelector('[data-cy=site-name]').textContent).toBe("Pokemon-Demo");
        expect(container.querySelector('[data-cy=menu-item]').textContent).toBe("Home");
    });

});