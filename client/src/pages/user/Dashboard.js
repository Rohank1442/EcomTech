import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu';
import { useAuth } from "../../context/auth";

import  './Dashboard.css';
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
     <div className="page">
     <div className="container-flui  p-3 dashboard admin">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="design">
              <h3 className="text-animation"> Name : {auth?.user?.name}</h3>
              <h3 className="text-animation1"> Email : {auth?.user?.email}</h3>
              <h3 className="text-animation2">Address : {auth?.user?.address.substring(0, 30)}....</h3>
            </div>
          </div>
        </div>
      </div>
     </div>

    
    </Layout>
  )
}

export default Dashboard

