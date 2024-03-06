
import React, { useState,useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import pro from '../../assets/images/pro.jpg'
const ContactFormVal = yup.object({
  user_name: yup.string().required("please your username"),
  user_email: yup.string().required("please enter your user_email"),
  message: yup.string().required("please send a message").min(8, "ugu yaraan 8 xaraf").max(50, "ugu badnaan 256 xaraf"),

});

const Contact = () => {

  const { register, handleSubmit, setValue, reset,
    formState: { errors }, } = useForm({ resolver: yupResolver(ContactFormVal), });

  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();


    emailjs
      .sendForm(
        "service_2a2vlmp",
        "template_slg0tgl",
        form.current,
        "xvYuGiqqJHFUMZkN2"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully i will res soon");
          reset()
        },
        (error) => {
          console.log(error.text);
          toast.error("Message not sent try again ..");
        }
      );
  };



  return (
    <>
      <form className="contact" ref={form} onSubmit={handleSubmit(sendEmail)}>
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                  <img src={pro}></img>
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                        <BsGithub color="black" size={30} className="ms-2" />
                        <BsFacebook color="blue" size={30} className="ms-2" />
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        
                        {...register("user_name")}
                
                      />
                       <p>
                        {errors.user_name && (
                          <span className="text-danger">{errors.user_name.message}</span>
                        )}
                      </p>
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="user_email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        
                        {...register("user_email")}
                
                        />
                         <p>
                          {errors.user_email && (
                            <span className="text-danger">{errors.user_email.message}</span>
                          )}
                        </p>
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="message"
                        placeholder="Write your message"
                        className="mb-3"
                       
                        {...register("message")}
                
                      />
                       <p>
                        {errors.message && (
                          <span className="text-danger">{errors.message.message}</span>
                        )}
                      </p>
                    </div>
                    <div className="row px-3">
                      <button className="button" type="submit">
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
















