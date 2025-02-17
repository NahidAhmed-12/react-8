import React from 'react'
import Title from '../Setup/Text/Title';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Incident3() {
    let naviget = useNavigate()
    const handclick = () => {
      naviget("/next")
    }
  return (
    <>
        <section>
        <section className='NavDoewn'>
            <div className='NavDoewnItem'>
                <div>
                    <div className='flex items-center gap-5'>
                        <div >
                           <p className='h-10 w-10 rounded-full hover:bg-[#b3b3cb] bg-[#E4E4E7] flex items-center justify-center'><i class="fa-solid fa-x  text-[#71717A] hover:text-black"></i></p>
                        </div>
                        <div>
                            <p className='text-[#71717A]'>Home - Incidents - New Incident</p>
                            <Title>New Incident</Title>
                        </div>
                    </div>
                </div>

                <div className=' md:w-[300px] xl:w-[527px] w-full h-1 bg-secondary rounded-[10px]'>
                    <div className='w-[98px] h-1 bg-green-500'>

                    </div>
                </div>

                <div className='flex gap-3'>
                   
                    <button className='btn2' onClick={handclick}>Back</button>
                    <Link to="/next3"> <button className='btn'>Next step</button> </Link>
                </div>
           
            </div>
          </section>

         <section className='flex flex-col justify-center items-center py-7 px-5'>
         <div className='md:w-[752px]'>
            <div >
                <Title>Where’s the incident?</Title>
                <p className='text-sm text-[#71717A] max-w-lg py-2 pb-4'>Enter A GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>
            </div>
            <div className=''>
              <img className='w-full' src="/incidentimg.svg" alt="" />
            </div>
          </div>
         </section>

        </section>
    </>
  )
}

export default Incident3;