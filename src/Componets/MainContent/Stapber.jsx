import React from 'react'
import Stepper from '../Setup/Stapper'
import Title from '../Setup/Text/Title';

function Stapber() {
  return (
    <>
      <section className='flex items-center justify-center pb-5'>
        <div>

            <div>
                <div className='flex flex-col justify-center items-center py-6'>
                    <Title>Lets get started</Title>
                    <p className='max-w-lg text-center md:text-start text-[#71717A] py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequatur adipisci molestiae deleniti fugiat, laudantium nam aliquam optio reprehenderit tenetur minima eligendi, neque at ullam iure dolor assumenda iusto quia.</p>
                </div>
            </div>


            <Stepper />
            
           

        </div>
      </section>
    </>
  )
}

export default Stapber