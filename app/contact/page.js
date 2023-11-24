"use client";
import React from "react";
import ContactForm from "../components/ContactForm";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    toast.success("Form submitted successfully! 😄");
  } catch (error) {
    toast.error("Please provide all the details!");
  }
};

export default Contact;
