import React from 'react';
import Dropdown from '../Dropdown';

const ProductListNavigation = () => {
  <div className={`${CN}__filter-wrapper-top`}>
    <div className={`${CN}__dropdowns-labels-wrapper`}>
      <span className={`${CN}__dropdowns-labels`}>price</span>
      <Dropdown options={options.company} />
    </div>
    <div className={`${CN}__dropdowns-labels-wrapper`}>
      <span className={`${CN}__dropdowns-labels`}>position</span>
      <Dropdown options={options.company} />
    </div>
    <div className={`${CN}__dropdowns-labels-wrapper`}>
      <span className={`${CN}__dropdowns-labels`}>name</span>
      <Dropdown options={options.company} />
    </div>
    <div className={`${CN}__dropdowns-labels-wrapper`}>
      <span className={`${CN}__dropdowns-labels`}>items on page</span>
      <Dropdown options={options.company} />
    </div>
  </div>

}

    return (
      <div className={`${CN} content`}>
        <div className={`${CN}__filter-wrapper-top`}>
          <div className={`${CN}__dropdowns-labels-wrapper`}>
            <span className={`${CN}__dropdowns-labels`}>price</span>
            <Dropdown options={options.company} />
          </div>
          <div className={`${CN}__dropdowns-labels-wrapper`}>
            <span className={`${CN}__dropdowns-labels`}>position</span>
            <Dropdown options={options.company} />
          </div>
          <div className={`${CN}__dropdowns-labels-wrapper`}>
            <span className={`${CN}__dropdowns-labels`}>name</span>
            <Dropdown options={options.company} />
          </div>
          <div className={`${CN}__dropdowns-labels-wrapper`}>
            <span className={`${CN}__dropdowns-labels`}>items on page</span>
            <Dropdown options={options.company} />
          </div>
        </div>
        <div className={`${CN}__list-items-container`}></div>
        <div className={`${CN}__filter-wrapper-top`}>
          <div className={`${CN}__dropdowns-labels-wrapper`}>
            <span className={`${CN}__dropdowns-labels`}>price</span>
            <Dropdown options={options.company} />
          </div>
          <div className={`${CN}__dropdowns-labels-wrapper`}>
            <span className={`${CN}__dropdowns-labels`}>position</span>
            <Dropdown options={options.company} />
          </div>
          <div className={`${CN}__dropdowns-labels-wrapper`}>
            <span className={`${CN}__dropdowns-labels`}>name</span>
            <Dropdown options={options.company} />
          </div>
          <div className={`${CN}__dropdowns-labels-wrapper`}>
            <span className={`${CN}__dropdowns-labels`}>items on page</span>
            <Dropdown options={options.company} />
          </div>
          <div className={`${CN}__page-switcher`}>1 2 3 4 5 ... 10</div>
        </div>
      </div>
    );
  }
};

export default ProductList;
