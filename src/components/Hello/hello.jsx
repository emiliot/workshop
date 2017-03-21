import React, {PropTypes} from 'react';
import classNames from 'classnames/bind';
import Styles from './styles.scss';
const cx = classNames.bind(Styles)

const Hello = ({hello}) => {
  return (
    <div className={cx('app-blue')}>
      <h1>Testing jsx {hello}</h1>
    </div>
  )
}

Hello.propTypes = {
  hello: PropTypes.string.isRequired
}

export default Hello
