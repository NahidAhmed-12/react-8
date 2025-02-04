import React from 'react'
import Title from '../Setup/Text/Title';
import { useNavigate } from 'react-router-dom';

function Error() {
    let naviget = useNavigate()
    const handclick = () => {
      naviget("/")
    }
  return (
    <>
        <section  className='flex justify-center items-center lg:w-[1440px]'>
            <div className='h-screen flex-col gap-5 flex items-center justify-center'>
                <Title>This Page Is Not Modifire sorry</Title>
                <button onClick={handclick} className='btn'>Back</button>
                
            </div>
        </section>
    </>
  )
}

export default Error;
