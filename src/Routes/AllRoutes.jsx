import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Description from '../Components/Description'
import LoginUp from '../Components/LoginUp'
import CompanyreviewsPage from '../Pages/CompanyreviewsPage'
import HomePage from '../Pages/HomePage'
import PasswordPage from '../Pages/PasswordPage'
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
            <Route path="/password" element={<PasswordPage />} />
            <Route path="/description/:id" element={<Description />} />
            <Route path="/login" element={<LoginUp />} />
        </Routes>
    </div>
  )
}
