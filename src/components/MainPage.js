import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';

function MainPage(props) {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default MainPage;
