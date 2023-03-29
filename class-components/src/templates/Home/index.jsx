import './styles.css';
import { Component } from "react"
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { loadPosts } from '../../utils/load-posts';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: ''
  }

  timeoutUpdate = null

  async componentDidMount() {
    await this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state

    const postAndPhotos = await loadPosts()
    this.setState({
      posts: postAndPhotos.slice(page, postsPerPage),
      allPosts: postAndPhotos
    })
  }

  loadMorePosts = () => {
    const { posts, postsPerPage, page, allPosts} = this.state

    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

    posts.push(...nextPosts)

    this.setState({posts, page: nextPage})
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ searchValue: value})
  }

  render() {
    const { posts, postsPerPage, page, allPosts, searchValue} = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length

    const filteredPosts = !!searchValue ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
    }) : posts;

    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && <h1>Search Value: {searchValue}</h1>}

          <TextInput
            searchValue={searchValue}
            handleChange={(e) => this.handleChange(e)}
          />
        </div>

        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        {filteredPosts.length === 0 && <p>Não existem Posts!</p>}

        <div className="button-container">
          {!searchValue &&
            <Button
              text="Load more Posts!"
              handleClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          }
        </div>
      </section>
    );
  }
}
