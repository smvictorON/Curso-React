import { Home } from '.';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';

const handler = [
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'title1',
          body: 'body1',
        },
        {
          userId: 2,
          id: 2,
          title: 'title2',
          body: 'body2',
        },
        {
          userId: 3,
          id: 3,
          title: 'title3',
          body: 'body3',
        },
      ]),
    );
  }),
  rest.get('https://jsonplaceholder.typicode.com/photos', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          url: 'img1.jpg',
        },
        {
          url: 'img2.jpg',
        },
        {
          url: 'img3.jpg',
        },
      ]),
    );
  }),
];

const server = setupServer(...handler);

describe('<Home/>', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should render search, posts and load more', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Não existem Posts!');

    //espera até o elemento ser 'removido' da tela para prosseguir com os tests
    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText('Type your search');
    const images = screen.getAllByRole('img');
    const button = screen.getByRole('button', { name: 'Load more Posts!' });

    expect(search).toBeInTheDocument();
    expect(images).toHaveLength(2);
    expect(button).toBeInTheDocument();
    expect.assertions(3);

    screen.debug();
  });

  it('should search for posts', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Não existem Posts!');

    //espera até o elemento ser 'removido' da tela para prosseguir com os tests
    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText('Type your search');

    expect(screen.getByRole('heading', { name: 'title1' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title2' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title3' })).not.toBeInTheDocument();

    userEvent.type(search, 'title1');

    expect(screen.getByRole('heading', { name: 'title1' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title2' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title3' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Search Value: title1' })).toBeInTheDocument();

    userEvent.clear(search);

    expect(screen.getByRole('heading', { name: 'title1' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title2' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title3' })).not.toBeInTheDocument();

    userEvent.type(search, 'blabla');

    expect(screen.getByText('Não existem Posts!')).toBeInTheDocument();

    expect.assertions(11);

    screen.debug();
  });

  it('should load more posts', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Não existem Posts!');

    //espera até o elemento ser 'removido' da tela para prosseguir com os tests
    await waitForElementToBeRemoved(noMorePosts);

    const button = screen.getByRole('button', { name: 'Load more Posts!' });

    expect(screen.queryByRole('heading', { name: 'title3' })).not.toBeInTheDocument();
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.queryByRole('heading', { name: 'title3' })).toBeInTheDocument();
    expect(button).toBeDisabled();

    expect.assertions(4);

    screen.debug();
  });
});
