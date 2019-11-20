import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import HttpService from '../../service/HttpService/httpService';

import './BlogArticlePreview.scss';

export const CN = 'blog';

class BlogArticlePreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogsList: []
    };
  }

  componentDidMount() {
    this.getBlogs();
  }

  async getBlogs() {
    const userAPI = new HttpService();

    try {
      const response = await userAPI.get(`${process.env.SERVER_URL}/blogs`);
      if (response && response.data) {
        const blogsToRender = [response.data[0], response.data[1]];
        this.setState({ blogsList: blogsToRender });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  renderBrands(blogsList) {
    return blogsList.map((item) => {
      const {
        photo,
        title,
        description
      } = item;
      const maxSymbolsNumber = 50;
      const shortText = `${description.slice(0, maxSymbolsNumber)}...`;
      const imageSrc = `${process.env.BLOG_IMAGE_URL}/${photo}`;

      return (
        <div key={title} className={`${CN}`}>
          <img
            className={`${CN}__img`}
            alt={title}
            src={imageSrc}
          />
          <div className={`${CN}__text`}>
            <h2 className={`${CN}__title`}>{title}</h2>
            <p className={`${CN}__description`}>{shortText}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    const { blogsList } = this.state;
    const { className } = this.props;

    return (
      <div className={cx(CN, className)}>
        <h3 className={`${CN}__heading`}>from our blog</h3>
        <div className="blog__wrapper">
          {this.renderBrands(blogsList)}
        </div>
        <Link to="/blog" className={`${CN}__read-more`}>
          read more
        </Link>
      </div>
    );
  }
}

BlogArticlePreview.propTypes = {
  className: PropTypes.string
};

BlogArticlePreview.defaultProps = {
  className: ''
};
export default BlogArticlePreview;
