



import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { GiShoppingBag } from 'react-icons/gi';
import { useAuth } from '../../context/auth';
import toast from "react-hot-toast";
import SearchInput from '../Form/SearchInput';

import useCategory from '../../hooks/useCategory';
import { useCart } from '../../context/cart';
import { Badge } from "antd";
import './Header.css';
const Header = () => {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const [cart] = useCart();
  const handleLogout = () => { 
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg  wh ">
        <div className="container-fluid  ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  adding" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand text-white" >
              SuperMarket</Link>
            <ul className="navbar-nav ms-auto mb-2 ms-15 mb-lg-0">
              <li className="nav-item mr-19 spacing">
                <SearchInput />
              </li>
              <li className="nav-item adding">
                <NavLink to="/" className="nav-link text-white"  >Home</NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>

                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {
                !auth.user ? (
                  <>
                    <li className="nav-item">
                      <NavLink to="/register" className="nav-link text-white" >Register</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link text-white" >Login</NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle text-white"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{ border: "none" }}
                      >
                        {auth?.user?.name}
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                              }`}
                            className="dropdown-item"
                          >
                            Dashboard
                          </NavLink>
                        </li>

                        <li className="nav-item">
                          <NavLink onClick={handleLogout} to="/login" className="dropdown-item" >Logout</NavLink>
                        </li>

                      </ul>
                    </li>
                  </>
                )
              }
              <li className="nav-item">
                <Badge count={cart?.length} showzero>
                  <NavLink to="/cart" className="nav-link text-white" >Cart </NavLink>
                </Badge>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Header


