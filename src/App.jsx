import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// فرض کرتے ہیں کہ یہ فائلیں اب موجود ہیں (Assuming these files now exist)
import Home from './pages/Home';
import Profiledetail from './components/Profiledetail';
import Profile from './pages/Profile';
import Layout from './components/Layout';
import Findblood from './pages/Findblood';
import RegisterAsDonor from './pages/RegisterAsDonor';
import Login from './pages/Login';
import About from './pages/About';

const NotFound = () => <h1>🚫 404 - Page Not Found</h1>; // یہ ایک سادہ 404 پیج ہے (This is a simple 404 page)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout کمپوننٹ ایک پیرنٹ روٹ کے طور پر، اپنے بچوں کو لپیٹتا ہے (Layout component as a parent route, wrapping its children) */}
        <Route path="/" element={<Layout />}>
          {/* Home کمپوننٹ کو انڈیکس روٹ کے طور پر (Home component as an index route) */}
          <Route index element={<Home />} />
          {/* About پیج ایک چائلڈ روٹ کے طور پر (About page as a child route) */}
          <Route path="about" element={<About />} />
          <Route path="register" element={<RegisterAsDonor/>} />
          <Route path="findblood" element={<Findblood/>} />
          <Route path="profile" element={<Profile/>}/>
          <Route path="profile/:id" element={<Profiledetail/>} />
          <Route path="login" element={<Login/>} />
          {/* دیگر چائلڈ روٹس یہاں شامل کیے جا سکتے ہیں (Other child routes can be added here) */}
        </Route>

        {/* کسی بھی غیر متعینہ پاتھ کے لیے کیچ-آل روٹ (Catch-all route for any undefined path) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
