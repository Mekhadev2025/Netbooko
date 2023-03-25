import homoimg from "../assets/home.avif"
import "./Home.css"
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <img src={homoimg} className="image" width="1300px" height="500px"></img>

      <div style={{ marginTop: "40px" ,marginBottom:"70px"}}>
        <h2 style={{ marginBottom: "10px" }}>
          Laptops That Bring Out the Best In You
        </h2>
        <p >
          While tablets and smartphones are still popular, most people agree
          that everything, from doing research for an assignment to playing
          hardcore games, works better on a laptop. It doesn't matter what your
          lifestyle is, there is always one for you at Croma.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/store">
          <button style={{ borderRadius: "3px" ,width:"200px",height:"60px",backgroundColor:"black",color:"white" ,borderColor:"black",fontSize:"20px",marginBottom:"100px"}}>Shop Now</button>
        </Link>
      </div>
    </>
  );
}
