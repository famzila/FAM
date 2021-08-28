import React, { Component } from 'react';
import Dropdown from '../Layouts/Dropdown';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navList: [
        { name: 'Home', link: '#' },
        { name: 'Home', link: '#' },
        { name: 'Activities', link: '#' },
        { name: 'Blog', link: '#' },
      ],
      currencyList: [
        { displayValue: 'Euro', key: 'EU', default: true },
        { displayValue: 'Dollar', key: 'Dls', default: false },
      ],
      languageList: [
        { displayValue: 'Arabic', key: 'Arb', default: true },
        { displayValue: 'English', key: 'Eng', default: false },
        { displayValue: 'French', key: 'Fr', default: false },
      ],
    };
  }

  render() {
    return (
      <header>
        <nav className="border-b dark:border-gray-500 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto flex items-center h-20 w-full justify-between px-4">
            <img
              width="182px"
              height="80px"
              src={require('../assets/images/logo.png').default}
              alt="Atlas Mogador"
            />
            <div className="flex items-center">
              {this.state.navList.map((nav, index) => {
                return (
                  <button className="hidden lg:block px-4 dark:text-white">
                    {nav.name}
                  </button>
                );
              })}

              <Dropdown dataList={this.state.currencyList} />
              <Dropdown dataList={this.state.languageList} />

              <button
                id="switchTheme"
                onClick={this.handleSwitchTheme}
                className="h-10 w-10 flex justify-center items-center focus:outline-none text-yellow-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
