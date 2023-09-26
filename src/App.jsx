'use client';
import { Button } from 'flowbite-react';
import './App.css'
import React from 'react';
import { Navbar } from 'flowbite-react';

import Atropos from 'atropos/react';
import 'atropos/css'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full'>
        <Navbar
          fluid
          rounded
          className='md:h-[60px] pt-4 md:px-16'
        >
          <Navbar.Brand href="https://flowbite-react.com">
            {/* <img
              alt="Flowbite React Logo"
              className="mr-3 h-6 sm:h-9"
              src="/favicon.svg"
            /> */}
            <span className="self-center  whitespace-nowrap text-xl font-semibold dark:text-white">
              Portfolio
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link
              href="#"
            >
              <p>
                Home
              </p>
            </Navbar.Link>
            <Navbar.Link
              href="#about"
            >
              <p>
                About
              </p>
            </Navbar.Link>
            <Navbar.Link href="#">
              Services
            </Navbar.Link>
            <Navbar.Link href="#portfolio">
              Portfolio
            </Navbar.Link>
            <Navbar.Link href="#">
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
        <div className=' h-[500px] w-full  flex justify-center items-center overflow-hidden  bg-[#d6d6d6]'>
          <div className='pl-16  w-full h-full flex justify-start items-center'>
            <div className=' flex flex-col justify-between items-starts h-[250px] w-full'>
              <p className='font-bold text-3xl raleway'>Hi, I am</p>
              <p className='font-bold text-5xl raleway'>Víctor Morales</p>
              <p className='font-bold text-gray-500 raleway'>FullStack Developer / Computer and Information Technology Technician</p>
              <div className='flex  w-[110px] justify-between'>
                <a target='_blank' href='https://github.com/Alexxanderrx' className='p-2 bg-[#c4c4c4] hover:bg-[#9f9f9f] shadow-md'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/victoralexmorales/' className='p-2 bg-[#c4c4c4] hover:bg-[#9f9f9f] shadow-md'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* <div style={{ borderLeft: "100px solid transparent", borderBottom: "600px solid black" }} className=' border md:w-[60%] w-0 h-full flex justify-center items-start md:visible collapse border-l-0'>
            <img className=' h-[600px]' alt='' src='/person_default.png' />
          </div> */}
        </div>
        {/* </Atropos> */}
        <div id='about' className='text-white md:h-[260px] h-[550px] w-full bg-[#1d1d1d] flex justify-between items-starts flex-col p-12'>
          <p>ABOUT ME:</p>
          <p>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. </p>
          <a href='#' className=' border-x-2 flex justify-center items-center h-[34px] w-[150px] hover:border-2'>READ MORE</a>
        </div>
        <div className=' md:h-[550px] h-[800px] w-full bg-[#d6d6d6] flex justify-center items-center'>
          <div className='flex w-[90%] h-fit flex-wrap justify-center gap-20 '>
            <div className='w-[500px] relative'>
              <img className='' alt='desing.png' src='/desing.png' />
              <b className='absolute top-[20px] left-10 text-xl'>D E S I G N</b>
              <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
            </div>
            <div className='w-[500px] relative'>
              <img className='' alt='development.png' src='/development.png' />
              <b className='absolute top-[20px] left-10 text-xl'>D E V E L O P M E N T</b>
              <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
            </div>
            <div className='w-[500px] relative'>
              <img className='' alt='maintenance.png' src='/maintenance.png' />
              <b className='absolute top-[20px] left-10 text-xl'>M A I N T E N A N C E</b>
              <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
            </div>
          </div>
        </div>
        <div className='border md:h-[3000px] h-[1500px] w-full bg-[#d6d6d6] flex flex-col justify-start items-center'>
          <div id='portfolio' className='my-10 h-[40px] w-[180px] border-4 border-black text-xl raleway font-bold flex justify-center items-center'>
            P O R F O L I O
          </div>
          <section className=' flex w-full justify-center px-20'>
            <div className=' w-[40%]'>
              <Atropos className="my-atropos "
                activeOffset={40}
                shadowScale={0.9}>
                <a href='https://alexxanderrx.github.io/New_repositoriy_01/' target='_blank'><img className='border-2 border-black' alt='blog.gif' src='/blog.gif' /></a>
              </Atropos>
            </div>
            <div className=' flex flex-col justify-around items-center px-8 py-[2%] w-[40%]'>
              <p>A simple blog of a recipe.</p>
              <div className='flex  w-full justify-center gap-6'>
                <div className=' text-center'>
                  <img className='w-[50px]' alt='html5.svg' src='/html5.svg' />
                  <p>HTML5</p>
                </div>
                <div className=' text-center'>
                  <img className='w-[50px]' alt='css3.svg' src='/css3.svg' />
                  <p>CSS3</p>
                </div>
              </div>
            </div>
          </section>

          <section className=' flex w-full justify-center px-20'>
            <div className=' flex flex-col justify-around items-center px-8 py-[2%] w-[40%]'>
              <p>A little page that calculates your age based in the day that you were born.</p>
              <div className='flex  w-full justify-center gap-6'>
                <div className=' text-center'>
                  <img className='w-[50px]' alt='html5.svg' src='/html5.svg' />
                  <p>HTML5</p>
                </div>
                <div className=' text-center'>
                  <img className='w-[50px]' alt='css3.svg' src='/css3.svg' />
                  <p>CSS3</p>
                </div>
                <div className='flex flex-col items-center justify-between'>
                  <img className='w-[50px]' alt='js.svg' src='/js.svg' />
                  <p>JAVASCRIPT</p>
                </div>
              </div>
            </div>
            <div className=' w-[40%]'>
              <Atropos className="my-atropos "
                activeOffset={40}
                shadowScale={0.9}>
                <a href='https://alexxanderrx.github.io/CalcularEdad.github.io/' target='_blank'><img className='border-2 border-black' alt='calcu.gif' src='/calcu.gif' /></a>
              </Atropos>
            </div>
          </section>

          <section className=' flex w-full justify-center px-20'>
            <div className=' w-[40%]'>
              <Atropos className="my-atropos "
                activeOffset={40}
                shadowScale={0.9}
                onEnter={() => console.log('Enter')}
                onLeave={() => console.log('Leave')}
                onRotate={(x, y) => console.log('Rotate', x, y)}>
                <a href='https://alexxanderrx.github.io/TipSelector/' target='_blank'><img className='border-2 border-black' alt='splitter.gif' src='/splitter.gif' /></a>
              </Atropos>
            </div>
            <div className=' flex flex-col justify-around items-center px-8 py-[2%] w-[40%]'>
              <p>A tip calculator that allows users to calculate the amount of tip and total to pay per person in a shared bill..</p>
              <div className='flex w-full justify-center gap-6'>
                <div className=' text-center'>
                  <img className='w-[50px]' alt='html5.svg' src='/html5.svg' />
                  <p>HTML5</p>
                </div>
                <div className=' text-center'>
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

          <section className=' flex w-full justify-center px-20'>
            <div className=' flex flex-col justify-around items-center px-8 py-[2%] w-[40%]'>
              <p>A little page that calculates your age based in the day that you were born.</p>
              <div className='flex  w-full justify-center gap-6'>
                <div className=' text-center'>
                  <img className='w-[50px]' alt='html5.svg' src='/html5.svg' />
                  <p>HTML5</p>
                </div>
                <div className=' text-center'>
                  <img className='w-[50px]' alt='css3.svg' src='/css3.svg' />
                  <p>CSS3</p>
                </div>
                <div className='flex flex-col items-center justify-between'>
                  <img className='w-[50px]' alt='js.svg' src='/js.svg' />
                  <p>JAVASCRIPT</p>
                </div>
              </div>
            </div>
            <div className=' w-[40%]'>
              <Atropos className="my-atropos "
                activeOffset={40}
                shadowScale={0.9}>
                <a href='https://alexxanderrx.github.io/Windbnb_project/' target='_blank'><img className='border-2 border-black' alt='windbnb.gif' src='/windbnb.gif' /></a>
              </Atropos>
            </div>
          </section>

          <section className=' flex w-full justify-center px-20'>
            <div className=' w-[40%]'>
              <Atropos className="my-atropos "
                activeOffset={40}
                shadowScale={0.9}>
                <a href='https://poke-app-weld.vercel.app/' target='_blank'><img className='border-2 border-black' alt='pokegif.gif' src='/pokegif.gif' /></a>
              </Atropos>
            </div>
            <div className=' flex flex-col justify-around items-center py-[2%] w-[40%]'>
              <p>A simple blog of a recipe.</p>
              <div className='flex  w-full justify-center gap-6'>
                <div className=' text-center'>
                  <img className='w-[50px]' alt='html5.svg' src='/html5.svg' />
                  <p>HTML5</p>
                </div>
                <div className=' text-center'>
                  <img className='w-[50px]' alt='css3.svg' src='/css3.svg' />
                  <p>CSS3</p>
                </div>

              </div>
            </div>
          </section>

          <section className=' flex w-full justify-center px-20'>

            <div className=' flex flex-col justify-around items-center px-8 py-[2%] w-[40%]'>
              <p>A little page that calculates your age based in the day that you were born.</p>
              <div className='flex  w-full justify-center gap-6'>
                <div className=' text-center'>
                  <img className='w-[50px]' alt='html5.svg' src='/html5.svg' />
                  <p>HTML5</p>
                </div>
                <div className=' text-center'>
                  <img className='w-[50px]' alt='css3.svg' src='/css3.svg' />
                  <p>CSS3</p>
                </div>
                <div className='flex flex-col items-center justify-between'>
                  <img className='w-[50px]' alt='js.svg' src='/js.svg' />
                  <p>JAVASCRIPT</p>
                </div>
              </div>
            </div>
            <div className=' w-[40%]'>
              <Atropos className="my-atropos "
                activeOffset={40}
                shadowScale={0.9}>
                <a href='https://weather-app-ivory-one.vercel.app/' target='_blank'><img className='border-2 border-black' alt='wheaterApp.jpg' src='/WAgif.gif' /></a>
              </Atropos>
            </div>
          </section>

          <section className=' flex w-full justify-center px-20'>
            <div className=' w-[40%]'>
              <Atropos className="my-atropos "
                activeOffset={40}
                shadowScale={0.9}>
                <a href='https://mp01hosting.000webhostapp.com/' target='_blank'><img className='' alt='university.jpg' src='/university.jpg' /></a>
              </Atropos>
            </div>
            <div className=' flex flex-col justify-around items-center py-[2%] w-[40%]'>
              <p>A simple blog of a recipe.</p>
              <div className='flex  w-full justify-center gap-6'>
                <div className=' text-center'>
                  <img className='w-[50px]' alt='html5.svg' src='/html5.svg' />
                  <p>HTML5</p>
                </div>
                <div className=' text-center'>
                  <img className='w-[50px]' alt='css3.svg' src='/css3.svg' />
                  <p>CSS3</p>
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
