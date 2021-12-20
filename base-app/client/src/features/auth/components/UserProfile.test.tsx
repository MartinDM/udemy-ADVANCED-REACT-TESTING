import { render, screen, history } from '../../../test-utils';
import { SignIn } from './SignIn';
import { App } from '../../../App';
import { UserProfile } from "./UserProfile";

const testUser = {
    email: "booking@bandname.com"
}

test("greets the user", () => {
    render(<UserProfile />, {
    preloadedState: { user: { userDetails: testUser } },
    });
    expect(
    screen.getByText(/hi, booking@bandname.com/i)
    ).toBeInTheDocument();
});

test("redirects to signin if user is falsy", () => {
const { history } = render(<UserProfile />);
expect(history.location.pathname).toBe("/signin");
});

/*
    Testing routing behaviour instead of implementation details
*/

test("view sign-in page when user not signed in", () => {
    render(<App />, { routeHistory: ['/profile']})
    const heading = screen.getByRole('heading', {
        name: /Sign in to your account /i
    });
    expect(heading).toBeInTheDocument();
});

// FE Testing should be testing the users' interaction

// Testing behaviour:

/*
    To test behaviour, render app with initial route set to /profile
    then check actual text on page

    Testing code vs testing behaviour.

    Testing an implementation is more targetted / more isolated.
    Doesn't test user experience.

Test redirect behaviour when no user signed in:


*/

