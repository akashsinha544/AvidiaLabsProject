import "./App.css";

import details from "./Data/Datalist.js";

function App() {
  console.log(details);
  return (
    <div>
      {details.map((value, index) => {
        return (
          <div className="App">
            <div className="section1">
              <img className="pic" id="myPic" src={value.profile} alt="" />
              <h1 className="myName">{value.UserName}</h1>
              <h3 className="role">{value.role}</h3>
              <p className="me">
                <h2> ABOUT ME </h2>

                <div className="myBio">
                  {" "}
                  <p>
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                    <br /> Dicta incidunt nobis rem voluptates magnam, <br /> ex
                    tenetur necessitatibus accusantium nihil nemo. Animi, maxime
                    corrupti <br /> Numquam nam ut dicta quia unde fuga.
                  </p>
                </div>

                <p
                  id="me2"
                  dangerouslySetInnerHTML={{
                    __html: value.aboutMe,
                  }}
                ></p>
              </p>

              <div style={{ marginBottom: "6px", marginTop: "13px" }}>
                <h3 className="skill1">{value.skills[0]}</h3>
              </div>
              <div class="progress">
                <div class="bar one"> 75%</div>
              </div>

              <div style={{ marginBottom: "6px", marginTop: "13px" }}>
                <h3 className="skill1">{value.skills[0]}</h3>
              </div>
              <div class="progress">
                <div class="bar two"> 90%</div>
              </div>

              <div style={{ marginBottom: "6px", marginTop: "13px" }}>
                <h3 className="skill1">{value.skills[0]}</h3>
              </div>
              <div class="progress">
                <div class="bar three"> 65%</div>
              </div>

              <h3 className="email">
                {" "}
                CONTACTS <br />
                <h5 className="mymail">{value.mail}</h5>
              </h3>
              <h4 className="phone">{value.phone}</h4>
            </div>

            <div className="section2">
              <h1 className="mainEdu">EDUCATION</h1>

              {value.education.map((k, i) => {
                return (
                  <div className="edu2">
                    {" "}
                    <h3 className="edu">
                      {k.degree} <br />

                      <p className="coll"> {k.collage}{" "}</p>
                     
                    </h3>{" "}
                    <h3>{k.year}</h3>
                  </div>
                );
              })}

              <h1 className="lang"> LANGUAGES</h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, dolor
              </p>

              <div className="lang1">
                <div
                  role="progressbar1"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ "--value": "65" }}
                ></div>

                <div
                  role="progressbar2"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ "--value": "95" }}
                ></div>

                <div
                  role="progressbar3"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ "--value": "75" }}
                ></div>
              </div>

              {/* 
               
                <div class="circle-wrap">
                  <div class="circle">
                    <div class="mask full">
                      <div class="fill"></div>
                    </div>
                    <div class="mask half">
                      <div class="fill"></div>
                    </div>
                    <div class="inside-circle"> <h3 className="lang1">{value.lang[1]}</h3> </div>
                  </div>
                </div> */}

              {/*                  
                <div class="circle-wrap">
                  <div class="circle">
                    <div class="mask full">
                      <div class="fill"></div>
                    </div>
                    <div class="mask half">
                      <div class="fill"></div>
                    </div>
                    <div class="inside-circle"> <h3 className="lang1">{value.lang[1]}</h3> </div>
                  </div>
                </div>



                
 */}

              {/* </div> */}

              <h1 className="exp"> EXPERIENCE</h1>

              {value.exp.map((k, i) => {
                return (
                  <div className="exp2">
                    {" "}
                    <h3 className="exp3">
                      {k.degree} <br />
                      <p className="words">
                        Worked on marketing campaigns. <br />
                        Handled multiple digital accounts. <br />
                        Created digital marketing campaigns. <br />
                        Assisted the head designer.
                      </p>
                    </h3>{" "}
                    <h3>{k.year}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
