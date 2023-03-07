import reactlogo from "../assets/react.svg";
function Intro()
{
    return(
     <div className="container-fluid e">
          <div class="d-flex flex-row tg">
            <div class="p-2 bd-highlight">
                <img className="im" src={reactlogo} alt="photo"></img>
            </div>
            <div class="p-2 bd-highlight">
                 <h1 className="heading">
                        A CRISP <span><u>NEW</u></span> MEME
                 </h1>
                 <p className="para">
                    Multiply your cheddar with $Muni and let's kick start meme season 2.0. We are built by you, for you, here for the money 
                    and $Muni is what we'll get. Join the community and watch your 
                    $Muni grow
                 </p>
                <div className="d-flex flex-row">
                    <button className="b">
                           <span>BUY MUNI</span> 
                    </button>
                    <button className="b">
                           <span>MEDIUM</span>
                    </button>
                </div> 
            </div>
          </div>
     </div>
    );
}

export default Intro;