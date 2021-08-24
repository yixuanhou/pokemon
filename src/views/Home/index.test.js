import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from 'react-router-dom';

import { Home } from './index';

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

describe('Home component', () => {
    it("should render", () => {
        act(() => {
            render(
                <Router>
                    <Home />
                </Router>,
                container
            );
        });
        expect(container.querySelector('[data-cy="title"]').textContent).toBe("My Pokedex");
    });

});