import React from 'react'

export const SingUp = () => {
  return (
    <div className='mt-4'>
      <div className=' p-10  max-w-[600px] m-auto bg-red-100 rounded-lg'>
        <h1 className='text-2xl text-center mb-5'>Registration </h1>
        <form action="" className='my-3 space-y-8'>
          <div className='lg:flex items-center gap-5'>
            <input type="text" placeholder="Fast-name" className="input input-bordered input-info w-full " required/>
            <input type="text" placeholder="Fast-name" className="input input-bordered input-info w-full  " required/>
          </div>
          <input type="number" placeholder="Your-Number" className="no-spinner input input-bordered input-info w-full  " required/>
          <div>
            <p className='text-lg mb-1'>Your Old : </p>
            <input type="date" placeholder="Your-old" className="no-spinner input input-bordered input-info w-full  " required/>
          </div>
          <div>
            <p className='text-lg mb-1'>Your Gender : </p>
            <div className='flex items-center gap-3'>
              <div className='flex items-center gap-2'>
                <input type="radio" name="radio-5" className="radio radio-success" id='radio-5' />
                <label for="radio-5">Maile</label>
              </div>
              <div className='flex items-center gap-2'>
                <input type="radio" name="radio-5" className="radio radio-success" id='radio-6' />
                <label for="radio-6">Femile</label>
              </div>
            </div>
          </div>
          <div>
            <p className='text-lg mb-1'>Your country :</p>
            <select className="select select-secondary w-full required">
              <option disabled selected>Selected Your country </option>
              <option>Lebanon</option>
              <option>Japan</option>
              <option>Gabon</option>
              <option>Canada</option>
              <option>Bangladesh</option>
              <option>Bahamas, The</option>
              <option>Armenia</option>
              <option>Armenia</option>
            </select>
          </div>
          <div>
            <p className='text-lg mb-1'>Your E-mail: </p>
            <input type="email" placeholder="Your-E-mail" className="no-spinner input input-bordered input-info w-full  " required/>
          </div>
          <button class="btn btn-secondary w-full text-black text-lg font-mono">Registration Now</button>
        </form>
      </div>

    </div>
  )
}
