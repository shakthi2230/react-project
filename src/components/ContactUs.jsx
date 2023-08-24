import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

function cleanApiKey(apiKey) {
  return apiKey.replace(/["',]/g, '');
}

const firebaseConfig = {
  apiKey: cleanApiKey(process.env.REACT_APP_APIKEY),
  authDomain: cleanApiKey(process.env.REACT_APP_AUTHDOMAIN),
  projectId: cleanApiKey(process.env.REACT_APP_PROJECTID),
  storageBucket: cleanApiKey(process.env.REACT_APP_STORAGEBUCKET),
  messagingSenderId: cleanApiKey(process.env.REACT_APP_MESSAGINGSENDERID),
  appId: cleanApiKey(process.env.REACT_APP_APPID),
  measurementId: cleanApiKey(process.env.REACT_APP_MEASUREMENTID)
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  phone: '',
  helpDropdown: '',
  message: '',
};


const ContactUs = () => {
  
  const [formData, setFormData] = useState(initialFormData);
  const [alert, setAlert] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; 
    }
    try {
      const docRef = await addDoc(collection(db, 'formSubmissions'), {formData })

      setAlert({ type: 'success', message: 'Form submitted successfully!' });
      setFormData(initialFormData);
    } catch (error) {
      console.log(error)
      setAlert({ type: 'danger', message: 'An error occurred. Please try again.' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({ ...prevData, phone: value }));
  };
  const validateForm = () => {
    const { firstName, lastName, email, company, helpDropdown, message, phone } = formData;

    if (!firstName || !lastName || !email || !company || !helpDropdown || !message) {
      handleError('All fields are required.');
      return false;
    }

    if (!isValidPhoneNumber(`+${formData.phone}`)) {
      handleError('Invalid phone number.');
      return false;
    }

    return true;
  };

  const handleSuccess = (message) => {
    setAlert({ type: 'success', message });
    setTimeout(() => setAlert({ type: '', message: '' }), 5000);
  };

  const handleError = (message) => {
    setAlert({ type: 'danger', message });
    setTimeout(() => setAlert({ type: '', message: '' }), 5000);
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };


  return (
    <div>
      <div className="container contact-us-bg">
        <div className="row">
          <div className="col-12 px-0">
            <div className="position-relative bg-dark text-white rounded-top p-4 what-we-do-container">
              <p className="text-11px fw-semibold what-we-do px-2 py-1 rounded">CONTACT US</p>
              <p className=" display-5 pt-5 fw-bold what-we-do-heading">Partner with Us for<br />Comprehensive IT</p>
            </div>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-12 col-md-6 py-5">
            <p className="fs-5">We're here to address any inquiries you might have and assist you in identifying the services that align most effectively with your requirements.</p>
            <a href="#" className="fs-5 hover-blue text-decoration-none text-dark fw-semibold">Call us at: 1-800-356-8933</a>
            <h4 className="pt-5">Your benefits:</h4>
            <div className="row">
              <div className="col-md-4 d-flex">
                <div><i className="bi bi-check bg-primary  rounded-circle text-light"></i></div>
                <p className="px-2">Client-oriented</p>
              </div>
              <div className="col-md-4 d-flex">
                <div><i className="bi bi-check bg-primary rounded-circle text-light"></i></div>
                <p className="px-2">Results-driven</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 d-flex">
                <div><i className="bi bi-check bg-primary  rounded-circle text-light"></i></div>
                <p className="px-2">Independent</p>
              </div>
              <div className="col-md-4 d-flex">
                <div><i className="bi bi-check bg-primary  rounded-circle text-light"></i></div>
                <p className="px-2">Problem-solving</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 d-flex">
                <div><i className="bi bi-check bg-primary  rounded-circle text-light"></i></div>
                <p className="px-2">Competent</p>
              </div>
              <div className="col-md-4 d-flex">
                <div><i className="bi bi-check bg-primary rounded-circle text-light"></i></div>
                <p className="px-2">Transparent</p>
              </div>
            </div>
            <h4 className="pt-5 pb-sub2">What happens next?</h4>
            <div className="row">
              <div className="col-md-4 gap-2 d-flex">
                <p className="text-24px fw-semibold">1</p>
                <p className="pr-3">
                  We Schedule a call at your convenience</p>
              </div>
              <div className="col-md-4 gap-2 d-flex">
                <p className="text-24px fw-semibold">2</p>
                <p>
                  We do a discovery and consulting meeting</p>
              </div>
              <div className="col-md-4 gap-2 d-flex">
                <p className="text-24px fw-semibold">3</p>
                <p className="pr-3">
                  We prepare a proposal</p>
              </div>
            </div>
          </div>


          <div className=" col-md-6 ">
            <div className="bg-white py-3 rounded contact-form">
              <h2 className="text-center">Schedule a Free Consultation</h2>
              <hr />
              <form className="mx-4" onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="form-group col-6">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" name="firstName"  onChange={handleChange} value={formData.firstName} />
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" name="lastName"  onChange={handleChange} value={formData.lastName} />
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" name="email"  onChange={handleChange} value={formData.email} />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="company">Company / Organization</label>
                  <input type="text" className="form-control" name="company"  onChange={handleChange} value={formData.company} />
                </div>

                <div className="form-row mb-3">
                  <label htmlFor="phone">Phone Number</label>
                  <PhoneInput
                  country={"in"}
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handlePhoneChange} />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="helpDropdown">How Can We Help You With</label>
                  <select className="form-control" name="helpDropdown" onChange={handleChange} value={formData.helpDropdown}>
                    <option value="">Select an option</option>
                    <option value="Managed Services">Managed Services</option>
                    <option value="IT Consulting & Advisory">IT Consulting & Advisory</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="Other">Other</option>
                  </select>

                </div>

                <div className="form-group mb-3">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" name="message" rows="4"  onChange={handleChange} value={formData.message} />
                </div>

                <div className='py-2  d-flex justify-content-between'>
                  <div className="py-3">
                    <button type="submit" className="primary-button fw-semibold btn-block">Submit</button>
                  </div>
                  <div className={`alert alert-${alert.type}`} role="alert">
                    {alert.message}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;
