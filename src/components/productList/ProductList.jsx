import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data";
export default function ProductList() {
  return (<div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Create & inspire. It's Tom</h1>
            <p className="pl-desc">
                Tom is a creative portfolio that your work has been waiting beautiful homes, stunning portfolio styles & a whole lot more inside.
            </p>
        </div>
        <div className="pl-list">
           {products.map((item)=>(
               <Product key={item.id} img={item.img} link={item.link} / >
           ))}
        </div>
  </div>);
}
