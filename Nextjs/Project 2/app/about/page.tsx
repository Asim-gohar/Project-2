import {FaFacebookF , FaInstagram , FaTwitter , FaLinkedin} from "react-icons/fa"
import contact from "../contact/page"
import Link from "next/link"

export default function about(){
    return(
        <div>
             <section className="Sub-header">
        <nav>
            <a href="index.html" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </a>
            <div className="nav-links" id="navLinks">
                {/* <!-- reposnive bar open and close --> */}
                {/* <i className="fa fa-times" onclick="hideMenu()"></i> */}
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
            {/* <i className="fa fa-bars" onclick="showMenu()"></i> */}
            {/* <!-- reposnive bar open and close --> */}
        </nav>
        <h1>About Us</h1>
    </section>

    {/* <!-- About Us Section Start --> */}

    <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                <a href="#" className="hero_btn btn">EXPLORE NOW</a>
            </div>
            <div className="about-col">
                <img src="Images/about.png" alt=""/>
            </div>
        </div>
    </section>

    {/* <!-- About Us Section end -->

    <!-- Footer Section start --> */}
    <section className="footer">
        <hr/>
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
    {/* <!-- Footer Section end --> */}

    <script src="script.js"></script>
        </div>
    )
}