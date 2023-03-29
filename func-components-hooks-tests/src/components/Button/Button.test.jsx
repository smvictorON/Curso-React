import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';

const fn = jest.fn();
describe('<Button/>', () => {
  it('should render the button whit text "Load more"', () => {
    render(<Button text="Load more" handleClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
    expect.assertions(1);
  });

  it('should render the button whit class "button"', () => {
    render(<Button text="Load more" handleClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toHaveAttribute('class', 'button');
    expect.assertions(1);
  });

  it('should call fn on button click', () => {
    render(<Button text="Load more" handleClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    fireEvent.click(button);
    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(2);
    expect.assertions(1);
  });

  it('should be disabled when disabled is true', () => {
    render(<Button text="Load more" disabled={true} handleClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
    expect.assertions(1);
  });

  it('should be enabled when disabled is false', () => {
    render(<Button text="Load more" disabled={false} handleClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
    expect.assertions(1);
  });
});
