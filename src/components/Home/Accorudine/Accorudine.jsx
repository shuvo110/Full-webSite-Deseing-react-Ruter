import React from 'react'

const Accorudine = () => {
    return (
        <div>
             <div className="divider mt-10 text-green-400 text-2xl">Full <span className='font-mono font-bold text-red-500'>Stack Web</span> Developer</div>
            <div className='md:flex items-center justify-around gap-5 px-3'>
                <div className='max-w-[600px]'>
                    <div className="collapse collapse-plus bg-base-200 mt-10">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">What is a developer do?</div>
                        <div className="collapse-content flex items-center gap-4">
                            <p>A software developer is a professional who is responsible for designing and building computer programs. Some may build underlying operating systems, while others may focus only on developing new mobile and desktop applications. They also develop computer games and other digital architecture.Jan 15, 2024</p>
                            <div>
                                <img src="https://i3.ytimg.com/vi/TEOQbkd6sz8/maxresdefault.jpg" alt="" className='max-w-[150px]' />
                            </div>
                        </div>

                    </div>
                    <div className="collapse collapse-plus bg-base-200 my-4">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Who is called developer?</div>
                        <div className="collapse-content flex items-center gap-4">
                            <p>A developer is a technology professional who works on, builds and creates software, websites, applications and other systems. Often, developers require a knowledge of coding to write and debug source code for applications and software effectively.Jul 30, 2024</p>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwrvIfArvHzU2w17080r8ouBlagXUOMLifHHBI0ZDSyTf8nPuNZF0vmDaZc_0clAQg59k&usqp=CAU" alt="" className='max-w-[150px]' />
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200 mb-4">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">ডেভেলপার কি করে?</div>
                        <div className="collapse-content flex items-center gap-4">
                            <p>একজন বিকাশকারী হলেন একজন প্রযুক্তি পেশাদার যিনি সফ্টওয়্যার, ওয়েবসাইট, অ্যাপ্লিকেশন এবং অন্যান্য সিস্টেমে কাজ করেন, তৈরি করেন এবং তৈরি করেন । প্রায়শই, অ্যাপ্লিকেশন এবং সফ্টওয়্যারগুলির জন্য কার্যকরভাবে সোর্স কোড লিখতে এবং ডিবাগ করার জন্য বিকাশকারীদের কোডিং সম্পর্কে জ্ঞান প্রয়োজন।Jul 30, 2024</p>
                            <div>
                                <img src="https://www.shakebugs.com/wp-content/uploads/2022/03/kpi-software-development.png" alt="" className='max-w-[150px]' />
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">What is the definition of a developer?</div>
                        <div className="collapse-content flex items-center gap-4">
                            <p>Definitions of developer. noun. someone who develops real estate (especially someone who prepares a site for residential or commercial use) creator. a person who grows or makes or invents things.</p>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX6guiUNBYLShhNvlLwx6Zy6BfjCjfmJRid09jL9u3QAiUF3Ic-_3YAi2pXfKfoBx3HKI&usqp=CAU" alt="" className='max-w-[150px]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:max-w-[400px]'>
                    <img src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png" alt="" className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default Accorudine