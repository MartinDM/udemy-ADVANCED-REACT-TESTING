import { render, fireEvent, screen, history } from '../../../test-utils';
import { NavBar } from './NavBar';
import { App } from '../../../App';
import { UserProfile } from "./UserProfile";

const testUser = {
    email: "booking@bandname.com"
}

test("Routes to sign-in", () => {
    const { history } = render(<NavBar />);
    const signInButton = screen.getByRole('button', { name: /sign in/i});

    fireEvent.click(signInButton);
    
    expect(history.location.pathname).toBe("/signin");
});

/* Behaviour requires us to render <App />*/

test("Clicking sign-in shows sign-in page", () => {
    const { history } = render(<App />);
    const signInButton = screen.getByRole('button', { name: /sign in/i});

    fireEvent.click(signInButton);
    
    expect(screen.getByRole('heading', {
        name: /Sign in to your account/i
    })).toBeInTheDocument();
});

/*
Mock service worker


*/