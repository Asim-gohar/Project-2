import Image from 'next/image'

import Panaverse from "../app/Images/panaverse.png"


export default function Home() {
  const headingStyle:React.CSSProperties = { color: 'blue' };
  const paragraphStyle:React.CSSProperties = { color: 'red' };
  return (
    
      <div>
        Hello World -  Nextjs!

<h1>Hello! This is Asim Butt</h1>
<h2 >Its my first project</h2>
<h3>This is HTML heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>

<h2>HTML Paragraphs</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nihil, doloremque debitis dolorum aliquam cum fugiat accusantium vero neque hic laborum, esse quod odio eligendi ex, error quasi quis cupiditate.</p>

 <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQ_KPsYzaF5Aqrt82aAC9ugY-EDXbjmL9JQ&usqp=CAU" alt="First project" width="300" height="200" />
 <b>Lorem ipsum </b> dolor sit amet, consectetur adipisicing elit. Recusandae saepe dolores doloremque, optio mollitia, repellendus provident veritatis alias, in autem molestias consequuntur nobis ipsa! Fugiat rem maiores praesentium sunt enim.</p>
 
 <h2>HTML Text Formatting</h2>
 <i>This is atalic text</i> <br/>
 <strong>This is strong text</strong> <br/>

 <em>This text is emphasized</em> <br/>

 <small>This is some "smaller" text.</small>
  <h3>mark tag </h3>
 <p>Do not forget to buy <mark>milk</mark> today.</p>

  <h3>del tag</h3>
  <p>My favorite color is <del style={headingStyle}>blue</del> red.</p>

  <h3>HTML ins Element</h3>
  <p>The HTML ins element defines a text that has been inserted into a document. Browsers will usually underline inserted text:</p>
  <p>My favorite color is <del>blue</del> <ins>red</ins>.</p>

  <h3>HTML sub Element</h3>
  <p>The HTML sub element defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font. Subscript text can be used for chemical formulas, like H2O:</p>
  <p>This is <sub>subscripted</sub> text.</p>

  <h3>HTML sup Element</h3>
<p>The HTML sup element defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font. Superscript text can be used for footnotes, like WWW[1]:</p>
  <p>This is <sup>superscripted</sup> text.</p>
  
<h2>HTML Quotation and Citation Elements</h2>
<h3>HTML "blockquote" for Quotations</h3>
<p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
</blockquote>

<h3>HTML "q" for Short Quotations</h3>
<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>

<h3>HTML "abbr" for Abbreviations</h3>
<p><b>The ceo of <abbr title="Presidential initiative artificial intelligence and computing">piaic</abbr> is Zia Khan </b>
<img src='https://i.ytimg.com/vi/m4g0zd4E_bo/mqdefault.jpg' alt='Image' width={500} height={300}/></p>

<h3>HTML "address" for Contact Information</h3>
<address>
Written by <b>Asim Butt</b>.
Visit us at:
<b>Example.com</b>
or <b>Box 564, Disneyland,USA</b>
</address> 

<h3>HTML "cite" for Work Title</h3>
<p><b><cite>Quide-e-Azam zindabad</cite></b> movie by Nabeel Qureshi. Released in 2022.</p>
      
<h3>HTML "bdo" for Bi-Directional Override</h3>

<p>BDO stands for Bi-Directional Override.
The HTML "bdo" tag is used to override the current text direction: "bdo" </p>
<b><bdo dir="rtl">This text will be written from right to left</bdo></b>
     
<h2>HTML Comments</h2>     
<h3>Add Comments</h3>
<p>!-- This is a comment -- after "--" samller and greater than is required </p>

{/* <p>This is a paragraph.</p> */}

{/* <!-- Remember to add more information here --> */}

<h1 style={headingStyle}>A Blue Heading</h1>

<p style={paragraphStyle}>A red paragraph.</p>
<p><img src="/red-p-logo-text_dao_croped.png" alt="Panaverse DAO Logo" /></p>
<a id="skip-to-content" href="#content">Skip to the content.</a>
<h1 id="certified-web-30-and-metaverse-developer-a-nationwide-program-in-karachi-lahore-islamabad-and-peshawar">Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</h1>

<p><img src="/red-p-logo-text_dao_croped.png" alt="Panaverse DAO Logo" /></p>

<h2 id="the-future-of-the-web-is-web-30-metaverse-and-edge-computing-panaverse-dao-is-a-movement-to-spread-these-technolgies-globally-it-is-community-of-web-3-and-metaverse-developers-designers-trainers-startup-founders-and-service-providers">The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</h2>
<Image
        src={Panaverse}
        alt="Panaverse logo"
        width={300} // set the desired width
        height={200} // set the desired height
      />

 

      </div>
   
  )
}
   