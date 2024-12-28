import React from 'react'

const Contact = () => {
  return (
    <div className='py-6 px-2'>
      <h1 className='text-center text-lg md:text-4xl font-serif font-bold'>Contact Us</h1>
      <div className='lg:flex items-center justify-center py-16 lg:py-20  gap-3'>
        <div className='grid md:grid-cols-2 max-w-[800px] gap-4'>
          <div className='border p-2'>
            <h1 className='text-lg font-serif font-semibold'>Welcome Message</h1>
            <p>"Get in touch with us! Whether you have questions, need support, or want to provide feedback, we're here to help. Your message matters to us."</p>
          </div>
          <div className='border p-2'>
            <h1 className='text-lg font-serif font-semibold'>Welcome Message</h1>
            <p>"Get in touch with us! Whether you have questions, need support, or want to provide feedback, we're here to help. Your message matters to us."</p>
          </div>
          <div className='border p-2'>
            <h1 className='text-lg font-serif font-semibold'>Welcome Message</h1>
            <p>"Get in touch with us! Whether you have questions, need support, or want to provide feedback, we're here to help. Your message matters to us."</p>
          </div>
          <div className='border p-2'>
            <h1 className='text-lg font-serif font-semibold'>Welcome Message</h1>
            <p>"Get in touch with us! Whether you have questions, need support, or want to provide feedback, we're here to help. Your message matters to us."</p>
          </div>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdygMgqUtIyU4aM7dqFJ4EGbKfS3Bi5MRiVA&s" alt="" className='m-auto mt-5 lg:mt-0' />
        </div>
      </div>
      <div className='lg:flex items-center justify-center py-16 lg:py-20 gap-5 bg-slate-100'>
        {/* form */}
        <form className='space-y-3 lg:max-w-[400px]'>
          <input type="text" placeholder="Fast-name" className="input input-bordered input-accent w-full  focus:outline-none" required />
          <input type="text" placeholder="Last-name" className="input input-bordered input-accent w-full  focus:outline-none" required />
          <input type="email" placeholder="Your-Email" className="input input-bordered input-accent w-full  focus:outline-none" required />
          <input type="phone" placeholder="Your-Number" className="input input-bordered input-accent w-full  focus:outline-none" required />
          <textarea className="textarea textarea-secondary w-full focus:outline-none resize-none" placeholder="Bio"></textarea>
          <button className="btn btn-outline btn-secondary w-full">Submit</button>
        </form>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS81pxtqceAS-wk-L-Krfd3nlw438D2eFyzLsvG-6A1k50tpqkE1tspXWd9pcqJGryrGQ&usqp=CAU" alt="" className='m-auto lg:m-0 my-5 md:mt-0' />
      </div>
      <div className="divider divider-info mt-9">Social Media</div>
      <div className='lg:flex items-center justify-center'>
        <div className='text-center text-lg lg:text-2xl font-bold space-y-5 py-10'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='border p-8'>
              <a href="#"><i className="fa-brands fa-facebook border  p-3 border-green-500 rounded-full hover:border-red-400 text-[#1877F2]"></i></a>
              <h1>Facebook</h1>
            </div>
            <div className='border p-8'>
              <a href="#"><i className="fa-brands fa-twitter border  p-3 border-green-500 rounded-full hover:border-red-400 text-[#24A1DE]"></i></a>
              <h1>twitter</h1>
            </div>
            <div className='border p-8'>
              <a href="#"><i className="fa-brands fa-instagram border  p-3 border-green-500 rounded-full hover:border-red-400 text-[#FCAF45]"></i></a>
              <h1>instagram</h1>
            </div>
            <div className='border p-8'>
              <a href="#"><i className="fa-brands fa-github border  p-3 border-green-500 rounded-full hover:border-red-400"></i></a>
              <h1>github</h1>
            </div>
          </div>
        </div>
        <img src="https://img.freepik.com/premium-vector/group-people-are-standing-around-social-media-post_895273-5.jpg" alt="" />
      </div>
    </div>
  )
}

export default Contact