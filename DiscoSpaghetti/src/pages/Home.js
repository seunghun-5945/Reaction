import React from 'react';
import '../styles/Home.module.css'; 
import Layout from '../components/Layout';
import { Routes, Route } from 'react-router-dom';
import PopularSong from '../pages/PopularSong';
import PopSong from '../pages/PopSong';
import JpopSong from '../pages/JpopSong';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import InGame from './InGame';
import VideoPlayer from './VideoPlayer';

function Home() {

  const RightMainContent = (
    <img 
      src="/images/discospaghetti.gif"
      alt="Let's DISCO"
      style={{ width: '50%', height: 'auto' }} // 이미지 크기를 조절하는 스타일 적용
    />
  );

  return (
      <Routes>
        <Route path="/" element={<Layout RightMainContent={RightMainContent}/>}/>
        <Route path="/PopularSong" element={<PopularSong/>}/>
        <Route path="/PopSong" element={<PopSong/>}/>
        <Route path="/JpopSong" element={<JpopSong/>}/>
        <Route path="Signin" element={<SignIn/>}></Route>
        <Route path="Signup" element={<SignUp/>}></Route>
        <Route path="InGame" element={<InGame/>}></Route>
        <Route path="VideoPlayer" element={<VideoPlayer/>}></Route>
      </Routes>
  );
}

export default Home;
