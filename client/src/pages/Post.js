import React from "react";

const Post = () => {
  return (
    <>
      <section id="post" className="post bg3">
        <div className="container">
          <div className="post">
            <div className="postImg" data-aos="fade-right" data-aos-delay="100">
              <img
                src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/g_face,c_fill,fl_lossy,q_auto:best,w_448,h_382/v1662131321/ComputerScience.org/CompSci_Resources_Top-CS-Trends_FTR_3535db023/CompSci_Resources_Top-CS-Trends_FTR_3535db023.jpg?_i=AA"
                alt=""
              />
            </div>
            <div className="">
              <div className="section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p>Contact Us</p>
              </div>
              <p data-aos="fade-left" data-aos-delay="200">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, vitae? Quaerat voluptatum quis minima fuga explicabo
                aperiam ab sit nam, sint voluptatibus officiis placeat numquam,
                natus reiciendis ducimus quos possimus. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Necessitatibus, id qui nobis
                sit quisquam blanditiis voluptatem, facere in vitae a
                consectetur illum eum sapiente dignissimos molestias maiores
                neque quasi odio?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
