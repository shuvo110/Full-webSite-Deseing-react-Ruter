import React from 'react'

const About = () => {
  const styleHero = {
    backgroundImage: "url(https://i.pinimg.com/originals/d4/81/f3/d481f3c72e283309071f79e01b05c06d.gif)",
  }
  return (
    <div>
      <div>
        <div className="hero lg:h-[400px]">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.pinimg.com/originals/d4/50/cf/d450cfbbb1044e4451e406e3da5f5182.png"
              className="rounded-lg " />
            <div>
              <h1 className="text-3xl font-bold text-green-500">Box Office News!</h1>
              <p className="py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi fuga quisquam quod molestiae, quia accusamus sint! Quia reprehenderit vero quas. Mollitia runt eos, eum at suscipit libero repellendus voluptatum assumenda adipisci harum sequi magni. ......
              </p>
            </div>
          </div>
        </div>
        <div className="hero lg:h-[500px]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/zvmeegi2sskpk75fixml/make-an-animation-video.png"
              className=" rounded-lg" />
            <div>
              <h1 className="text-3xl font-bold text-green-500">Quaerat fugiat ut News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis dolore provident quisquam, unde ullam. Magni facere, soluta aliquam repudiandae quae corporis, molestiae dignissimos ratione animi maiores doloremque error? Repudiandae facere neque asperiores at dicta esse sunt alias cumque sit aspernatur, laboriosam tempora quis optio necessitatibus minus repellat voluptate a qui fugiat harum! Assumenda magnam, laudantium aliquid odit architecto voluptas non rem dolore nam quis sint, esse quo corporis saepe totam asperiores, impedit reiciendis repellendus aspernatur voluptatem dolores nobis vitae dolorum. Magni dignissimos omnis similique rerum, at culpa suscipit inventore. Repudiandae dolore quia nobis inventore quam architecto corporis odio et.
              </p>
            </div>
          </div>
        </div>

        <div
          className="hero"
          style={styleHero}>
          <div className="hero-overlay bg-opacity-60 "></div>
          <div className="hero-content text-neutral-content text-center py-16">
            <div className="max-w-[700px]">
              <h1 className="mb-5 text-5xl font-bold text-red-400">Hello Developers</h1>
              <p className="mb-5">
                WordPress, Woocommerce and Shopify developer Kat Clark + side kicks from time to time. Hello Developers has been helping small businesses, individuals and charities since 2009.

                Not only are our clients from everywhere they are from all different industries and cultures. We have experience with a range of outfits including, but not limited to, hospitality, medical, education, fashion, finance, charities, councils, artists, designers, photographers, agencies, online sales, memberships and bloggers.
              </p>
            </div>
          </div>
        </div>

        <div className="hero lg:h-[500px]">
          <div className="hero-content flex-col lg:flex-row ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TjJDT2uJ6oyHfsi1Tbsg_9XNtwcBxd4Hog&s"
              className="rounded-lg " />
            <div>
              <h1 className="text-3xl font-bold text-green-500">Box Office News!</h1>
              <p className="py-6 lg:max-w-[800px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi fuga quisquam quod molestiae, quia accusamus sint! Quia reprehenderit vero quas. Mollitia runt eos, eum at suscipit libero repellendus voluptatum assumenda adipisci harum sequi magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloremque, commodi aut quibusdam placeat alias perferendis reprehenderit ut velit qui praesentium quo quae distinctio voluptates quia consequatur quas atque exercitationem omnis, aliquam saepe nihil odio? Nobis quos reprehenderit fuga suscipit maiores, accusantium blanditiis non vero sapiente quas expedita. Omnis, facilis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About