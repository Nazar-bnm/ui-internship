import React from 'react';
import HttpService from '../../service/HttpService/httpService';

import BlogItem from './BlogItem';
import { Button } from '@/shared';

import './BlogPage.scss';

const userAPI = new HttpService();
const CN = 'blog-page';

class BlogPage extends React.Component {
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
    const { blogItems } = this.props;
    const blogItemsToRender = blogItems.slice(0, 3);

    return blogItemsToRender.map((el) => {
      const shortText = `${el.description.slice(0, 305)}...`;
      const imageSrc = `${process.env.BLOG_IMAGE_URL}/${el.id}.jpg`;

      return (
        <BlogItem
          title={el.title}
          date={el.date}
          photo={imageSrc}
          text={shortText}
        />
        // add the black border!
      );
    });
  }

  render() {
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
          {/* add pagination on button click! */}
          <Button className="transparent-button">Older posts &gt;</Button>
        </div>
      </div>
    );
  }
}

export default BlogPage;
