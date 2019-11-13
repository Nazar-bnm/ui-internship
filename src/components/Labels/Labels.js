import React from 'react';
import cx from 'classnames';

import './Labels.scss';

export const CN = 'label';

const Labels = (props) => {
  const { blogItems, getLabel } = props;
  const listOfLabels = blogItems?.map((obj) => obj.labels)?.flat()?.sort();
  const countedLabels = {};

  listOfLabels && listOfLabels.forEach((label) => {
    if (!countedLabels[label]) {
      countedLabels[label] = 1;
    } else {
      countedLabels[label] += 1;
    }
  });

  const maxLabelCount = Math.max(...Object.values(countedLabels));

  const labelElemToRender = (elem, fontSize) => (<span className={`${CN}__item`} style={{ fontSize: `${fontSize}rem` }}>{elem}</span>);

  const divideInto = (num) => Math.round(maxLabelCount / num);

  const formLableSize = () => {
    const fontSizeforLargeEl = 1.6;
    const fontSizeForMediumEl = 1.3;
    const fontSizeForSmallEl = 1;
    const fontSizeForExtraSmallEl = 0.7;

    return (Object.keys(countedLabels).map((el) => {
    // There are 4 different types of styles therefore further I use numbers dived into 2, 3, 4
      if (countedLabels[el] >= divideInto(2)) {
        return labelElemToRender(el, fontSizeforLargeEl);
      } if (countedLabels[el] >= divideInto(3) && countedLabels[el] <= divideInto(2)) {
        return labelElemToRender(el, fontSizeForMediumEl);
      } if (countedLabels[el] >= Math.round(maxLabelCount / 4) && countedLabels[el] <= divideInto(3)) {
        return labelElemToRender(el, fontSizeForSmallEl);
      }

      return labelElemToRender(el, fontSizeForExtraSmallEl);
    }));
  };

  const handleClick = ({ target }) => {
    const { innerText } = target;
    getLabel(innerText.toLowerCase());
  };

  return (
    <div className={cx(CN)}>
      <div className={`${CN}__sectionTitle`}>Labels</div>
      <div className={`${CN}__wrapper`} onClick={handleClick}>{formLableSize(countedLabels)}</div>
    </div>
  );
};

export default Labels;
