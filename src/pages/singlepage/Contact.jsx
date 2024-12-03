import { AlertBar } from "@/components/AlertBar";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { MdEmail, MdFax, MdLocationPin, MdPhoneAndroid } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

export const Contact = () => {
  const form = useRef();
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0knezyl", "template_pygrzed", form.current, {
        publicKey: "0OARZqf9ukJo6JCQP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setShowSuccessToast(true);
          setTimeout(() => {
            setShowSuccessToast(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setShowErrorToast(true);
          setTimeout(() => {
            setShowErrorToast(false);
          }, 3000);
        }
      );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col items-start justify-center min-h-screen w-full">
      <AlertBar />
      <Navigation />
      <div className="flex grow w-full justify-center p-5">
        <div className="border border-zinc-200 rounded container grid grid-cols-1 md:grid-cols-2 w-full bg-gray-100 shadow">
          <div className="flex flex-wrap flex-col gap-4 py-14 px-10">
            <div className="flex flex-wrap gap-2 ">
              <h1 className="text-3xl font-semibold uppercase">Contact Us</h1>
              <p className="text-base leading-relaxed">
                Thank you for visiting our website! If you have any questions or inquiries, feel
                free to reach out to us using the contact information below.
              </p>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <div className="flex w-full justify-start items-center my-5 gap-5 w-full">
                <MdLocationPin className="text-2xl flex-shrink-0 w-8 h-8" />
                <p className="w-max text-sm">
                  Room 1605, Ho King Commercial Centre, 2-16 Fa Yuen Street, Mongkok, Kowloon, Hong
                  Kong
                </p>
              </div>

              <div className="flex w-full justify-start items-center my-5 gap-5 w-full">
                <MdEmail className="text-2xl flex-shrink-0 w-8 h-8" />
                <p className="w-max text-sm">inquiries@keepgoinggolf.com</p>
              </div>

              <div className="flex w-full justify-start items-center my-5 gap-5 w-full">
                <MdPhoneAndroid className="text-2xl flex-shrink-0 w-8 h-8" />
                <p className="w-max text-sm">00852-61588111</p>
              </div>

              <div className="flex w-full justify-start items-center my-5 gap-5 w-full">
                <MdFax className="text-2xl flex-shrink-0 w-8 h-8" />
                <p className="w-max text-sm">00852-69917688</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap flex-col gap-4 bg-white py-14 px-10">
            <p className="text-3xl font-semibold capitalize">send us a message!</p>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="formName" className="block text-lg font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="formName"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="formEmail" className="block text-lg font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="formEmail"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="formMessage" className="block text-lg font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  id="formMessage"
                  rows="4"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
