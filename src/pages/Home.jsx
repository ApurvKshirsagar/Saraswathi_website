
import React, { useState, useRef } from 'react';
import '../styles/Home.css';
import Secretary_card from '../components/Secretary_card';
import Achievers from '../components/Achievers';
import Board from '../components/Board';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const [showMore, setshowMore] = useState(false);
  const noticeBoardRef = useRef(null);

  const secretaries = [
    { name: 'Apurv Kshirsagar', position: 'Technical Secretary' },
    { name: 'Naveen Kumar M', position: 'Hostel Legislature' },
    { name: 'Yashwardhan', position: 'General Secretary' },
    { name: 'Mahavir', position: 'Literary Secretary' },
    { name: 'Srujan', position: 'Social Secretary' },
    { name: 'Ajay', position: 'Sports Secretary' },
    { name: 'Sasank', position: 'Health and Hygiene Secretary' },
  ];
  const achievers = [
    {
      name: 'Apurv Kshirsagar',
      tournament: 'Inter Hostel Cricket Tournament',
      position: 'Winner',
      imageUrl: 'src/assets/achiever.png',
    },
    {
      name: 'Apurv Kshirsagar',
      tournament: 'Inter Hostel Cricket Tournament',
      position: 'Winner',
      imageUrl: 'src/assets/achiever.png',
    },
    {
      name: 'Apurv Kshirsagar',
      tournament: 'Inter Hostel Cricket Tournament',
      position: 'Winner',
      imageUrl: 'src/assets/achiever.png',
    },
    {
      name: 'Apurv Kshirsagar',
      tournament: 'Inter Hostel Cricket Tournament',
      position: 'Winner',
      imageUrl: 'src/assets/achiever.png',
    },
    {
      name: 'Apurv Kshirsagar',
      tournament: 'Inter Hostel Cricket Tournament',
      position: 'Winner',
      imageUrl: 'src/assets/achiever.png',
    },
    {
      name: 'Apurv Kshirsagar',
      tournament: 'Inter Hostel Cricket Tournament',
      position: 'Winner',
      imageUrl: 'src/assets/achiever.png',
    },
    {
      name: 'Apurv Kshirsagar',
      tournament: 'Inter Hostel Cricket Tournament',
      position: 'Winner',
      imageUrl: 'src/assets/achiever.png',
    },
    {
      name: 'Apurv Kshirsagar',
      tournament: 'Inter Hostel Cricket Tournament',
      position: 'Winner',
      imageUrl: 'src/assets/achiever.png',
    },
  ];
  ('rgba(206, 10, 112, 1)');
  const boards = [
    {
      color1: 'rgba(206, 10, 112, 1)',
      color2: 'rgba(254, 201, 76, 1)',
      content: 'We won Techsoc',
    },
    {
      color1: 'rgba(82, 161, 255, 1)',
      color2: 'rgba(231, 62, 250, 1)',
      content: 'We won Techsoc',
    },
    // {
    //   color1: 'rgba(76, 0, 130, 1)',
    //   color2: 'rgba(255, 0, 255, 1)',
    //   content: 'We won Techsoc',
    // },
    // {
    //   color1: 'rgba(0, 0, 255, 1)',
    //   color2: '(0, 255, 255, 1)',
    //   content: 'We won Techsoc',
    // },
    // {
    //   color1: 'rgba(0, 255, 0, 1)',
    //   color2: 'rgba(0, 128, 0, 1)',
    //   content: 'We won Techsoc',
    // },
    // {
    //   color1: 'rgba(255, 0, 0, 1)',
    //   color2: 'rgba(255, 255, 0, 1)',
    //   content: 'We won Techsoc',
    // },
  ];
  const displayedAchievers = showMore ? achievers : achievers.slice(0, 6);

  const handleScrollDown = () => {
    noticeBoardRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='Home'>
      <Navbar />
      <div className='welcome'>
        <h1>Welcome to Saraswathi Hostel!</h1>
        <h2>From study nights to weekend fun we've got you covered :)</h2>
        <div className='scroll' onClick={handleScrollDown}>
          <img src='src/assets/scroll.svg' alt='scroll' />
          <h2>Scroll Down</h2>
        </div>
      </div>
      <div className='noticeboard' ref={noticeBoardRef}>
        <h1>Notice Board</h1>
        <div className='board-container'>
          {boards.map((board, index) => (
            <Board
              key={index}
              color1={board.color1}
              color2={board.color2}
              content={board.content}
            />
          ))}
        </div>
      </div>
      <div className='meet'>
        <h1>Meet Our Secretaries</h1>
        <div className='card-container'>
          {secretaries.map((secretary, index) => (
            <Secretary_card
              key={index}
              name={secretary.name}
              position={secretary.position}
            />
          ))}
        </div>
      </div>
      <div className='achievers'>
        <h1>Our Achievers</h1>
        <div className='achiever-container'>
          {displayedAchievers.map((achiever, index) => (
            <Achievers
              key={index}
              name={achiever.name}
              tournament={achiever.tournament}
              position={achiever.position}
              imageUrl={achiever.imageUrl}
            />
          ))}
        </div>
        <div className='show-button'>
          {achievers.length > 6 && !showMore && (
            <button className='show' onClick={() => setshowMore(true)}>
              Show more <img src='src/assets/down.svg' alt='Down Arrow' />
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;