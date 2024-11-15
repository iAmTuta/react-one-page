import React from 'react';
import Header from './components/header/header';
import Text from './components/content-text/content-text';
import Divider from './components/divider/divider';
// import logo from './logo.svg';
import  Contained from './components/cointained-content/contained-content';
// import Social from './components/media/soc-in-scrapped';
import Image from './components/media/Project.png'
import './app.css';

const App = () => (
    <div className="App">
      <Header/>
        <div className='main-wrapper'>
        <Text text='Web developer with a passion for creating engaging, user-centered experiences' type='h1'/>
        <Text text='Hello there, I am Andrew, a Portuguese Full-stack web developer with a passion for creating intuitive and user-friendly digital experiences, I am committed to consistently improving my skills and delivering high-quality work for my clients. I have a strong educational background in front-end development and am proficient in both front-end and back-end technologies, including a variety of programming languages such as C, Java, JavaScript, Python, and TypeScript. My experience includes working as a creative director and computer and visual arts intern at Instituto Camões in Lisbon, where I played a vital role in the production and management of content, leading the creative direction of projects, and conducting thorough quality assessments to ensure project excellence.' type='p'/>
        <Text text='In addition to my technical skills, I also possess strong analytical thinking and problem-solving abilities, allowing me to approach challenges with creative solutions. I am a quick learner with strong adaptability, able to stay current in a fast-paced field and confidently tackle new challenges. My foundation in computer science has equipped me with a strong understanding of the principles and theories of computing, and I am proficient in web development technologies such as HTML, CSS, PHP, Node.js, and Express.js. I also have experience with database management systems including SQL and MySQL.' type='p'/>
        <Text text='Despite my accomplishments and expertise, I am always humble and eager to continue learning and growing in the field. I am grateful for the opportunity to use my skills and education to make a positive impact and dedicated to delivering the best possible results for my clients and employers.' type='p'/>
        {/* Scrapped idea, included in header now */}
        {/* <Social/> */}
        <Divider/>
        <Text text='Innovative Projects' type='h1'/>
        <Text text="I am proud to present a collection of my featured projects, a selection of side projects that I have recently shipped. These projects showcase my skills and abilities as a developer, and I am excited to share them with you. Whether it's a new website, a mobile app, or a custom software solution, I am committed to delivering the best possible results for my clients. Thank you for considering me for your project. I look forward to the opportunity to work with you and bring your ideas to life." type='p'/>
        <Divider/>
        <Contained title ='Personal Portfolio' text='This portfolio showcases my skills and notable projects as a professional in the digital field. I am dedicated to delivering exceptional work in web development, design, and custom digital solutions for my clients.' link='https://github.com/iAmTuta/react-one-page' imagePath={Image}/>
        </div>
    </div>
  );

export default App;
