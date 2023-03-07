import reactlogo from "../assets/logo.svg";
import com1 from "../assets/dextools.png"
import com2 from "../assets/etherscan.png"
import com3 from "../assets/medi.png"
import com4 from "../assets/talegram.png"
import com5 from "../assets/twitter.png"
function End()
{
    return (
         <div className="end">
             <div className="d-flex justify-content-center align-items-center">
                  <img className="end-emg" src={reactlogo} alt="icdbibc"></img>
             </div>
             <hr></hr>
             <nav className="bg-black navbar navbar-expand-lg navbar-dark">
             <div className="container">
             <nav id="responsive-navbar-nav" className="w-100 align-items-center navbar navbar-expand navbar-light">
             <div className="me-auto navbar-nav">
             <a href="#home"  className="nav-link cd">HOME</a>
             <a href="#tokenomics"  className="nav-link cd">TOKENOMICS</a>
             <a href="#features"  className="nav-link cd">FEATURES</a>
             <a href="#roadmap"  className="nav-link cd">ROADMAP</a>
             </div>
             <div className="navbar-nav">
             <div className="d-flex justify-content-end gap-3">
             <div className="f-icon-wrap"><a href="https://etherscan.io/token/0xcfc19e20d0a7c57b7bfa18c74179de576cd29ecb" target="_blank" class="f-icon">
             <img src={com1} alt="etherscan"></img></a>
             </div>
             <div className="f-icon-wrap"><a href="https://www.t.me/MuniTokenPortal" target="_blank" class="f-icon">
             <img src={com2} alt="Talegram"></img></a>
             </div>
             <div className="f-icon-wrap"><a href="https://twitter.com/MuniToken" target="_blank" class="f-icon">
             <img src={com3} alt="Twitter"></img></a>
             </div>
             <div className="f-icon-wrap"><a href="https://www.dextools.io/app/en/ether/pair-explorer/0xc533B35A10c03d225a4f1CCC3A206a368489C844" target="_blank" class="f-icon">
             <img src={com4} alt="Discord"></img></a>
             </div>
             <div className="f-icon-wrap">
             <a href="https://medium.com/@themunitoken" target="_blank" class="f-icon">
             <img src={com5} alt="Medium"></img></a>
             </div>
             </div></div></nav></div></nav>
             <hr>
             </hr>
             <h4>
                All RIGHTS RESERVED
             </h4>
         </div>
    );
}
export default End;