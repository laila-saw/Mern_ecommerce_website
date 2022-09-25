import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { sliderItems, categories, popularProducts } from './data';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { publicRequest } from './requestMethods';
// 00:11 -> 22:08
ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById('root')
);
function App() {
  const user = true;
  return (
    <Routes>

      <Route exact path='/' element={<Home />} />
      <Route path='/productList/:category' element={<ProductList />} />
      <Route path='/product/:id' element={<Product />} />
      {
        user
          ? <Route path='/signinup' element={<Navigate replace to="/" />} />
          : <Route path='/signinup' element={<Signinup />} />
      }
      <Route path='/cart' element={<Cart />} />
      <Route path='/pay' element={<Pay />} />
      <Route path='/success' element={<Success />} />
    </Routes>
  )
}
function Pay() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWZhZjhhMWY2OGMxZjkyMmE1ZGYwNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDA5MjkwOCwiZXhwIjoxNjY0MzUyMTA4fQ.4q62LYUzLhVXsF_U4rVFqy9hl2OGXTFuRQIYtc5jTe4";
  const [stripToken, setStripeToken] = useState(null);

  function onToken(token) {
    setStripeToken(token);
  }
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment", {
          tokenId: stripToken.id,
          amount: 2000
        }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    stripToken && makeRequest();
  }, [stripToken])


  return (
    <>
      <StripeCheckout
        name='Saw Shop'
        image={PF + "logo.png"}
        billingAddress
        shippingAddress
        description='Your Total is $20!'
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button>payment</button>
      </StripeCheckout>

    </>
  )
}
function Success() {
  return (
    <>
      <div></div>
    </>
  )
}

// pages 

// home
function Home() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Announcement />
      <Navbar pf={PF} />
      <div className="mainPage">
        <Slider pf={PF} />
        <Categories pf={PF} />
        <h1 className='title' style={{ marginLeft: "35px" }}>Popular Products</h1>
        <Products pf={PF} />
        <Newsletter />
      </div>
      <Footer pf={PF} />
    </>
  )
}
// !home
// productList 
function ProductList() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Announcement />
      <Navbar pf={PF} />
      <div className="mainPage">
        <FilterProducts />
        <Newsletter />
        <Footer pf={PF} />
      </div>
    </>
  )
}
// !productList 

// product 
function Product() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Announcement />
      <Navbar pf={PF} />
      <div className="mainPage">
        <ProductDetails pf={PF} />
        <Newsletter />
        <Footer pf={PF} />
      </div>
    </>
  )
}
// !product 
// cart
function Cart() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Announcement />
      <Navbar pf={PF} />
      <div className="mainPage">
        <CartContainer pf={PF} />
        <Footer pf={PF} />
      </div>
    </>
  )
}
// !cart
// Signinup  
function Signinup() {
  const [login, setLogin] = useState(false);
  return (
    <div className='signinup'>
      <div className="signinupBg leftBg"><img src="./img/p20.png" alt="" /></div>
      <div className="signinupBg rightBg"><img src="./img/p20-2.png" alt="" /></div>
      <div className="wrapper">
        <div className="title-text">
          <div className="title login" style={{ marginLeft: login && "-50%" }}>Login</div>
          <div className="title login">Register</div>
        </div>

        <div className="form-container">
          <div className="slide-controls">
            <input type="radio"
              name='slider'
              id='login'
              checked={!login && true}
              hidden
              onChange={(e) => (e.target.value)} />
            <input type="radio"
              name='slider'
              id='signup'
              checked={login && true}
              onChange={(e) => (e.target.value)}
              hidden />
            <label htmlFor="login" className='slide login' onClick={() => { setLogin(false) }}>Login</label>
            <label htmlFor="signup" className='slide singup' onClick={() => { setLogin(true) }}>SingUp</label>
            <div className="slide-tab"></div>
          </div>
          <div className="form-inner">
            <form
              style={{ marginLeft: login && "-50%" }}
              className='login'>
              <div className="field">
                <input type="email" placeholder='Email Address' />
              </div>
              <div className="field">
                <input type="password" placeholder='Password' />
              </div>
              <div className="pass-link"><Link to=''>Forgot password ?</Link></div>
              <button>Login</button>
              <div className="signupLink" onClick={() => { setLogin(true) }}>Not a member ? <Link to=''>Sign Up Now</Link></div>
            </form>
            <form
              style={{ display: login && "block" }}
              className='signup'>
              <div className="field " style={{ display: "flex", justifyContent: "space-between" }}>
                <input type="text" style={{ width: "49%" }} placeholder='First Name' />
                <input type="text" style={{ width: "49%" }} placeholder='Last Name' />
              </div>
              <div className="field">
                <input type="email" placeholder='Email Address' />
              </div>
              <div className="field">
                <input type="password" placeholder='Password' />
              </div>
              <div className="field">
                <input type="password" placeholder='Confirm Your Password' />
              </div>
              <button>Register</button>
              <div className="signupLink" onClick={() => { setLogin(false) }}>Already sign up ? <Link to=''>login Now</Link></div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}
// !Signinup  
// !pages 

// component 
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
// navbar

function Navbar({ pf }) {
  const [language, setLanguage] = useState(false);

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 10) {
      document.querySelector('.navbar')?.classList.add('fixed');
    } else {
      document.querySelector('.navbar')?.classList.remove('fixed');
    }
  }
  const [isOpen, open] = useState(false);
  return (
    <div className="navbar">
      <div className="navbarWrapper container-fluid">
        <div className="mobile" style={{ left: isOpen && "0" }}>
          <div className="closeIcon"  ><i className="fa fa-times" onClick={() => open(false)} ></i></div>
          <div className="searchContainer mobileItem">
            <input type="text" placeholder='search' />
            <div className="icon"><i className="fa fa-search"></i></div>
          </div>
          <div className={language ? "show language mobileItem" : "language mobileItem"}>
            <div className="languageTop" onClick={() => setLanguage(!language)}>
              <div className="flag"><img src={pf + "flags/en.png"} alt="" /></div>
              <span className="text">En</span>
              <i className="fa fa-angle-down"></i>
            </div>
            <div className="languageBottom">
              <div className="languageBottomItem">
                <div className="flag"><img src={pf + 'flags/sa.png'} alt="" /></div>
                <span className="text">Ar</span>
              </div>
              <div className="languageBottomItem">
                <div className="flag"><img src={pf + 'flags/sa.png'} alt="" /></div>
                <span className="text">Ar</span>
              </div>
            </div>
          </div>
          <div className="mobileItem"><Link to="/signinup">login/Register</Link></div>
        </div>
        <div className="row">
          <div className="col-md-4 col-2 nvabarLeft">
            <i className="fas fa-bars" onClick={() => open(true)}></i>

            <div className={language ? "show language hasDisapair" : "language hasDisapair"}>
              <div className="languageTop" onClick={() => setLanguage(!language)}>
                <div className="flag"><img src={pf + "flags/en.png"} alt="" /></div>
                <span className="text">En</span>
                <i className="fa fa-angle-down"></i>
              </div>
              <div className="languageBottom">
                <div className="languageBottomItem">
                  <div className="flag"><img src={pf + 'flags/sa.png'} alt="" /></div>
                  <span className="text">Ar</span>
                </div>
                <div className="languageBottomItem">
                  <div className="flag"><img src={pf + 'flags/sa.png'} alt="" /></div>
                  <span className="text">Ar</span>
                </div>
              </div>
            </div>
            <div className="searchContainer hasDisapair">
              <input type="text" placeholder='search' />
              <div className="icon"><i className="fa fa-search"></i></div>
            </div>
          </div>
          <div className="col-md-4 col-8 nvabarCenter">
            <Link to="/pay"><img src={pf + "logo.png"} alt="" className="logo" /></Link>
          </div>
          <div className="col-md-4 col-2 nvabarRight">
            <div className="menuItem hasDisapair"><Link to="/signinup">Login/Register</Link></div>
            <Link to='/success'>
              <div className="menuItem">
                <div className="iconBadge">4</div>
                <div className="nvabarRightIcon"><i className="fa fa-shopping-cart"></i></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
// !
function Announcement() {
  return (
    <div className="announcementContainer">
      Super deal! free shipping on orders over 50 $
    </div>
  )
}
function Slider({ pf }) {
  let [slideIndex, setSlideIndex] = useState(0);
  function sliderClick(direction) {
    if (direction === "left") {
      setSlideIndex(slideIndex >= 0 ? slideIndex-- : slideIndex = sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex > sliderItems.length - 1 ? slideIndex = 0 : slideIndex++);
    }
  }
  return (
    <div className="slider">
      <div className="sliderArrow" onClick={() => sliderClick("left")}>
        <i className="fa fa-angle-left"></i>
      </div>

      <div className="sliderWrapper" style={{ transform: `translateX(${slideIndex * (-100)}vw)` }}>
        {
          sliderItems.map((item) => (
            <div key={item.id} className="silde" style={{ backgroundColor: item.bg }}>
              <div className="imgContainer">
                <img src={pf + item.img} alt="" />
              </div>
              <div className="infoContainer">
                <h1 className="sliderTitle">{item.title}</h1>
                <p className="sliderDesc">{item.desc}</p>
                <button className="sliderBtn">shop now</button>
              </div>
            </div>
          ))
        }
      </div>
      <div className="sliderArrow" onClick={() => sliderClick("right")}>
        <i className="fa fa-angle-right"></i>
      </div>
    </div>
  )
}
function Categories({ pf }) {
  return (
    <div className="categories row">
      {
        categories.map((item) => (
          <CategorieItem pf={pf} item={item} key={item.id} />
        ))
      }
    </div>
  )
}
function CategorieItem({ item, pf }) {
  return (
    <Link to={`/productList/${item.cat}`} className="categorieItem col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="categorieItemImg">
        <img src={pf + item.img} alt="" />
      </div>
      <div className="categorieInfo">
        <h2 className="categorieItemTitle">{item.title} </h2>
        <button>Shop now</button>
      </div>
    </Link>
  )
}
function Products({ pf, category, sort, filters }) {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      console.log("hi")
      try {
        const res = await axios.get(
          category
            ? "http://localhost:5000/api/product?category=" + category
            : "http://localhost:5000/api/product")
        console.log("res", res.data)
        setProducts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getProducts();
  }, [category])
  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      )
  }, [products, category, filters])
  useEffect(() => {
    if (sort === "newset") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      )
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      )
    }
  }, [sort])


  return (
    <div className="products row">
      {category
        ? filteredProducts.map((item, i) => (
          <ProductItem pf={pf} item={item} key={i} />
        ))
        : products.slice(0, 8).map((item, i) => (
          <ProductItem pf={pf} item={item} key={i} />
        ))
      }
      <div className="pagination">
        <div className="paginationContainer">
          <span className="paginationItem prev"><i className="fa fa-angle-left"></i></span>
          <span className="paginationItem page">1/2</span>
          <span className="paginationItem prev"><i className="fa fa-angle-right"></i></span>
        </div>
      </div>
    </div>
  )
}
function ProductItem({ item, pf }) {
  const PU = process.env.REACT_APP_PUBLIC_URL;
  return (
    <Link to={"/product/" + item._id} className="productItem col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="productInfo">
        <div className="productItemImg">
          <img src={pf + item.img[0]} alt="" />
        </div>
        <div className="productInfoCentent">
          <div className="icon">
            <i className="fa fa-shopping-cart"></i>
          </div>
          <div className="icon">
            <i className="fa fa-search"></i>
          </div>
          <div className="icon">
            <i className="far fa-heart"></i>
          </div>
        </div>
      </div>
      <div className="productInfo-2">
        <div className="price text">{item.price}</div>
        <div className="productRemise text">{item.title}</div>
        <div className="prductRate">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
          <i className="far fa-star"></i>
        </div>
      </div>
    </Link>
  )
}
function Newsletter() {
  return (
    <div className="newsletter ">
      <h1 className="title">newsletter</h1>
      <p className="newsletterDesc">Get timely updates from your favorite products</p>
      <div className="inputContainer">
        <input type="email" placeholder='Your Email' />
        <button className="icon">
          <i className="fab fa-telegram-plane"></i>
        </button>
      </div>
    </div>
  )
}
function Footer({ pf }) {
  return (
    <div className="footer row">
      <div className="col-sm-12 col-md-4 footerLeft">
        <Link to="/"><img src={pf + "logo.png"} alt="" className="logo" /></Link>
        <p className="footerDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eius accusantium iusto cupiditate dolorum perspiciatis iste
          inventore nobis dolores molestias veniam, ratione, quas facilis?
        </p>
        <div className="icons">
          <Link to="" className="icon" style={{ backgroundColor: "#3b5999" }}><i className="fab fa-facebook-f"></i></Link>
          <Link to="" className="icon" style={{ backgroundColor: "#e4405F" }}><i className="fab fa-instagram"></i></Link>
          <Link to="" className="icon" style={{ backgroundColor: "#55ACEE" }}><i className="fab fa-twitter"></i></Link>
          <Link to="" className="icon" style={{ backgroundColor: "#E60023" }}><i className="fab fa-pinterest-p"></i></Link>
        </div>
      </div>
      <div className="col-sm-12 col-md-4 footerCenter">
        <h3 className="title">Useful Links</h3>
        <ul className="list">
          <li className="listItem"><Link to="/">home</Link></li>
          <li className="listItem"><Link to="/">cart</Link></li>
          <li className="listItem"><Link to="/">man fashion</Link></li>
          <li className="listItem"><Link to="/">woman fashion</Link></li>
          <li className="listItem"><Link to="/">Accessoires</Link></li>
          <li className="listItem"><Link to="/">my account</Link></li>
          <li className="listItem"><Link to="/">order tracking</Link></li>
          <li className="listItem"><Link to="/">wishlist</Link></li>
          <li className="listItem"><Link to="/">terms</Link></li>
        </ul>
      </div>
      <div className="col-sm-12 col-md-4 footerRight">
        <h3 className="title">Contact</h3>
        <div className="contactContainer">
          <div className="contactItem">
            <div className="icon" style={{ backgroundColor: "green" }}><i className="fa fa-map-marker"></i></div>
            <div className="text">AnyWhere</div>
          </div>
          <div className="contactItem">
            <div className="icon" style={{ backgroundColor: "tomato" }}><i className="fa fa-phone"></i></div>
            <div className="text">+2127 67 77 36 20</div>
          </div>
          <div className="contactItem">
            <div className="icon" style={{ backgroundColor: "teal" }}><i className="fa fa-envelope"></i></div>
            <div className="text">Saw.Saw@gmail.com</div>
          </div>
        </div>
        <img src={pf + "/payement.png"} alt="" />
      </div>
    </div>
  )
}
function FilterProducts({ }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")
  const handleFilters = (e) => {
    console.log(e.target.value)
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="filterContainer row">
      <h1 className="title">{category}</h1>
      <div className="filteres">
        <div className="filter">
          <span className="filterText">Filter Products : </span>
          <select name='color' onChange={handleFilters} className=''>
            <option disabled>Color</option>
            <option value="white" >White</option>
            <option value="black" >Black</option>
            <option value="red" >Red</option>
            <option value="blue" >Blue</option>
            <option value="yellow" >Yellow</option>
            <option value="gold" >Gold</option>
          </select>
          <select name='size' onChange={handleFilters} className=''>
            <option value="" disabled>Size</option>
            <option value="XS" >XS</option>
            <option value="S" >S</option>
            <option value="M" >M</option>
            <option value="L" >L</option>
            <option value="XL" >XL</option>
          </select>
        </div>
        <div className="filter">
          <span className="filterText">sort Products : </span>
          <select onChange={e => setSort(e.target.value)}>
            <option value='newest' >Newest</option>
            <option value='asc' >Price (asc)</option>
            <option value='desc' >Price (desc)</option>
          </select>
        </div>
      </div>
      <Products pf={PF} filters={filters} category={category} sort={sort} />
    </div>
  )
}
function ProductDetails({ pf }) {

  const [img, setImg] = useState(pf + "")
  function handleClick(e) {
    setImg(e.target.src)
  }
  const location = useLocation();
  const id = location.pathname.split('/')[2]
  const [product, setProduct] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("product/find/" + id)
        setProduct(res.data)
        setImg(pf + res.data.img[0])
        setColor(res.data.color[0])
        setSize(res.data.size[0])

      } catch (error) {
        console.log(error)
      }
    }
    getProduct()

  }, [id])
  if (product.categories) {
    console.log(pf + product.img)
  }
  const handleQuantity = (type) => {
    if(type==="dec" && quantity>1){
      setQuantity(quantity-1)
    }else if(type==="inc" && quantity<10) {
      setQuantity(quantity+1)
    }
  }
  return (
    <div className="productDetails row py-5">
      <div className="col-sm-12 col-md-6 productImg">
        <div className="imgContainer">
          <img src={img} alt="" id="productimage" />
        </div>
        <div className="smallImgs">
          {product.img &&
            product.img.map((item, i) => (
              pf + item !== img &&
              <div key={i} className="smallImg"><img onClick={(e) => handleClick(e)} className='small-img' src={pf + item} alt="" /> </div>
            ))
          }

        </div>

      </div>
      <div className="col-sm-12 col-md-6 ProductInfo">
        <h1 className="title">{product.title}</h1>
        <div className="productDesc">
          {product.desc}
        </div>
        <div className="productPrice">$ {product.price}</div>
        <div className='productChoices'>
          <div className="productChoice">
            <div className="text">color : </div>
            {product.color &&
              product.color.map((c, i) => (
                <span
                  onClick={()=>setColor(c)}
                  key={i}
                  style={{backgroundColor: c }}
                  className={color === c ? "selected color" : "color"}>
                </span>
              ))
            }
          </div>
          <div className="productChoice">
            <div className="text">Size : </div>
            <select defaultValue={"Size"}>
              {/* <option disabled >{size}</option> */}
              {product.size &&
                product.size.map((s, i) => (
                  <option 
                  onChange={(e)=>setSize(e.target.value)}
                  key={i} 
                  // value={size}
                  >
                    {s}
                  </option>
                ))
              }
            </select>
          </div>
        </div>
        <div className="userAction">
          <div className="quantity">
            <span
              onClick={() => handleQuantity("dec")}
              className='controlBtn'>
              -
            </span>
            <span className="num">
              {quantity}
            </span>
            <span
              onClick={() => handleQuantity("inc")}
              className='controlBtn'>+</span>
          </div>
          <Link to="/cart"><button>
            <div className="layer"></div>
            <div className="text">Add to cart</div>
          </button></Link>
        </div>

      </div>
    </div>
  );
}
function CartContainer({ pf }) {
  return (
    <div className="cartContainer">
      <h1 className="title">Your Bag <i className="fa fa-shopping-cart"></i></h1>
      <div className="cartTop ">
        <button style={{ backgroundColor: "white" }}>
          <div className="text">continue shopping</div>
          <div className="layer"></div>
        </button>
        <div className="statistics">
          <span className="text">shopping bag (2)</span>
          <span className="text">your wishlist (2)</span>
        </div>
        <button style={{ backgroundColor: "black", color: "white" }}>
          <div className="text">checkout now</div>
          <div className="layer" style={{ backgroundColor: "tomato" }}></div>
        </button>
      </div>
      <div className="cartBottom row">
        <div className="col-sm-12 col-md-9 orderInfo ">

          <div className="orderItem">
            <div className="imgContainer">
              <img src={pf + "p1.png"} alt="" />
            </div>
            <div className="orderDetails">
              <div className="proprities">
                <div className="proprityItem">
                  <div className="proprity name">Product : </div>
                  <span className='value'>dress</span>
                </div>
                <div className="proprityItem">
                  <div className="proprity name">ID : </div>
                  <span className='value'>123456789</span>
                </div>
                <div className="proprityItem color">
                  <div className="proprity ">Color : </div>
                  <span className='value'><div className="circle"></div></span>
                </div>
                <div className="proprityItem">
                  <div className="proprity name">Size : </div>
                  <span className='value'>L</span>
                </div>
              </div>
              <div className="numpric">
                <div className="quantity">
                  <span className='controlBtn'>-</span> <span className="num">1</span> <span className='controlBtn'>+</span>
                </div>
                <div className="price">$ 30</div>
              </div>
            </div>
          </div>
          <div className="orderItem">
            <div className="imgContainer">
              <img src={pf + "p1.png"} alt="" />
            </div>
            <div className="orderDetails">
              <div className="proprities">
                <div className="proprityItem">
                  <div className="proprity name">Product : </div>
                  <span className='value'>dress</span>
                </div>
                <div className="proprityItem">
                  <div className="proprity name">ID : </div>
                  <span className='value'>123456789</span>
                </div>
                <div className="proprityItem">
                  <div className="proprity name">Color : </div>
                  <span className='value'><div className="circle"></div></span>
                </div>
                <div className="proprityItem">
                  <div className="proprity name">Size : </div>
                  <span className='value'>L</span>
                </div>
              </div>
              <div className="numpric">
                <div className="quantity">
                  <span className='controlBtn'>-</span> <span className="num">1</span> <span className='controlBtn'>+</span>
                </div>
                <div className="price">$ 30</div>
              </div>
            </div>
          </div>

        </div>
        <div className="col-sm-12 col-md-3 orderSummury">
          <h2 className="title">order summary</h2>
          <div className="summaryGroup">
            <div className="summaryItem">
              <div className="proprity">subtotal</div>
              <div className="value">$ 80</div>
            </div>
            <div className="summaryItem">
              <div className="proprity">estimited shipping</div>
              <div className="value">$ 5.90</div>
            </div>
            <div className="summaryItem">
              <div className="proprity">shipping discount</div>
              <div className="value">$ -5.90</div>
            </div>
            <hr />
            <div className="summaryItem">
              <div className="proprity"><strong>total</strong></div>
              <div className="value"><strong>$ 80</strong></div>
            </div>
          </div>
          <button>
            <div className="text">continue shopping</div>
            <div className="layer"></div>
          </button>

        </div>
      </div>
    </div>
  )
}

  // !component 
