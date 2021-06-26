import React from 'react'
import Footer from './Footer'
import KoodiWorks from './KoodiWorks';
import Courses from './Courses/Courses';
import Header from './Header'

const Dashboard = () => {
    return (
      <>
      <Header />
      <Courses />
      <KoodiWorks />
      <Footer />
      </>
    );
}

export default Dashboard
