/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import cx from 'classnames';
import HttpService from '../../service/HttpService/httpService';

import BlogItem from './BlogItem';
import Preloader from '../Preloader';
import { Button } from '@/shared';
import Labels from '../Labels';
import { formatDate } from '../../helpers';
import { blogCategories } from '../../constants';

import './BlogPage.scss';

const CN = 'blog-page';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      category: '',
      currentRangeStart: 0,
      currentRangeEnd: 3,
      isButtonDisabled: false
    };

    this.getOlderPosts = this.getOlderPosts.bind(this);
    this.setCategory = this.setCategory.bind(this);
  }

  componentDidMount() {
    this.getBlogItems();
  }

  componentDidUpdate(prevProps, { category: prevCategory }) {
    const { category } = this.state;

    category !== prevCategory && this.getBlogItems(category);
  }

  async getBlogItems(category) {
    let query = '';
    this.setState({ isLoading: true });
    if (category) {
      query = `?category=${category}`;
    }

    const userAPI = new HttpService();
    const blogsURL = `${process.env.SERVER_URL}/blogs${query}`;
    const { getBlogItemsSuccess, getBlogItemsError } = this.props;

    try {
      const response = await userAPI.get(blogsURL);

      setTimeout(() => this.setState({ isLoading: false }), 500);

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
    const blogItemsToRender = blogItems.slice(
      currentRangeStart,
      currentRangeEnd
    );
    const maxSymbolsNumber = 301;

    return blogItemsToRender.map((el, index) => {
      const shortText = `${el.description.slice(0, maxSymbolsNumber)}...`;
      const imageSrc = `${process.env.BLOG_IMAGE_URL}/${el.photo}`;
      const {
        _id, title, date, labels
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

  setCategory(e) {
    const value = e.target.innerHTML;

    this.setState(({ category: prevCategory }) => ({
      category: prevCategory !== value ? value : ''
    }));
  }

  render() {
    const { isButtonDisabled, isLoading, category } = this.state;
    const { blogItems, getLabel } = this.props;

    const categories = blogCategories.map((categoryName) => (
      <li
        role="button"
        tabIndex={0}
        key={categoryName}
        className={cx('categories__item', {
          'categories__item--hovered': category === categoryName
        })}
        onClick={this.setCategory}
      >
        {categoryName}
      </li>
    ));

    return (
      <div className={`${CN} content`}>
        <div className="categories">
          <p>Categories</p>
          <hr />
          <ul>{categories}</ul>
        </div>
        <div className="labels__wrapper">
          <Labels blogItems={blogItems} getLabel={getLabel} />
        </div>
        <div className={`${CN}__items-wrapper`}>
          {isLoading && (
            <div className={`${CN}--preloader`}>
              <Preloader />
            </div>
          )}
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
