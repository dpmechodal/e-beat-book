import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const CreateBeats = () => {
  const [formData, setFormData] = useState({
    beatName: '',
    villageName: '',
    place: '',
  });
  const [showMap, setShowMap] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMapOpen = (e) => {
    e.preventDefault();
    if (formData.beatName && formData.villageName && formData.place) {
      setShowMap(true);
    } else {
      alert('Please fill out all fields before opening the map.');
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="asside">
        <div className='about-first'>
          <div className="row">
            <div className="col-12 mb-24">
              <div className="bg-box">
                <div className="pro-add-new px-0">
                  <p>Create Beats</p>
                </div>
                <div className="user-details">
                  <form className='row' onSubmit={handleMapOpen}>
                    <div className="mb-3 col-lg-4 col-md-6 col-12">
                      <label className='mb-2'>Beat Name</label>
                      <input
                        type="text"
                        name="beatName"
                        className="form-control"
                        value={formData.beatName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3 col-lg-4 col-md-6 col-12">
                      <label className='mb-2'>Village Name</label>
                      <input
                        type="text"
                        name="villageName"
                        className="form-control"
                        value={formData.villageName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3 col-lg-4 col-md-6 col-12">
                      <label className='mb-2'>Place</label>
                      <input
                        type="text"
                        name="place"
                        className="form-control"
                        value={formData.place}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="upload-reset-btn justify-content-center pt-2 mb-3">
                      <button type="submit" className='btn btn-upload me-0'>
                        Map Open
                      </button>
                    </div>
                  </form>
                  {showMap && (
                    <div className="col-12">
                      <iframe
                        src={`https://www.google.com/maps?q=${encodeURIComponent(
                          `${formData.villageName}, ${formData.place}`
                        )}&output=embed`}
                        width={'100%'}
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CreateBeats;
