import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    return (
      <div className="dropdown inline-block relative">
        <button className="dark:bg-white-300 dark:text-black-700 font-semibold py-2 px-4 inline-flex items-center">
          <span className="mr-1">Dropdown</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
          </svg>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
          {this.props.dataList.map((item) => {
            <li className="">
              <a
                className="rounded-t bg-white-200 hover:bg-white-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                {item.displayValue}
              </a>
            </li>;
          })}
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {};

export default Dropdown;
