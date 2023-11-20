import Image from 'next/image';
import {FaFacebookF , FaInstagram , FaTwitter , FaLinkedin} from "react-icons/fa"
// import Header from './components/header/header';
import "@/app/style.css"
import course from './course/page';
import contact from './contact/page';
import blog from './blog/page';
import about from './about/page';
import Link from 'next/link';

export default function Home() {
  return (
    <main >
       <section className="header">
        <nav>
            <a href="index.html" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </a>
            <div className="nav-links" id="navLinks">
                {/* <!-- Reposnive bar open and close --> */}
                <i className="fa fa-times" onClick="hideMenu()"></i>
                <ul>
                    <Link href="/">
                    <li><a href="index.html">Home</a></li>
                        </Link>
                    <Link href='course'> 
                        <li><a href="course.html">Course</a></li>
                        </Link>
                    <Link href="blog">
                        <li><a href="blog.html">Blog</a></li>
                        </Link>
                    <Link href="about">    
                    <li><a href="about.html">About</a></li>
                        </Link>
                    <Link href="contact">
                    <li><a href="contact.html">Contact</a></li>
                        </Link>
                </ul>
            </div>
            <i className="fa fa-bars" onClick="showMenu()"></i>
            {/* <!-- Reposnive bar open and close --> */}
        </nav>

        <div className="text_box">
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                <br/> esse blanditiis in quae perspiciatis quo.
            </p>
            <a href="#" className="hero_btn">Visit Us To Know More</a>
        </div>
    </section>

    
    {/* <!-- Course Section Start --> */}
    <section className="course">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br/> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="course-col">
           
            <h3>Undergraduate Programs</h3>
            
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non.</p>
            </div>
            <div className="course-col">
                <h3>Graduate Programs</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non.</p>
            </div>
            <div className="course-col">
                <h3>Adult Learning & Degree Completion</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non.</p>
            </div>
        </div>
    </section>

    {/* <!-- Campus Section Start--> */}

<section className="campus">
    <div className="PageBlock">
        <div className="verticalLine"></div>
        <div className="Clear"></div>
    </div>
    <h1>TAKE OUR VIRTUAL TOUR</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

    <div className="row">
        <div className="campus-col">
            <img src="/images/Campus1.png" alt=""/>
            <div className="layer">
                <h3>DELHI</h3>
            </div>
        </div>
        <div className="campus-col">
            <img src="/images/Campus2.png" alt=""/>
            <div className="layer">
                <h3>HYDERABAD</h3>
            </div>
        </div>
        <div className="campus-col">
            <img src="images/Campus3.png" alt=""/>
            <div className="layer">
                <h3>MUMBAI</h3>
            </div>
        </div>
    </div>
</section>


{/* <!-- Facilities Section Start --> */}
    <section className="facilities">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="facilities-col">
                <img src="images/libary.png" alt=""/>
                <h3>Best Libary</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div className="facilities-col">
                <img src="images/playground.png" alt=""/>
                <h3>Athletics</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div className="facilities-col">
                <img src="images/food.png" alt=""/>
                <h3>Tasty and Healthy Food</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
        </div>
    </section>

    {/* <!-- Facilities Section End --> */}

    {/* <!-- Testimonials Section Start --> */}
    <section className="testimonials">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="testimonials-col">
                <img src="images/user.png" alt="oo.."/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
            </div>
            <div className="testimonials-col">
                <img src="images/user.png" alt="oo.."/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-alt"></i>
                </div>
            </div>
        </div>

        {/* <!-- Testimonials Section End -->

    <!-- Call To Action Section Start --> */}
    <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <a href="/contact" className="hero_btn">CONTACT US</a>
    </section>
    {/* <!-- Call To Action Section End --> */}

    {/* <!-- Footer Section Start --> */}
    <section className="footer">
        <hr/>
        <Link href="/about"><h4>About Us</h4></Link>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
            Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.
        </p>

        <div className="icons">
        <i className="fab fa-facebook-f"></i><FaFacebookF style={{color:'#1877F2'}}/>
            <i className="fab fa-instagram"></i><FaInstagram style={{color:'#dd2a7b'}}/>
            <i className="fab fa-twitter"></i><FaTwitter style={{color:'#1DA1F2'}}/>
            <i className="fab fa-linkedin"></i><FaLinkedin style={{color:'#0077B5'}}/>
        </div>
        <p>Made with <i className="fas fa-heart"></i> by <a href="index.html">Sagar Developer</a></p>
        <p>Copyright © 2021 <a href="/">Xplore Skill</a>. All Rights Reserved</p>
    </section>
    {/* <!-- Footer Section End --> */}

    <script src="script.js"></script>
    </section>
    </main>
  )
}

