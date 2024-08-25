import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Splash from './Splash';
import Home from './ComponentsTwo/Home';
import BecomeEducator from './Components/BecomeEducator/BecomeEducator';
import Signup from './Components/Signup/Signup';
import SignupTwo from './Components/Signup/SignupTwo';
import SignupThree from './Components/Signup/SignupThree';
import Identity from './Components/VerifyIdentity/Identity';
import Terms from './Components/TermsAndCondition/Terms';
import Login from './Components/Login/Login';
import Homeeducating from './Components/HomeEducating/Homeeducating';
import Step1 from './Components/HomeEducating/HomeEducatingLogin/Steps/Step1';
import Form from './Components/HomeEducating/HomeEducatingLogin/Form';
import Step2 from './Components/HomeEducating/HomeEducatingLogin/Steps/Step2';
import Step3 from './Components/HomeEducating/HomeEducatingLogin/Steps/Step3';
import StepOne from './Components/HomeEducating/HomeEducatingLogin/Steps/StepOne';
import Tutoring_esperience from './Components/Signup/Tutoring_esperience';
import TechSkills from './TechAndLanguage/TechSkills';
import TechSkillsTwo from './TechAndLanguage/TechSkillsTwo';
import TechSkillsThree from './TechAndLanguage/TechSkillsThree';
import Login2 from './Components/Login/Login2';
import ConfirmationMessage from './Components/HomeEducating/HomeEducatingLogin/Steps/ConfirmationMessage';
import Dashboard from './ComponentsTwo/Dashboard';
import Payment from './ComponentsTwo/Payment';
import Location from './TechAndLanguage/Location';
import TutorInfoPage from './ComponentsTwo/Educators/TutorInfoPage';
import Educator from './ComponentsTwo/Educators/Educator';
import TechDashboard from './TechAndLanguage/TechDashboard';
import Language from './TechAndLanguage/Language';
import LanguageStepTwo from './TechAndLanguage/LanguageStepTwo';
import LanguageStepThree from './TechAndLanguage/LanguageStepThree'
import LanguagePayment from './TechAndLanguage/LanguagePayment';
import EducatorsDashboard from './Components/Signup/EducatorsDashboard';
import CommentForm from './Components/Testimony/CommentForm';
import ContactUs from './Components/Footer/Contact';
import WhoWeAre from './Components/Footer/WhoWeAre';
import Careers from './Components/Footer/Careers';
import NotFound from './Components/NotFound';
import FAQ from './Components/Footer/FAQ';
import ConfirmEmailPage from './ConfirmEmailPage';
import EmailConfirmed from './EmailConfirmed';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="main">
      <BrowserRouter>
        {isLoading ? (
          <Splash onHide={() => setIsLoading(false)} />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/becomeEducator' element={<BecomeEducator />} />    
              <Route path="/signup/step2" element={<SignupTwo />} />
                <Route path="/signup/step3" element={<Tutoring_esperience />} />
                <Route path="/signup/step4" element={<SignupThree />} />
                <Route path="/signup/step5" element={<Identity />} />
                <Route path="/signup/:step" element={<Signup />} />
              <Route path='/T&C' element={<Terms />} />
              <Route path='/location' element={<Location />} />
              <Route path='/login' element={<Login />} />
              <Route path='/parents_login' element={<Login2 />} />
              <Route path='/homeducating' element={<Homeeducating />} />
              <Route path='/homeducatingform' element={<Form />} />
              <Route path='/firststep' element={<Step1 />} />
              <Route path='/payment' element={<Payment />} />
              <Route path='/serviceFee' element={<LanguagePayment/>} />
              <Route path='/second-step' element={<Step2 />} />
              <Route path='/third-step' element={<Step3 />} />
              <Route path='/fourth_step' element={<StepOne />} />
              <Route path='/educator_display/:id' element={<TutorInfoPage />} />
              <Route path='/tech' element={<TechSkills />} />
              <Route path='/educators' element={<Educator />} />
              <Route path='/tech_two' element={<TechSkillsTwo />} />
              <Route path='/tech_three' element={<TechSkillsThree />} />
              <Route path='/message' element={<ConfirmationMessage />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/language' element={<Language />} />
              <Route path='/languagesteptwo' element={<LanguageStepTwo/>} />
              <Route path='/languagestepthree' element={<LanguageStepThree/>} />
              <Route path='/tech_dashboard' element={<TechDashboard />} />
              <Route path='/educatordashboard/' element={<EducatorsDashboard />} />
              <Route path='/commentform' element={<CommentForm/>} />
              <Route path='/contactUs' element={<ContactUs/>} />
              <Route path='/whoweare' element={<WhoWeAre/>} />
              <Route path='/careers' element={<Careers/>} />
              <Route path='*' element={<NotFound />} /> 
              <Route path='/faq' element={<FAQ/>} />
              <Route path="/confirm-email/:token" element={<ConfirmEmailPage/>} />
              <Route path="/email-confirmed" element={<EmailConfirmed/>} />
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
