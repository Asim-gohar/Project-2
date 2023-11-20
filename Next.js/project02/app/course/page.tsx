import Link from "next/link"
import blog from "../blog/page"
import {FaFacebookF , FaInstagram , FaTwitter , FaLinkedin} from "react-icons/fa"
function course(){
    return(
      <div>
        <section className="Sub-header">
        <nav>
            <a href="index.html" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </a>
            <div className="nav-links" id="navLinks">
                {/* <!-- reposnive bar open and close --> */}
                <i className="fa fa-times" onclick="hideMenu()"></i>
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
            <i className="fa fa-bars" onclick="showMenu()"></i>
            {/* <!-- reposnive bar open and close --> */}
        </nav>
        <h1>Our Courses</h1>
    </section>
    {/* <!-- course start --> */}

<section className="course">
    <h1>Course We Offer</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

    <div className="row">
        <div className="course-col">
            <h3>Undergraduate Programs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
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

{/* <!-- course end -->

<!-- best course start --> */}

<section className="facilities">
    <h1>Best Courses</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

    <div className="row">
        <div className="facilities-col">
            <img src="Images/course1.png" />
            <h3>Web Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
            </p>
        </div>
        <div className="facilities-col">
            <img src="Images/course2.png" alt=""/>
            <h3>Artificial Intelligence</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
            </p>
        </div>
        <div className="facilities-col">
            <img src="Images/course3.png" alt=""/>
            <h3>Data Science</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
            </p>
        </div>
    </div>
</section>

{/* <!-- best courses end -->

<!-- Footer start --> */}
<section className="footer">
    <hr />
    <Link href="/about"><h4>About Us</h4></Link>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
        <br /> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae
        dolorem.
    </p>

    <div className="icons">
    <i className="fab fa-facebook-f"></i><FaFacebookF style={{color:'#1877F2'}}/>
            <i className="fab fa-instagram"></i><FaInstagram style={{color:'#dd2a7b'}}/>
            <i className="fab fa-twitter"></i><FaTwitter style={{color:'#1DA1F2'}}/>
            <i className="fab fa-linkedin"></i><FaLinkedin style={{color:'#0077B5'}}/>
    </div>
    <p>Made with <i className="fas fa-heart"></i> by <a href="#">Sagar Developer</a></p>
    <p>Copyright © 2021 <a href="/">Xplore Skill</a>. All Rights Reserved</p>
</section>
{/* <!-- Footer end --> */}

<script src="script.js"></script>

        </div>
    )

}
export default course