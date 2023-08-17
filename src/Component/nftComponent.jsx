
import './style.css';
import avator from '../assets/images/image-avatar.png';
import mainImage from '../assets/images/image-equilibrium.jpg';
import price from '../assets/images/icon-ethereum.svg';
import clock from '../assets/images/icon-clock.svg';
import iconView from '../assets/images/icon-view.svg';
const NftProduct=()=>{
return (
    <div className="main-Container">
      <div className="card-Container">
      <div className="image-Container">
        <img className="main-img" src={mainImage} alt ="nft-product-component"/>
        <img className="hover-img"src={iconView} alt="nft-product-component-icon-view"/>
      </div>
      <div className="info-Container">
       <h2>Equilibrium #3429</h2>
       <p className='subtext-container' style={{color:"var(--mainText)"}}>Our equilibrium collection promotes balance and calm.</p>
       </div>
      <div className="other-details" > 
      <div className='left-container'>
      <img style={{height:'13px',marginTop:'23px', marginLeft:'20px'}}src={price} alt="Price Info"/>
      <h4 className="price" style={{color:"var(--heading)"}}>0.041ETH</h4>
      </div>
       <div className="right-container">
        <img className="clock" style={{height:'13px',marginTop:'23px',marginRight:'-100px'}} src={clock} alt="Price Info"/>
        <h4 style={{marginLeft:'100px'}} className="timeLeft">3 days left</h4>
      </div>
     
      </div> 
      
     <div className="border-details">
    <hr style={{backgroundColor:"var(--mainText)"}}/>
    <div className="author-details">
    <img className="profile" src={avator} alt="avator"/>
    <h5 className="author-name" style={{color:"var(--mainText)"}}>Creation of</h5>
    <h5 className="author-name author-hover">Jules Wyvern</h5>
    <div/></div>
     </div>
      </div>
    </div>
);
}

export default NftProduct;