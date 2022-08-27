import React from 'react'
import { Routes,Route} from 'react-router-dom'
import CompanyreviewsPage from '../Pages/CompanyreviewsPage'
import HomePage from '../Pages/HomePage'
import PostjobPage from '../Pages/PostjobPage'
import SalaryGuidePage from '../Pages/SalaryGuidePage'
import SigninPage from '../Pages/SigninPage'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reviews" element={<CompanyreviewsPage /> } />
            <Route path="/salary" element={<SalaryGuidePage /> } />
            <Route path="/signin" element={<SigninPage /> } />
            <Route path="/postjob" element={<PostjobPage /> } />
        </Routes>
    </div>
  )
}
