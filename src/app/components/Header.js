import React from 'react';
import { IoChatboxOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <div className=''>
        <nav className='flex justify-between bg-white p-1'>
          <div className='flex'>
            <span className='text-2xl bg-green-300 rounded-lg'>
              <IoChatboxOutline />
            </span>
            <h1 className='text-2xl text-green-300 '>Chatty Messenger</h1>
          </div>
          <div className='flex text-black font-mono justify-between'>
            <div className='mx-2 relative'>
              <button className='relative group'>
                Privacy
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
            <div className='mx-2 relative'>
              <button className='relative group'>
                Blog
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
            <div className='mx-2 relative'>
              <button className='relative group'>
                Help Center
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
            <div className='mx-2 relative'>
              <button className='relative group'>
                Download
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </div>
        </nav>
        <p className='text-center'>Text-Call-Video</p>
      </div>
    </div>
  );
};

export default Header;
