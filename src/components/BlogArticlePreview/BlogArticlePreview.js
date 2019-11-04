import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

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
      const response = await userAPI.get(`${process.env.BASE_URL}/blogs`);
      if (response && response.data) {
        this.setState({ blogsList: response.data });
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  renderBrands(blogsList) {
    return blogsList.map((item) => {
      const {
        id,
        photo,
        title,
        description
      } = item;
      return (
        <div key={id} className={`${CN}`}>
          <img
            className={`${CN}__img`}
            alt={title}
            src={photo}
          />
          <div className={`${CN}__text col-8`}>
            <h2 className={`${CN}__title`}>{title}</h2>
            <p className={`${CN}__description`}>{description}</p>
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
        <h3 className="heading">from our blog</h3>
        <div className="blog__wrapper">
          {this.renderBrands(blogsList)}
        </div>
        <button
          type="button"
          className={`${CN}__read-more col-right`}
        >
          read more
        </button>
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
