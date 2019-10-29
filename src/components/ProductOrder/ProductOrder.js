import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Dropdown from '../shared/NewDropdown';
import Button from '../shared/Button';

import './ProductOrder.scss';

export const CN = 'product-order';


export default class ProductOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: id.props,
      size: null,
      quantity: 1,
      color: null
    };

    this.createParams = this.createParams.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  createParams(curSize, curQuantity, curColor) {
    return {
      size: curSize, quantity: curQuantity, color: curColor
    };
  }

  handleSizeChange(item) {
    this.setState({ size: item });
  }

  handleColorChange(item) {
    this.setState({ color: item });
  }

  handleQuantityChange(item) {
    this.setState({ quantity: item });
  }


  render() {
    const {
      itemName,
      description,
      price,
      sizes,
      colors,
      quantity,
      addToCart
    } = this.props;

    const [placeholderSize, ...otherSizes] = sizes;
    const [placeholderColor, ...otherColors] = colors;
    const [placeholderQuantity, ...rest] = quantity;

    return (
      <div className={`${CN}`}>
        <h2 className={`${CN}__heading`}>{itemName}</h2>
        <p className={`${CN}__description`}>{description}</p>
        <span className={`${CN}__price`}>{price}</span>
        <div className={`${CN}__dropdowns-wrapper`}>
          <Dropdown
            menuOptions={otherSizes}
            mainLabel="size:"
            placeholder={placeholderSize.value}
            onDropdownChange={this.handleSizeChange}
          />
          <Dropdown
            menuOptions={otherColors}
            mainLabel="color:"
            placeholder={placeholderColor.value}
            onDropdownChange={this.handleColorChange}
          />
          <Dropdown
            menuOptions={rest}
            mainLabel="qty:"
            placeholder={placeholderQuantity.value}
            onDropdownChange={this.handleQuantityChange}
          />
        </div>
        <div className={`${CN}__buttons-wrapper`}>
          <button
            onClick={() => addToCart(this.state)}
            type="button"
            className={`${CN}__cart-btn`}
          >
          add to cart
          </button>
          <Link to="/not_found">
            <Button
              customClass={`${CN}__wishlist-btn`}
              icon="heart"
            >
            wishlist
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

ProductOrder.propTypes = {
  itemName: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.array,
  sizes: PropTypes.array,
  colors: PropTypes.array
};

ProductOrder.defaultProps = {
  itemName: '',
  description: '',
  price: '',
  quantity: [],
  sizes: [],
  colors: []
};
// const ProductOrder = (props) => {
//   const {
//     itemName,
//     description,
//     price,
//     sizes,
//     colors,
//     quantity,
//     addToCart,
//     id
//   } = props;

//   const [placeholderSize, ...otherSizes] = sizes;
//   const [placeholderColor, ...otherColors] = colors;
//   const [placeholderQuantity, ...rest] = quantity;

//   const handleSizeChange = (item) => item;
//   const handleQuantityChange = (item) => item;
//   const handleColorChange = (item) => item;

//   const createParams = (curSize, curQuantity, curColor) => ({
//     id, size: curSize, quantity: curQuantity, color: curColor
//   });

//   const params = createParams();

// return (
//   <div className={`${CN}`}>
//     <h2 className={`${CN}__heading`}>{itemName}</h2>
//     <p className={`${CN}__description`}>{description}</p>
//     <span className={`${CN}__price`}>{price}</span>
//     <div className={`${CN}__dropdowns-wrapper`}>
//       <Dropdown
//         menuOptions={otherSizes}
//         mainLabel="size:"
//         placeholder={placeholderSize.value}
//         onDropdownChange={handleSizeChange}
//       />
//       <Dropdown
//         menuOptions={otherColors}
//         mainLabel="color:"
//         placeholder={placeholderColor.value}
//         onDropdownChange={handleColorChange}
//       />
//       <Dropdown
//         menuOptions={rest}
//         mainLabel="qty:"
//         placeholder={placeholderQuantity.value}
//         onDropdownChange={handleQuantityChange}
//       />
//     </div>
//     <div className={`${CN}__buttons-wrapper`}>
//       <button
//         onClick={() => addToCart(params)}
//         type="button"
//         className={`${CN}__cart-btn`}
//       >
//       add to cart
//       </button>
//       <Link to="/not_found">
//         <Button
//           customClass={`${CN}__wishlist-btn`}
//           icon="heart"
//         >
//         wishlist
//         </Button>
//       </Link>
//     </div>
//   </div>
// );
// };
