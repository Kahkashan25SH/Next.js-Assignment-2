import Link from "next/link";
import React from "react";

const Contact: React.FC = () => {
    return (
      <div className="cont">
       <h1>📲 Contact:</h1>
      <br/>
       <form>
         <input type="text" placeholder="Your Name" /><br />
         <br />
         <input  type="email" placeholder="Your Email" /><br />
         <br />
         <textarea placeholder="Your Message" /><br />
         <br/>
         <button>Submit</button>
       </form>

      </div>
    );
  };
  
  export default Contact;