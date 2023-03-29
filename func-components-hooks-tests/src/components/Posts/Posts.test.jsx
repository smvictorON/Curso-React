import { render, screen } from '@testing-library/react';
import { Posts } from '.';

const mock = {
  posts: [
    {
      title: 'Titulo1',
      body: 'Corpo1',
      id: 1,
      cover: 'img/img1.png',
    },
    {
      title: 'Titulo2',
      body: 'Corpo2',
      id: 2,
      cover: 'img/img2.png',
    },
    {
      title: 'Titulo3',
      body: 'Corpo3',
      id: 3,
      cover: 'img/img3.png',
    },
  ],
};

describe('<Posts/>', () => {
  it('should render posts', () => {
    render(<Posts {...mock} />);

    expect(screen.getAllByRole('heading', { name: /Titulo/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /Titulo/i })).toHaveLength(3);
    expect(screen.getAllByText(/Corpo/i)).toHaveLength(3);
    expect(screen.getByRole('img', { name: /Titulo2/i })).toHaveAttribute('src', 'img/img2.png');
  });

  it('should render with no posts', () => {
    render(<Posts />);

    expect(screen.queryByRole('heading', { name: /Titulo/i })).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts {...mock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
