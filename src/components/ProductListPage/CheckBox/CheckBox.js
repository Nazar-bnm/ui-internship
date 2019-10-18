import React from 'react';

const CheckBox = ({ items }) => {
  const checkBoxItems = items.map(({ id, item }) => (
    <div key={id}>
      <input type="checkbox" id={id} value />
      <label htmlFor={item}>{item}</label>
    </div>
  ));

  return (
    <div>
      {checkBoxItems}
    </div>
  );
};

export default CheckBox;

// const FilterArea = ({ title, itemList, handleChange}) => {
//   // itemList = ['s','m', 'l'];
//   const renderList = () => {
//     return itemList.map(el => (
//       <div key={el} onclick={handleChange(title,item)}>
//       <input type="checkbox" id={id} value />
//       <label htmlFor={item}>{item}</label>
//     </div>
//     ))
//   };

//   return (
//     <span className='title'>{title}</span>
//     {renderList()}
//   )
// }
