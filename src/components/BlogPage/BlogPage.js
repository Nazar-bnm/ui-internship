import React from 'react';
import HttpService from '../../service/HttpService/httpService';

import BlogItem from './BlogItem';
import { Button } from '@/shared';

import './BlogPage.scss';

const userAPI = new HttpService();
const CN = 'blog-page';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRangeStart: 0,
      currentRangeEnd: 3,
      isButtonDisabled: false
    };

    this.getOlderPosts = this.getOlderPosts.bind(this);
  }

  componentDidMount() {
    this.getBlogItems();
  }

  async getBlogItems() {
    const blogsURL = `${process.env.BASE_URL}/blogsPage`;
    const { getBlogItemsSuccess, getBlogItemsError } = this.props;

    try {
      const response = await userAPI.get(blogsURL);

      if (response.status === 404) {
        throw Error(response.statusText);
      }
      getBlogItemsSuccess(response.data);
    } catch (error) {
      getBlogItemsError(error);
    }
  }

  getItemsToRender() {
    const { currentRangeStart, currentRangeEnd } = this.state;
    const { blogItems } = this.props;
    const blogItemsToRender = blogItems.slice(currentRangeStart, currentRangeEnd);

    return blogItemsToRender.map((el) => {
      const shortText = `${el.description.slice(0, 301)}...`;
      const imageSrc = `${process.env.BLOG_IMAGE_URL}/${el.id}.jpg`;

      return (
        <BlogItem
          key={el.id}
          title={el.title}
          date={el.date}
          photo={imageSrc}
          text={shortText}
          labels={el.labels}
        />
        // add the black border!
      );
    });
  }

  getOlderPosts() {
    const { currentRangeStart, currentRangeEnd } = this.state;
    const { blogItems } = this.props;
    const itemsNumber = blogItems.length;
    const nextRangeEnd = currentRangeEnd + 3;

    this.setState({
      currentRangeStart: currentRangeStart + 3,
      currentRangeEnd: currentRangeEnd + 3
    });

    window.scrollTo(0, 0);

    if (nextRangeEnd > itemsNumber) {
      this.setState({
        isButtonDisabled: true
      });
    }
  }

  render() {
    const { isButtonDisabled } = this.state;

    return (
      <div className={`${CN} content`}>
        <div className="categories">
          Categories
          <br />
          Celebrity style (39)
          <br />
          Fashion shows (15)
          <br />
          Shopping (27)
          <br />
          Shopping (119)
        </div>
        <div className="labels__wrapper">
          labels, labels, labels
        </div>
        <div className={`${CN}__items-wrapper`}>
          {this.getItemsToRender()}
          <Button
            disabled={isButtonDisabled}
            className="transparent-button"
            onClick={this.getOlderPosts}
          >
            Older posts &gt;
          </Button>
        </div>
      </div>
    );
  }
}

export default BlogPage;
