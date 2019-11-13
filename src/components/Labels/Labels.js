import React from 'react';

import './Labels.scss';

const Labels = (props) => {
  const { blogItems, getLabel } = props;
  const listOfLabels = blogItems?.map((el) => el.labels)?.flat()?.sort();
  const countedLabels = {};

  listOfLabels && listOfLabels.forEach((el) => {
    if (!countedLabels[el]) {
      countedLabels[el] = 1;
    } else {
      countedLabels[el] += 1;
    }
  });

  const maxLabelCount = Math.max(...Object.values(countedLabels));
  const elementToRender = (elem, fontSize) => (<span className="label__item" style={{ fontSize: `${fontSize}rem` }}>{elem}</span>);
  const divideInto = (num) => Math.round(maxLabelCount / num);
  const formLables = (list) => Object.keys(list).map((el) => {
    // There are 4 different types of styles therefore further I use numbers to dived on 2, 3, 4
    const fontSizeforLargeEl = 1.6;
    const fontSizeForMediumEl = 1.3;
    const fontSizeForSmallEl = 1;
    const fontSizeForExtraSmallEl = 0.7;

    if (list[el] >= divideInto(2)) {
      return elementToRender(el, fontSizeforLargeEl);
    } if (list[el] >= divideInto(3) && list[el] <= divideInto(2)) {
      return elementToRender(el, fontSizeForMediumEl);
    } if (list[el] >= Math.round(maxLabelCount / 4) && list[el] <= divideInto(3)) {
      return elementToRender(el, fontSizeForSmallEl);
    }

    return elementToRender(el, fontSizeForExtraSmallEl);
  });

  const handleClick = ({ target }) => {
    const { innerText } = target;
    getLabel(innerText.toLowerCase());
  };

  return (
    <>
      <div className="label__sectionTitle">Labels</div>
      <div className="label" onClick={handleClick}>{formLables(countedLabels)}</div>
    </>
  );
};

export default Labels;
