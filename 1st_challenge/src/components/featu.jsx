import reacp from "../assets/Firts.jpeg";
import Asc from "./Asc";
function Featu()
{
    return(
        <div className="d-flex flex-row f">
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
        <img  className=" img-fluid" src={reacp} alt="ghts"></img>
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
        </div>
    );
}
export default Featu;