import com1 from "../assets/dextools.png"
import com2 from "../assets/etherscan.png"
import com3 from "../assets/medi.png"
import com4 from "../assets/talegram.png"
import com5 from "../assets/twitter.png"
import com6 from "../assets/back.jpeg"
function Community()
{
    return(
         <div className="Commu">
          <h2>
            JOIN OUR <span>COMMUNITY</span>
          </h2>
          <div class="d-flex justify-content-center mt-4 gap-5">
          <div class="icon-wrap">
          <a href="https://etherscan.io/token/0xcfc19e20d0a7c57b7bfa18c74179de576cd29ecb" target="_blank" class="icon">
          <img src={com1} alt="Instagram"></img>
          </a>
          </div>
          <div class="icon-wrap">
          <a href="https://www.t.me/MuniTokenPortal" target="_blank" class="icon">
          <img src={com2} alt="Talegram"></img>
          </a>
          </div>
          <div class="icon-wrap"><a href="https://twitter.com/MuniToken" target="_blank" class="icon">
          <img src={com3} alt="Twitter"></img>
          </a>
          </div>
          <div class="icon-wrap">
          <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xc533B35A10c03d225a4f1CCC3A206a368489C844?utm_source=telegram&amp;utm_medium=bobbybuybot" target="_blank" class="icon">
          <img src={com4} alt="Discord"></img>
          </a>
          </div>
          <div class="icon-wrap">
          <a href="https://medium.com/@themunitoken" target="_blank" class="icon">
          <img src={com5} alt="medium"></img>
          </a>
          </div>
          </div>
          <div className="d-flex justify-content-center align-items-center if">
             <img src={com6} className=""></img>
          </div>

         </div>
    );
}
export default Community;