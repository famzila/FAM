import React, { useState } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: true,
    };
  }
  componentDidMount() {
    console.log('Component mounted...', this.state.darkMode);
    if (this.darkMode) {
      document.querySelector('html').classList.add('dark');
    } else if (localStorage.theme === 'dark') {
      document.querySelector('html').classList.remove('dark');
    }
  }

  handleSwitchTheme() {
    console.log('SWITCHING THEME ...');
    let htmlClasses = document.querySelector('html').classList;
    if (!this.darkMode) {
      htmlClasses.remove('dark');
    } else {
      htmlClasses.add('dark');
    }
  }

  render() {
    return (
      <div>
        <nav className="border-b dark:border-gray-500 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto flex items-center h-20 w-full justify-between px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 102.4 30"
              width="106"
              height="30"
              role="img"
              aria-hidden="true"
            >
              <path
                fill="#494949"
                d="M65.4 6.9c-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1 8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1zm0 12.9c-2.6 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8c2.6 0 4.8 2.1 4.8 4.7 0 2.7-2.1 4.9-4.8 4.9zM83.4 10.8c-2.3 0-4.2 1.9-4.2 4.2v7.7h-3.5V7.4h3.5v2.4c1-1.5 2.7-2.4 4.5-2.4h1.1v3.4h-1.4zM48.2 7.4L50.8 18l2.9-10.6h3.4l-4.4 15.3h-3.5L46.5 12l-2.7 10.7h-3.5L35.9 7.4h3.4L42.2 18l2.7-10.6zM95 14.4c2.6-1.4 4.1-4.1 4.1-7.1h-3.4c0 2.6-2.1 4.6-4.6 4.6h-.5V0h-3.5v22.7h3.5v-7.2h.4c.4 0 .8.2 1 .5l4.9 6.7h4.2L95 14.4z"
                className="logo-work"
              ></path>{' '}
              <path
                fill="#6fda44"
                d="M27.6 6.9c-3.8 0-6.7 2.5-7.9 6.5-1.8-2.7-3.1-5.7-4-8.8h-4.1v10.6c0 2.1-1.7 3.8-3.8 3.8S4 17.3 4 15.2V4.7H0v10.6c0 4.3 3.5 7.9 7.9 7.9s7.9-3.5 7.9-7.9v-1.8c.8 1.7 1.8 3.3 2.9 4.8L16.2 30h4.2l1.8-8.5c1.6 1.1 3.5 1.7 5.5 1.7 4.5 0 8.1-3.6 8.1-8.1-.1-4.5-3.7-8.2-8.2-8.2zm0 12.2c-1.7-.1-3.3-.7-4.6-1.8l.3-1.6v-.1c.3-1.7 1.3-4.6 4.2-4.6 2.2-.1 4 1.7 4.1 3.9.1 2.2-1.7 4-3.9 4.1l-.1.1z"
              ></path>
            </svg>

            <div className="flex items-center">
              <button className="hidden lg:block px-4 dark:text-white">
                HOW IT WORKS
              </button>
              <button className="hidden lg:block px-4 dark:text-white">
                SOLUTIONS
              </button>
              <button className="hidden lg:block px-4 dark:text-white">
                ENTERPRISE
              </button>
              <button className="px-4 dark:text-white">LOG IN</button>
              <button className="bg-green-500 text-white rounded shadow-md px-4 py-1">
                Sign Up
              </button>
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
        <main className="bg-gray-800 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto py-24 grid grid-cols-2">
            <div>
              <h1 className="py-4 text-green-500 dark:text-yellow-500 font-bold text-6xl">
                In-demand talent on demand.TM <br />{' '}
                <span className="text-white">Upwork is how.TM</span>
              </h1>
              <p className="text-2xl text-white py-4">
                Hire proven pros with confidence using the world’s largest,
                remote talent platform.
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
