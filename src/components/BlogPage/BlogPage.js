import React from 'react';
import HttpService from '../../service/HttpService/httpService';

import BlogItem from './BlogItem';
import { Button } from '@/shared';
import Labels from '../Labels';
import { formatDate } from '../../helpers';

import './BlogPage.scss';

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
    const userAPI = new HttpService();
    const blogsURL = `${process.env.SERVER_URL}/blogs`;
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
    const maxSymbolsNumber = 301;

    return blogItemsToRender.map((el, index) => {
      const shortText = `${el.description.slice(0, maxSymbolsNumber)}...`;
      const imageSrc = `${process.env.BLOG_IMAGE_URL}/${el.photo}`;
      const {
        _id,
        title,
        date,
        labels
      } = el;

      const formattedDate = formatDate(date);

      return (
        <BlogItem
          key={_id}
          title={title}
          date={formattedDate}
          photo={imageSrc}
          text={shortText}
          labels={labels}
          className={index === 2 ? null : 'bottom-border'}
        />
      );
    });
  }

  getOlderPosts() {
    const blogItemsPerStep = 3;
    const { currentRangeStart, currentRangeEnd } = this.state;
    const { blogItems } = this.props;
    const itemsNumber = blogItems.length;
    const nextRangeEnd = currentRangeEnd + blogItemsPerStep;

    this.setState({
      currentRangeStart: currentRangeStart + blogItemsPerStep,
      currentRangeEnd: currentRangeEnd + blogItemsPerStep
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
    const { blogItems, getLabel } = this.props;

    return (
      <div className={`${CN} content`}>
        <div className="categories">
          <p>Categories</p>
          <hr />
          <p>Celebrity style (39)</p>
          <p>Fashion shows (15)</p>
          <p>Shopping (27)</p>
          <p>Shopping (119)</p>
        </div>
        <div className="labels__wrapper">
          <Labels blogItems={blogItems} getLabel={getLabel} />
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
