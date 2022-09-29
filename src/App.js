import './App.css';
import python1 from "./static/python4.png"
import java1 from "./static/java4.png"
import mern1 from "./static/mern4.png"
import bgr from "./static/myphoto.jpg"

import creat_icon from "./static/creative2.png"
import linkedin from "./static/linkedin.png"
import gshop from "./static/game_shop_java.jpg"
import yum from "./static/yum_react6.gif"
import gedata from "./static/gedata.jpg"

function App() {
  return (
    <div className='main'>
     
      <div className='header'>
        <div className="name-text">
          GEORGE GRIGOLAYA
        </div>
      </div> 

      <div className='description'>
        <div className='desc-text'>
          <div id="desc-title">FULL STACK <br></br>SOFTWARE<br></br>DEVELOPER</div>
            <p id="desc-proficiency">proficient at managing multiple <br></br> projects  with ease and building <br></br> full stack applications</p>
        </div>

        <div class='icons'>
          <img id="python-icon" class="icon" src={python1} />
          <img id="java-icon" class="icon" src={java1} />
          <img id="mern-icon" class="icon" src={mern1} />
        </div>
      </div>

      <div className='skills'>
        Expert time management skills, meticulous attention to details, results-oriented, self-directed, professional and mature,
        strong problem solver.
      </div>

      <div className='desc-background'>
        <div className='description2'>
          <div class='desc2-title'>
            <div>Using <br></br> best <br></br> technologies</div>
          </div>
        </div>
      </div>

      <div className='creative-block'>
        <div className="and-creative">AND<br></br>CREATIVE<br></br>MIND
        </div>
        <img src={creat_icon} />        
      </div>

      <div className='description3'>

        <div className='desc3-text'>
          <div className='life-mis'>“My life's mission is</div>
          <div id="desc-proficiency">changing this World for the better,  
          making people’s life easier and happier by
           creating modern high-quality Software.”</div>
        </div>

        <div className='my-photo'><img src={bgr}></img></div>
      </div>

      <div id="projects-title">projects</div>

      <div className="projects">
        <div className="project">
          <img src={gedata} />
          <p>ME_GEDATA / I started developing this app for a local law firm in my neighborhood that didn't have an efficient tool to create, edit and track their legal cases. Based on their requirements I developed a system that can accept and store all different data about clients and related legal cases, as well as third parties involved in the case. 
          </p>
        </div>

        <div className="project">
          <img src={yum} />
          <p>YUM-YUM-app / The application for recipe search allows users to make requests and get access to thousands of recipes coming from the public API. 
          </p>
        </div>

        <div className="project">
          <img src={gshop} />
        </div>

        <div className="project">THE GAME SHOP / Web application for Gaming lovers. It contains names, history and description about the most famous Computer Games of all times. You can register to add, edit or delete favorite games. 
        </div>
      </div>

      <div className="contact">
        Designed by George Grigolaya, 2022
        <br></br>
        EMAIL: geo51015@gmail.com
        <br></br>
        Find me on LinkedIn! Tap: 
        <br></br>
        <a href="https://www.linkedin.com/in/george-grigolaya-9b6234229/"><img src={linkedin} id="linked-in" /></a>

      </div>
    </div>
    
    );
}

export default App;
