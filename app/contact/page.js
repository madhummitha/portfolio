"use client";
import React from "react";
import ContactForm from "../components/ContactForm";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  return (
    <ContactForm
      formData={formData}
      setFormData={setFormData}
      handleChange={(e) => handleChange(formData, setFormData, e)}
      handleSubmit={(e) => handleSubmit(e, formData, setFormData)}
    />
  );
};

export const handleChange = (formData, setFormData, e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e, formData, setFormData) => {
  e.preventDefault();

  try {
    console.log("inside try", formData);
    await axios.post("/api/contact", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
    console.log("after axios.post", formData, setFormData);
  } catch (error) {
    console.log("Error submitting form", error);
    alert("Error submitting form");
  }
};

export default Contact;
