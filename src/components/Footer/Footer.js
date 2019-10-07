import React from 'react';
import ContactDetails from './ContactDetails';
import Linklist from './Linklist';
import { linkListItems, paymentIcons, linkListItemsTablet } from '../../config/footer';
import cx from 'classnames';

import './Footer.scss';

export const CN = 'footer';

const Footer = () => {
  const { guide, help } = linkListItems;

  return (
    <div className={cx(CN)}>
      <div className={`container content ${CN}__desktop`}>
        <div className="col-9">
          <div className="container">
            <div className={`${CN}__section col-3`}>
              <Linklist links={guide} />
            </div>
            <div className={`${CN}__section col-3`}>
              <Linklist links={help} />
            </div>
            <div className={`${CN}__section col-6`}>
              <h3 className={`${CN}__title`}>Twitter</h3>
              <p className={`${CN}__text`}>
                check out the new upcoming phone !! #Valentine’s Day #Australia
                <a
                  className={`${CN}__text ${CN}__link`}
                  href="http://t.co/StOrIs63bd">
                  http://t.co/wRye6rBElN
                </a> - 7 hours ago </p>
              <p className={`${CN}__text`}>
                your solution partner:
                <a className={`${CN}__text ${CN}__link`}
                  href="http://t.co/StOrIs63bd">
                  http://t.co/StOrIs63bd
                </a>
                #IT #websitedevlopment - 8 hours ago
              </p>
            </div>
          </div>
          <div className="container">
            <div className={`${CN}__section col-5`}>
              <h3 className={`${CN}__title`}>About us</h3>
              <p className={`${CN}__text`}>
                One could refuse to pay expensive translators, the European
                languages are members of the same family. Their separate
                existence is a myth. Uses read more
              </p>
            </div>
            <div className={`${CN}__section col-6 col-right`}>
              <div className="container">
                <div className="col-5">
                  <img
                    className={`${CN}__image`}
                    src="src/assets/img/content/map.png"
                    alt="google map">
                  </img>
                </div>
                <div className="col-6 col-center">
                  <h3 className={`${CN}__title`}>Store location</h3>
                  <p className={`${CN}__text`}>
                    Company ltd.co 234 Fake address name, Fake city name,
                    Country 01234 (000) 123 456 xxx
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${CN}__section col-3`}>
          <h3 className={`${CN}__title`}>Facebook</h3>
          <img
            className={`${CN}__image`}
            src="src/assets/img/content/facebook.png">
          </img>
        </div>
      </div>
      <div className={`${CN}__section content ${CN}-tablet`}>
        {linkListItemsTablet.map(({ link, title }) => (
          <div key={title} className={`${CN}-tablet__link`}><a href={link} >
            <h4 className={`${CN}__text`}>{title}</h4>
          </a></div>
        ))}
      </div>
      <div className={`content ${CN}__info ${CN}__connect`}>
        {/* <div>
          Here should be JoinUs Conponent
        </div> */}
        <ContactDetails />
      </div>
      <div className={`content ${CN}__info`}>
        <div className="col-6">
          <h4 className={`${CN}__text`}>
            © 2016 The shop. All rights reserved.
          </h4>
        </div>
        <div className="col-right">
          <div>
            {paymentIcons.map(({ name, link }) => (
              <a href={link} key={name}>
                <i className={`${name} icon big`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
