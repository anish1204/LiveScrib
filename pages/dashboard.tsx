import Header from '@/components/Header'
import { useRouter } from 'next/router';
import React, { use, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [roomId, setRoomId] = useState('');
    let router = useRouter();
  
    const createRoom = () => {
      const newRoomId = uuidv4();
      setRoomId(newRoomId);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const pushToRoom = () =>{
        router.push(`documents/${roomId}`)
    }

  return (
    <>
    <Header/>
    <div className='h-screen flex bg-gray-900 text-white'>
        <div className='w-[25%] hidden lg:block mx-4 my-5 h-min-[40vh] h-[80vh] h-max-[auto] border-2 border-amber-50'>

        </div>
        <div className='w-[100%] lg:w-[75%] d-col justify-start pt-15 items-center mx-4 my-5 h-screen '>
            <p className='text-[5vw] mb-10 font-bold'>
                Welcome to LiveScrib
            </p>
           
            <div className='w-100 d-col items-center justify-center'>

            <input className='bg-white w-[60vw] md:w-[85%] placeholder:text-center px-4 placeholder:text-black border-2 rounded py-3' placeholder='Enter Room Id Here....'>
            </input>

            <button className='alt-btn mt-3'>
                Join
            </button> 
            </div>
            <p className='mt-10'>Or</p>
            <div>

            <button onClick={createRoom} className='grn-btn mt-5'>
                Create a New Room
            </button> 
            </div>
              
        </div>
    </div>
    {isModalOpen && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg text-black w-[90%] md:w-[50%]'>
            <h2 className='text-xl font-bold mb-4'>Room Created</h2>
            <p className='mb-4'>Share this Room ID with others to join:</p>
            <p className='text-lg font-mono bg-gray-200 p-2 rounded'>{roomId}</p>
            <div className='flex justify-end mt-4'>
              <button className='alt-btn mr-3' onClick={closeModal}>Close</button>
              <button className='grn-btn' onClick={pushToRoom} >Join Room</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default dashboard