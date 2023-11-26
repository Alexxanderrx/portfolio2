'use client';
import { Button } from 'flowbite-react';
import './App.css'
import React, { useState } from 'react';
import { Navbar } from 'flowbite-react';
import { BrowserView, MobileView } from 'react-device-detect';
import Atropos from 'atropos/react';
import 'atropos/css'
import AtroposSquare from './components/atroposSquare';
import { Transition } from '@headlessui/react';

function App() {
  const [truncate, setTruncate] = useState("truncate")
  // const [isOpen, setIsOpen] = useState(false)
  function openTru() {
    setTruncate("truncate")
    if (truncate == "truncate") {
      setTruncate("")
    }
  }

  return (
    <>
      <div className='w-full'>
        {/* <button onClick={() => setIsOpen(!isOpen)}>Toggle</button> */}
        <Navbar
          fluid
          className='md:h-[60px] pt-4 md:px-16 px-6 sticky top-0 z-10 '
        >
          <Navbar.Brand>
            {/* href="https://flowbite-react.com" */}
            {/* <img
              alt="Flowbite React Logo"
              className="mr-3 h-6 sm:h-9"
              src="/favicon.svg"
            /> */}
            <span className="md:flex  self-center  whitespace-nowrap md:text-xl text-xs font-semibold dark:text-white">
              <p>Víctor Alexander<span className='md:text-black text-white'> &#173;| &#173;</span></p>
              <p> FullStack Web Developer Portfolio</p>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            {/* <Navbar.Link
              href="#"
            >
              <p>
                Home
              </p>
            </Navbar.Link> */}
            <Navbar.Link
              href="#about"
            >
              <p>
                About
              </p>
            </Navbar.Link>
            <Navbar.Link href="#services">
              Services
            </Navbar.Link>
            <Navbar.Link href="#portfolio">
              Portfolio
            </Navbar.Link>
            {/* <Navbar.Link href="#">
              Contact
            </Navbar.Link> */}
          </Navbar.Collapse>
        </Navbar>
        <div className=' md:h-[450px] h-[680px] w-full  flex justify-center items-center overflow-hidden  bg-[#050510]'>
          <div className=' w-full h-full flex md:flex-row flex-col md:justify-between md:items-center justify-between'>
            <div className='md:pl-16 pl-8 pt-8  flex flex-col justify-between items-starts md:h-[250px] h-[300px] md:w-[50%] w-[93%]'>
              <p className='font-bold md:text-3xl raleway text-2xl text-white'>Hi, I am</p>
              <p className='font-bold md:text-5xl raleway text-4xl text-white'>Víctor Morales</p>
              <p className='font-bold text-gray-500 raleway'>FullStack Developer / Computer and Information Technology Technician</p>
              <div className='flex  w-[110px] justify-between'>
                <a target='_blank' href='https://github.com/Alexxanderrx' className='p-2 bg-[#e3e3e3] hover:bg-[#9f9f9f] shadow-md shadow-gray-500'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/victoralexmorales/' className='p-2 bg-[#e3e3e3] hover:bg-[#9f9f9f] shadow-md shadow-gray-500'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* <Transition
              appear={false}
              show={false}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            > */}
            <img className='md:h-full ' src="/cat_pc.png" alt="/cat_pc.png" />
            {/* </Transition> */}
          </div>
          {/* <div style={{ borderLeft: "100px solid transparent", borderBottom: "600px solid black" }} className=' border md:w-[60%] w-0 h-full flex justify-center items-start md:visible collapse border-l-0'>
            <img className=' h-[600px]' alt='' src='/person_default.png' />
          </div> */}
        </div>
        {/* </Atropos> */}
        <div id='about' className=' text-white  w-full bg-[#1d1d1d] flex justify-between items-starts flex-col p-12 py-16'>
          <p className='pb-4 raleway font-semibold'>ABOUT ME:</p>
          <p className={`${truncate} raleway`}>My name is Víctor Alexander Morales Lucero, I'm a web developer from Lima, Perú. I am a graduate of computer science and IT degree from the Jose Pardo Higher Technological Institute and a graduate of the Full Stack Web Development degree at the Funval Fundet International Institute.  </p>
          <div onClick={openTru} className='mt-4 border-x-2 flex justify-center items-center h-[34px] w-[150px] hover:border-2 font-semibold cursor-pointer'>READ MORE</div>
        </div>
        <div id='services' className=' py-20 w-full bg-[#d6d6d6] flex justify-center items-center'>
          <div className='flex w-[90%] h-fit flex-wrap justify-center gap-20 '>
            <div className='w-[500px] relative'>
              <img className='' alt='desing.png' src='/desing.png' />
              <b className='absolute top-[20px] left-10 text-xl'>D E S I G N</b>
              <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
            </div>
            <div className='w-[500px] relative'>
              <img className='' alt='development.png' src='/development.png' />
              <b className='absolute top-[20px] left-10 text-xl'>D E V E L O P M E N T</b>
              <p>I can implement efficient and reliable information systems in web environments..</p>
            </div>
            <div className='w-[500px] relative'>
              <img className='' alt='maintenance.png' src='/maintenance.png' />
              <b className='absolute top-[20px] left-10 text-xl'>M A I N T E N A N C E</b>
              <p>I can provide technical support for computer centers. Act professionally with leadership and foresight.</p>
            </div>
          </div>
        </div>
        <div id='portfolio' className='pt-10  w-full bg-[#050510] flex flex-col justify-start items-center'>
          <div className='mb-20 h-[40px] w-[180px] border-4 border-white text-white text-xl raleway font-bold flex justify-center items-center'>
            P O R F O L I O
          </div>
          <div className='grid md:grid-cols-3 grid-cols-1 w-full md:h-[600px] h-[1800px]'>
            <AtroposSquare srcImg="/blog.jpg"></AtroposSquare>
            <AtroposSquare srcImg="/calcu.jpg"></AtroposSquare>
            <AtroposSquare srcImg="/splitter2.jpg"></AtroposSquare>
            <AtroposSquare srcImg="/pokeApp2.jpg"></AtroposSquare>
            <AtroposSquare srcImg="/wheaterApp.jpg"></AtroposSquare>
            <AtroposSquare srcImg="/university_lobby.jpg"></AtroposSquare>
            {/* 
            <section className=' flex md:flex-row flex-col w-full justify-center items-center  px-10 md:px-20'>
              <div className=' md:w-[45%] w-full'>
                <BrowserView>
                  <Atropos className="my-atropos "
                    activeOffset={40}
                    shadowScale={0.9}>
                    <a href='https://alexxanderrx.github.io/New_repositoriy_01/' target='_blank'><img className='border-2 border-black' alt='blog.gif' src='/blog.gif' /></a>
                  </Atropos>
                </BrowserView>
                <MobileView>
                  <a href='https://alexxanderrx.github.io/New_repositoriy_01/' target='_blank'><img className='border-2 border-black' alt='blog.gif' src='/blog.gif' /></a>
                </MobileView>
              </div>

              <div className=' md:visible collapse flex flex-col justify-around items-center md:px-8 md:py-[2%] w-0 h-0 md:h-full md:w-[45%] md:gap-6'>
                <p>A simple blog of a recipe.</p>
                <div className='flex  w-full justify-center md:gap-6'>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='html5.svg' src='/html5.svg' />
                    <p>HTML5</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='css3.svg' src='/css3.svg' />
                    <p>CSS3</p>
                  </div>
                </div>
              </div>
            </section>

            <section className=' flex md:flex-row flex-col w-full justify-center items-center  px-10 md:px-20'>
              <div className='md:visible collapse flex flex-col justify-around items-center md:px-8 md:py-[2%] w-0 h-0  md:w-[45%] md:gap-6'>
                <p>App that calculates your age based in the day that you were born.</p>
                <div className='flex  w-full justify-center gap-6'>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='html5.svg' src='/html5.svg' />
                    <p>HTML5</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='css3.svg' src='/css3.svg' />
                    <p>CSS3</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='js.svg' src='/js.svg' />
                    <p>JAVASCRIPT</p>
                  </div>
                </div>
              </div>
              <div className=' md:w-[45%] h-fit w-full'>
                <BrowserView>
                  <Atropos className="my-atropos "
                    activeOffset={40}
                    shadowScale={0.9}>
                    <a href='https://alexxanderrx.github.io/CalcularEdad.github.io/' target='_blank'><img className='border-2 border-black' alt='calcu.gif' src='/calcu.gif' /></a>
                  </Atropos>
                </BrowserView>
                <MobileView>
                  <a href='https://alexxanderrx.github.io/CalcularEdad.github.io/' target='_blank'><img className='border-2 border-black' alt='calcu.gif' src='/calcu.gif' /></a>
                </MobileView>
              </div>
            </section>

            <section className=' flex md:flex-row flex-col w-full justify-center items-center  px-10 md:px-20'>
              <div className=' md:w-[45%] w-full'>
                <BrowserView>
                  <Atropos className="my-atropos "
                    activeOffset={40}
                    shadowScale={0.9}>
                    <a href='https://alexxanderrx.github.io/TipSelector/' target='_blank'><img className='border-2 border-black' alt='splitter.gif' src='/splitter.gif' /></a>
                  </Atropos>
                </BrowserView>
                <MobileView>
                  <a href='https://alexxanderrx.github.io/TipSelector/' target='_blank'><img className='border-2 border-black' alt='splitter.gif' src='/splitter.gif' /></a>
                </MobileView>
              </div>
              <div className='md:visible collapse flex flex-col justify-around items-center md:px-8 md:py-[2%] w-0 h-0  md:w-[45%] md:gap-6'>
                <p>A tip calculator that allows users to calculate the amount of tip and total to pay per person in a shared bill.</p>
                <div className='flex w-full justify-center gap-6'>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='html5.svg' src='/html5.svg' />
                    <p>HTML5</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='css3.svg' src='/css3.svg' />
                    <p>CSS3</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='js.svg' src='/js.svg' />
                    <p>JAVASCRIPT</p>
                  </div>
                </div>
              </div>
            </section>

            <section className=' flex md:flex-row flex-col w-full justify-center items-center  px-10 md:px-20'>
              <div className='md:visible collapse flex flex-col justify-around items-center md:px-8 md:py-[2%] w-0 h-0  md:w-[45%] md:gap-6'>
                <p>Web app that allows you to search for a hotel based on the location and number of people.</p>
                <div className='flex  w-full justify-center gap-6'>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='html5.svg' src='/html5.svg' />
                    <p>HTML5</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='css3.svg' src='/css3.svg' />
                    <p>CSS3</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='js.svg' src='/js.svg' />
                    <p>JAVASCRIPT</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='react.svg' src='/react.svg' />
                    <p>REACT</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='vite.svg' src='/vite.svg' />
                    <p>VITE</p>
                  </div>
                </div>
              </div>
              <div className=' md:w-[45%] w-full'>
                <BrowserView>
                  <Atropos className="my-atropos "
                    activeOffset={40}
                    shadowScale={0.9}>
                    <a href='https://alexxanderrx.github.io/Windbnb_project/' target='_blank'><img className='border-2 border-black' alt='windbnb.gif' src='/windbnb.gif' /></a>
                  </Atropos>
                </BrowserView>
                <MobileView>
                  <a href='https://alexxanderrx.github.io/Windbnb_project/' target='_blank'><img className='border-2 border-black' alt='windbnb.gif' src='/windbnb.gif' /></a>
                </MobileView>
              </div>
            </section>

            <section className=' flex md:flex-row flex-col w-full justify-center items-center  px-10 md:px-20'>
              <div className=' md:w-[45%] w-full'>
                <BrowserView>
                  <Atropos className="my-atropos "
                    activeOffset={40}
                    shadowScale={0.9}>
                    <a href='https://poke-app-weld.vercel.app/' target='_blank'><img className='border-2 border-black' alt='pokegif.gif' src='/pokegif.gif' /></a>
                  </Atropos>
                </BrowserView>
                <MobileView>
                  <a href='https://poke-app-weld.vercel.app/' target='_blank'><img className='border-2 border-black' alt='pokegif.gif' src='/pokegif.gif' /></a>
                </MobileView>
              </div>
              <div className=' md:visible collapse flex flex-col justify-around items-center md:px-8 md:py-[2%] w-0 h-0  md:w-[45%] md:gap-6'>
                <p>Pokeapp that consumes an api.</p>
                <div className='grid grid-cols-3  w-full justify-center gap-6'>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='html5.svg' src='/html5.svg' />
                    <p>HTML5</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='css3.svg' src='/css3.svg' />
                    <p>CSS3</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='js.svg' src='/js.svg' />
                    <p>JAVASCRIPT</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='react.svg' src='/react.svg' />
                    <p>REACT</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='nextjs.png' src='/nextjs.png' />
                    <p>NEXT.js</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='nextjs.png' src='/api.png' />
                    <p>API</p>
                  </div>
                </div>
              </div>
            </section>

            <section className=' flex md:flex-row flex-col w-full justify-center items-center  px-10 md:px-20'>
              <div className=' md:visible collapse flex flex-col justify-around items-center md:px-8 md:py-[2%] w-0 h-0  md:w-[45%] md:gap-6'>
                <p>App to know the weather in differents countries.</p>
                <div className='grid grid-cols-4  w-full justify-center gap-6'>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='html5.svg' src='/html5.svg' />
                    <p>HTML5</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='css3.svg' src='/css3.svg' />
                    <p>CSS3</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='js.svg' src='/js.svg' />
                    <p>JAVASCRIPT</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='react.svg' src='/react.svg' />
                    <p>REACT</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='nextjs.png' src='/nextjs.png' />
                    <p>NEXT.js</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='nextjs.png' src='/api.png' />
                    <p>API</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='bootstrap5.png' src='/bootstrap5.png' />
                    <p>BOOTSTRAP5</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='vercel.png' src='/vercel.png' />
                    <p>VERCEL</p>
                  </div>
                </div>
              </div>
              <div className=' md:w-[45%] w-full'>
                <BrowserView>
                  <Atropos className="my-atropos "
                    activeOffset={40}
                    shadowScale={0.9}>
                    <a href='https://weather-app-ivory-one.vercel.app/' target='_blank'><img className='border-2 border-black' alt='wheaterApp.jpg' src='/WAgif.gif' /></a>
                  </Atropos>
                </BrowserView>
                <MobileView>
                  <a href='https://weather-app-ivory-one.vercel.app/' target='_blank'><img className='border-2 border-black' alt='wheaterApp.jpg' src='/WAgif.gif' /></a>
                </MobileView>
              </div>
            </section>

            <section className=' flex md:flex-row flex-col w-full justify-center items-center  px-10 md:px-20'>
              <div className='md:w-[45%] w-full'>
                <BrowserView>
                  <Atropos className="my-atropos "
                    activeOffset={40}
                    shadowScale={0.9}>
                    <a href='https://mp01hosting.000webhostapp.com/' target='_blank'><img className='border-2 border-black' alt='university.gif' src='/university.gif' /></a>
                  </Atropos>
                </BrowserView>
                <MobileView>
                  <a href='https://mp01hosting.000webhostapp.com/' target='_blank'><img className='border-2 border-black' alt='university.gif' src='/university.gif' /></a>
                </MobileView>
              </div>
              <div className=' md:visible collapse flex flex-col justify-around items-center md:px-8 md:py-[2%] w-0 h-0  md:w-[45%] md:gap-6'>
                <p>App for a University with roles and login.</p>
                <div className='grid grid-cols-4  w-full justify-center '>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='html5.svg' src='/html5.svg' />
                    <p>HTML5</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='css3.svg' src='/css3.svg' />
                    <p>CSS3</p>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <img className='w-[50px]' alt='js.svg' src='/js.svg' />
                    <p>JAVASCRIPT</p>
                  </div>
                  <div className='flex flex-col items-center justify-between pt-4'>
                    <img className='w-[50px] ' alt='php8.svg' src='/php8.svg' />
                    <p>PHP8</p>
                  </div>
                  <div className='flex flex-col items-center justify-between pt-4'>
                    <img className='w-[50px] ' alt='tailwind.png' src='/tailwind.png' />
                    <p>TAILWIND</p>
                  </div>
                  <div className='flex flex-col items-center justify-between pt-4'>
                    <img className='w-[50px] ' alt='flowbite.png' src='/flowbite.png' />
                    <p>FLOWBITE</p>
                  </div>
                  <div className='flex flex-col items-center justify-between pt-4'>
                    <img className='w-[50px] ' alt='sql.svg' src='/sql.svg' />
                    <p>SQL</p>
                  </div>
                  <div className='flex flex-col items-center justify-between pt-4'>
                    <img className='w-[50px] ' alt='phpmyadmin.png' src='/phpmyadmin.png' />
                    <p>PHPMYADMIN</p>
                  </div>
                </div>
              </div>
            </section> */}
          </div>
          <div className='bg-black mt-10 w-full h-[43px] flex justify-center items-center'>
            <p className='text-white raleway'>A many more to come!</p>
          </div>
        </div>
        <footer className=' w-full bg-[#1a1a1a] flex flex-col justify-center items-center text-white py-10'>
          <a href='#' className='flex flex-col justify-center items-center animate-bounce'>
            <img className='w-4' alt='arrow.svg' src='/arrow.svg' />
            <b className='mt-2 text-xs raleway'>BACK TO TOP</b>
          </a>

          <div className='mt-6 md:text-base text-xs flex md:flex-row flex-col text-center md:gap-0 gap-2 raleway'>
            <b>@2023
              <a href='https://www.linkedin.com/in/victoralexmorales/'> Víctor Alexander Morales Lucero. &#160;&#160;</a>
            </b>
            <p>All Rights Reserved.</p>
          </div>
        </footer>
      </div >
    </>
  )
}

export default App
