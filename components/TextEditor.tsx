import React from 'react'

const TextEditor = () => {
    return (
        <div className='h-screen flex bg-gray-900 text-white'>
            <div className='w-[25%] hidden lg:block mx-4 my-5 h-min-[40vh] h-[80vh] h-max-[auto] border-2 border-amber-50'>

            </div>
            <div className='w-[75%] d-col justify-start items-center mx-4  h-screen '>
                <div className='h-[80%] w-[90%] mt-5  bg-white border-0 border-amber-100'>
                    ho
                </div>
                <div className='flex w-100 justify-between'>
                    <button className='alt-btn mt-3'>
                        Download
                    </button>
                    <button className='dng-btn mt-3'>
                        Leave Room
                    </button>
                </div>

                <div>

                   
                </div>
            </div>
        </div>
    )
}

export default TextEditor