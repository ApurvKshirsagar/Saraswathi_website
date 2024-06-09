
import React, { useState } from "react";
import "../styles/Complaint.css";
import ComplaintBox from "../assets/images/complaint_box.png";

const Complaint = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    rollNumber: "",
    phoneNumber: "",
    secretary: "",
    complaint: "",
    photo: null,
  });
  const [selectType, setSelectType] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="complaint-form-page">
      <div className="complaint-form-wrapper">
        <div className="complaint-form-container">
          <h1 className="complaint-form-title">Complaint Form</h1>
          <p className="complaint-form-subtitle">We are here to assist you</p>
          <p className="complaint-form-description">
            Please fill out the following with your complaint
          </p>
          <form onSubmit={handleSubmit} className="complaint-form">
            <div className="complaint-form-name-group">
              <div className="complaint-form-name-box">
                <label className="complaint-form-label">
                  Name<span className="complaint-form-required">*</span>
                </label>
                <div className="name-container">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="complaint-form-input name-container-1"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="complaint-form-input name-container-2"
                  />
                </div>
              </div>
              <div className="complaint-box-image">
                <img src={ComplaintBox} />
              </div>
            </div>
            <div className="roll-phone">
              <div className="complaint-form-group rollno">
                <label className="complaint-form-label">
                  Roll Number<span className="complaint-form-required">*</span>
                </label>
                <input
                  type="text"
                  name="rollNumber"
                  placeholder="e.g. AB12C345"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  required
                  className="complaint-form-input"
                />
              </div>
              <div className="complaint-form-group phoneno">
                <label className="complaint-form-label">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="+91"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="complaint-form-input"
                />
              </div>
            </div>

            <div className="complaint-form-group">
              <label className="complaint-form-label">
                Select Secretary
                <span className="complaint-form-required">*</span>
              </label>
              <div className="horizontal-bar">
                <button
                  className="horizontal-bar-button"
                  onClick={() => setSelectType("Position")}
                >
                  Position
                </button>
                <button
                  className="horizontal-bar-button"
                  onClick={() => setSelectType("Name")}
                >
                  Name
                </button>
              </div>
              {selectType == "Position" ? (
                <select
                  name="secretary"
                  value={formData.secretary}
                  onChange={handleChange}
                  required
                  className="complaint-form-select"
                >
                  <option value="">Position(AB12C345)</option>
                  <option value="secretary1">Secretary 1</option>
                  <option value="secretary2">Secretary 2</option>
                  <option value="secretary3">Secretary 3</option>
                </select>
              ) : (
                <select
                  name="secretary"
                  value={formData.secretary}
                  onChange={handleChange}
                  required
                  className="complaint-form-select"
                >
                  <option value="">Name (AB12C345)</option>
                  <option value="secretary1">Secretary 1</option>
                  <option value="secretary2">Secretary 2</option>
                  <option value="secretary3">Secretary 3</option>
                </select>
              )}
            </div>
            <div className="complaint-form-group">
              <label className="complaint-form-label">Add photo/video</label>
              <input
                type="file"
                name="photo"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="complaint-form-file"
              />
            </div>
            <div className="complaint-form-group">
              <label className="complaint-form-label">
                Write your complaint
                <span className="complaint-form-required">*</span>
              </label>
              <textarea
                name="complaint"
                placeholder="Write at least 4 words ..."
                value={formData.complaint}
                onChange={handleChange}
                required
                className="complaint-form-textarea"
              />
            </div>
            <button type="submit" className="complaint-form-button">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
