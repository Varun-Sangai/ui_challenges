import reac from "../assets/rty.jpeg";
import rep from "../assets/yu.jpeg";
import Asc from "./Asc";
function Fer()
{
    return(
      <div className="d-flex flex-row f">
        <div className="rg d-flex flex-fill">
        <img className="grh img-fluid" src={reac} alt="ghts"></img>
         </div>
        <div className="Roadmap-item flex-fill">
        <ul>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
        </ul>
        </div>
      <div className=" rg d-flex flex-fill">
      <img  className="grh img-fluid" src={rep} alt="ghts"></img>
      </div>
      
      </div>
    );
}
export default Fer;