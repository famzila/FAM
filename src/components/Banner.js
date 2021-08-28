import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    return (
      <div className="max-w-7xl mx-auto py-24 grid grid-cols-2">
        <div>
          <h1 className="py-4 text-gray-500 dark:text-yellow-500 font-bold text-6xl">
            Welcome to Atlas Mogador <br />{' '}
            <span className="text-white">where you live a unique experience</span>
          </h1>
          <p className="text-2xl text-white py-4">
            Hire proven pros with confidence using the world’s largest, remote
            talent platform.
          </p>
        </div>
      </div>
    );
  }
}
