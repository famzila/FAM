import React from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';

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
        <Header />
        <main className="bg-gray-800 dark:bg-gray-900">
          <Banner />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
