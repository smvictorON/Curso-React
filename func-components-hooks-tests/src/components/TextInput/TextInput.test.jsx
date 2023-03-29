import { render, screen } from '@testing-library/react';
import { TextInput } from '.';
import userEvent from '@testing-library/user-event';

describe('<TextInput/>', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="test" />);
    const input = screen.getByPlaceholderText(/Type/i);
    expect(input.value).toBe('test');
  });

  it('should call handlechange fn on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="" />);
    const input = screen.getByPlaceholderText(/Type/i);
    const value = 'search value';

    userEvent.type(input, value);

    expect(input.value).toBe('');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });
});
