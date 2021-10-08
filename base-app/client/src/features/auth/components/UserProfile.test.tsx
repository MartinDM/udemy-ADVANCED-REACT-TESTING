import { render, screen } from '../../../test-utils';
import { UserProfile } from './UserProfile';

const testUser = {
    email: 'hello@user.co.uk'
}

test('greets the user', () => {
    render( <UserProfile />,
            { preloadedState: { user: { userDetails: testUser } } }
    );
    expect( screen.getByText(`hi, ${testUser.email}`)).toBeInTheDocument();
});

test('redirects if user is falsy', () => {
    render( <UserProfile /> );
    expect( screen.queryByText(`hi, ${testUser.email}`)).not.toBeInTheDocument();
});

