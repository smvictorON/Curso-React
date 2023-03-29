import { render, screen } from '@testing-library/react';
import { PostCard } from '.';

const mock = {
  title: 'Titulo',
  body: 'Corpo',
  id: 1,
  cover: 'img/img.png',
};

describe('<PostCard/>', () => {
  it('should render poscard correctly', () => {
    render(<PostCard {...mock} />);
    // usado para mostrar o component no console
    // const { debug } = render(<PostCard {...mock} />);
    // debug();

    expect(screen.getByRole('img', { name: 'Titulo' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Titulo' })).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: 'Titulo' })).toBeInTheDocument();
    expect(screen.getByText('Corpo')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...mock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
