import React from 'react'
import "./projectlist.css"
import linking from '../imgs/linking.png'
import BookingAppImg from '../assets/bookingApp.jpg'


const projectData = [
  {
    id: 0,
    img: "https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg",
    link: "https://github.com/tarunkumar8812/Project_5-Products_Management/tree/Project-5",
    title: "Product Mangement",
    desc: "Created an eCommerce website's backend partwith multiple APIs based on products, users, carts and orders. Here use JWT authentication for protected APIs and also use AWS. Like Amazon and Flipkart etc.",
    stack: "Tech Stack: JavaScript, NodeJS, MongoDB."
  },
  {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2014/10/14/20/14/library-488690__340.jpg",
    link: "https://github.com/tarunkumar8812/Project_3-Book_Management",
    title: "Book Management",
    desc: "Created an Book Management website's backend partwith multiple APIs based on products, users, books and auther. Here use JWT authentication for protected APIs and also use AWS. Like kindle.",
    stack: "Tech Stack: JavaScript, NodeJS, MongoDB."
  },
  {
    id: 2,
    img: "https://blog.hootsuite.com/wp-content/uploads/2020/08/Screen-Shot-2020-08-21-at-11.12.14-AM.png",
    link: "https://github.com/tarunkumar8812/Project_5-Products_Management/tree/Project-5",
    title: "Url Shortner",
    desc: "Created an URL Shortner website's backend partwith multiple APIs based on products, users, carts and orders. Here also use Redis Caching servise. Like Tiny URL.",
    stack: "Tech Stack: JavaScript, NodeJS, MongoDB."
  },
  {
    id: 3,
    img: "https://thumbs.dreamstime.com/b/internship-appretenceship-management-trainee-concept-people-79091934.jpg",
    link: "https://github.com/tarunkumar8812/Project_2-Open_To_Interns",
    title: "Open to Intern",
    desc: "Created an Open to Intern website's backend partwith multiple APIs based on college, student. Here use JWT authentication for protected APIs and also use AWS. Like Internshala etc.",
    stack: "Tech Stack: JavaScript, NodeJS, MongoDB."
  },
  {
    id: 4,
    img: "https://static.toiimg.com/photo/msid-74674451/74674451.jpg",
    link: "https://github.com/tarunkumar8812/6",
    title: "Banking System",
    desc: "Created an Banking System website's backend partwith multiple APIs based on user, users, carts and orders. Here use JWT authentication for protected APIs and also use AWS. Like HDFC Bank.",
    stack: "Tech Stack: JavaScript, NodeJS, MongoDB."
  },
  {
    id: 5,
    img: "https://images04.nicepage.com/feature/461183/website-blog.jpg",
    link: "https://github.com/tarunkumar8812/Project_1-Mini_Blogging_site",
    title: "Blogging Site",
    desc: "Created an Mini Blogging website's backend partwith multiple APIs based on users, author . Here use JWT authentication for protected APIs and also use AWS. Like blogging website.",
    stack: "Tech Stack: JavaScript, NodeJS, MongoDB."
  },
  {
    id: 6,
    img: BookingAppImg,
    link: "https://bookingclient.vercel.app/",
    title: "Booking App",
    desc: "Created an fullstack Hotel Booking website's and in backend partwith multiple APIs based on users, hotel, and room. Here use JWT authentication for protected APIs and also use AWS.",
    stack: "Tech Stack: JavaScript, NodeJS, MongoDB, ReactJS."
  }
]


const ProjectList = () => {
  return (
    <>
      <div className='pricing'>
        <div className='card-container'>
          {projectData.map(x => {
            return (
              <>
                <div key={x.id} className='card'>
                  <div className='project-img'><img src={x.img} alt={x.title}></img></div>

                  <div>
                    <p >{x.stack}</p>
                    <p >{x.desc}</p>
                  </div>
                  <a className='project-link' href={x.link} > {x.title} <img src={linking} alt="link"></img></a>
                </div>
              </>
            )
          })
          }
        </div>
      </div>

    </>



  )
}

export default ProjectList
