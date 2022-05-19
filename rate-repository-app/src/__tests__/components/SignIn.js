import { SignInContainer } from '../../components/SignIn';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

describe('login Form', () => {
  it('fires onSubmit with provided info', async () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <SignInContainer onSubmit={onSubmit} />
    );
    fireEvent.changeText(getByPlaceholderText('username'), 'kalle');
    fireEvent.changeText(getByPlaceholderText('password'), 'password');
    fireEvent.press(getByText('Login'));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'kalle',
        password: 'password',
      });
    });
  });
});
