import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-scroll";
import "../CSS/adminHome.css";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./Footer";

const AdminHome = () => {
  // First Section Animations
  const content = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const MainHeading = {
    initial: { x: -50, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 1.2,
      },
    },
  };

  const Para = {
    initial: { x: 50, opacity: 0 },
    animate: {
      x: 0,
      opacity: 0.9,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 1.2,
      },
    },
  };
  const Buttons = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 1.2,
      },
    },
  };

  // Notificationer

  const notify = (msg) => toast.success(msg);

  // Some Main States

  const EditYourProfileModal = useRef();

  // Main Teacher Data
  const [formData, setFormData] = useState([
    {
      _id: 87667554345,
      name: "John Doe",
      department: "Computer Science",
      expertise: "Artificial Intelligence",
      email: "johndoe@example.com",
    },

    {
      _id: 876547654345,

      name: "John Doe",
      department: "Computer Science",
      expertise: "Artificial Intelligence",
      email: "johndoe@example.com",
    },
    {
      _id: 8775643654435,

      name: "John Doe",
      department: "Computer Science",
      expertise: "Artificial Intelligence",
      email: "johndoe@example.com",
    },
    {
      _id: 54543678454,

      name: "John Doe",
      department: "Computer Science",
      expertise: "Artificial Intelligence",
      email: "johndoe@example.com",
    },
    {
      _id: 243565676543,

      name: "John Doe",
      department: "Computer Science",
      expertise: "Artificial Intelligence",
      email: "johndoe@example.com",
    },
  ]);

  //  Your profile

  const [yourProfile, setYourProfile] = useState({
    _id: 2435678345,
    name: "exp",
    expertise: "exp",
    email: "exp@gmail.com",
    password: "exp123#$$",
    contactNo: "123-456-789",
    landlineNo: "123-456-789-0",
  });
  const [yourProfileEditData, setyourProfileEditData] = useState({
    _id: "",
    name: "",
    expertise: "",
    email: "",
    password: "",
    contactNo: "",
    landlineNo: "",
  });

  // Editing Your Profile Logic

  const handleEdit = () => {
    EditYourProfileModal.current.showModal();
    setyourProfileEditData(yourProfile);
  };

  const handleEditInputsChange = (e) => {
    setyourProfileEditData({
      ...yourProfileEditData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setYourProfile(yourProfileEditData);
    notify("Successfully Edited The Teacher");
    EditYourProfileModal.current.close();
  };

  return (
    <div
      className={`md:px-12 max-md:px-4 font-poppins_Regular overflow-x-hidden`}
    >
      {/* Notificationer */}
      <div>
        <Toaster />
      </div>
      {/* Navbar */}
      <Navbar />
      <section className="pb-6">
        {/* HeroSection */}
        <div className="hero pt-28 pb-28 overflow-x-hidden">
          <div className="text-center w-full flex justify-center items-center">
            <motion.div
              className="max-w-md"
              variants={content}
              animate="animate"
              initial="initial"
            >
              <motion.h1
                className="text-5xl font-bold"
                variants={MainHeading}
                style={{
                  color: "rgb(31, 41, 55)",
                }}
              >
                Innovative Academy
              </motion.h1>
              <motion.p
                className="py-6 max-md:px-3"
                style={{
                  opacity: 0.9,
                  color: "rgb(75, 85, 99)",
                }}
                variants={Para}
              >
                Hi Admin! On this page, you can view a teacher's report, & You
                can also add, edit & delete any teacher that you want & you can
                also set any Teacher active or non-active.
              </motion.p>

              <motion.div className="animate-bounce mt-2" variants={Buttons}>
                <Link
                  to="teachersTag"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`rounded px-[13px] py-[7px]
                  bg-zinc-900 text-white cursor-pointer`}
                >
                  Go Down
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Showing teachers Data section */}
        <div className="overflow-x-hidden">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: [0.6, -0.05, 0.01, 0.99],
                delay: 0.3,
              },
            }}
            viewport={{ once: true }}
            id="teachersTag"
            className="text-center pb-[40px] px-3 pt-[90px] text-2xl font-medium text-gray-900"
          >
            Here's the Teacher's Report
          </motion.h1>
          {/* Filtering Section */}
          <div className="flex justify-between pt-4 pb-10 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-y-5 px-[6px]">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-gray-800"
            >
              Total Teachers {formData.length}
            </motion.div>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  ease: [0.6, -0.05, 0.01, 0.99],
                  delay: 0.5,
                },
              }}
              viewport={{ once: true }}
              className={`rounded px-[13px] py-[7px]
                  bg-zinc-900 text-white cursor-pointer`}
              onClick={handleEdit}
            >
              Edit Your Profile
            </motion.button>
          </div>

          {/* Showing Teachers Data */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-[1650px]:grid-cols-4 min-[2050px]:grid-cols-5 min-[2450px]:grid-cols-6 gap-y-8 gap-x-2 pt-2">
            {formData.map((data) => {
              return (
                <motion.div
                  className="sm:max-w-[330px] sm:min-w-[330px] max-sm:max-w-[305px] max-sm:min-w-[280px] mx-auto bg-white rounded-lg  px-6 py-6 border border-solid border-gray-900 space-y-4 break-words flex flex-col justify-between"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 1,

                      ease: [0.6, -0.05, 0.01, 0.99],
                      delay: 0.1,
                    },
                  }}
                  viewport={{ once: true }}
                  key={data._id}
                >
                  <p className="text-2xl text-center font-medium text-gray-900">
                    {data.name}
                  </p>

                  <p className="text-gray-600">
                    <span className="text-gray-800 font-medium capitalize">
                      Department:
                    </span>{" "}
                    {data.department}
                  </p>

                  <p className="text-gray-600">
                    <span className="text-gray-800 font-medium capitalize">
                      Expertise:
                    </span>{" "}
                    {data.expertise}
                  </p>
                  <p className="text-gray-600">
                    <span className="text-gray-800 font-medium capitalize">
                      Email:
                    </span>{" "}
                    {data.email}
                  </p>
                </motion.div>
              );
            })}
          </div>
          <div className="flex flex-col justify-center items-center mt-20 ">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  ease: [0.6, -0.05, 0.01, 0.99],
                  delay: 0.3,
                },
              }}
              viewport={{ once: true }}
              id="teachersTag"
              className="text-center text-3xl py-8 font-medium text-gray-900"
            >
              Your Profile
            </motion.h1>
            <motion.div
              className="sm:max-w-[330px] sm:min-w-[330px] max-sm:max-w-[305px] max-sm:min-w-[280px] mx-auto bg-white rounded-lg  px-6 py-6 border border-solid border-gray-900 space-y-4 break-words flex flex-col justify-between"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1,

                  ease: [0.6, -0.05, 0.01, 0.99],
                  delay: 0.1,
                },
              }}
              viewport={{ once: true }}
              key={yourProfile._id}
            >
              <p className="text-2xl text-center font-medium text-gray-900">
                {yourProfile.name}
              </p>

              <p className="text-gray-600">
                <span className="text-gray-800 font-medium capitalize">
                  Expertise:
                </span>{" "}
                {yourProfile.expertise}
              </p>
              <p className="text-gray-600">
                <span className="text-gray-800 font-medium capitalize">
                  Email:
                </span>{" "}
                {yourProfile.email}
              </p>
              <p className="text-gray-600">
                <span className="text-gray-800 font-medium capitalize">
                  Password:
                </span>
                {yourProfile.password}
              </p>
              <p className="text-gray-600">
                <span className="text-gray-800 font-medium capitalize">
                  Contact No:
                </span>
                {yourProfile.contactNo}
              </p>
              <p className="text-gray-600">
                <span className="text-gray-800 font-medium capitalize">
                  Landline No:
                </span>
                {yourProfile.landlineNo}
              </p>
            </motion.div>
          </div>

          {/* Edit teacher Modal */}
          <motion.dialog
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.99],
              },
            }}
            viewport={{ once: false }}
            ref={EditYourProfileModal}
            className="sm:w-[330px] max-sm:w-[288px] bg-white p-6 rounded"
          >
            <h1 className="text-center pb-[30px] pt-1 px-3 text-2xl font-medium text-gray-900">
              Edit The Teacher Information
            </h1>
            <form
              onSubmit={(e) => {
                handleSave(e);
              }}
            >
              <div className="space-y-3">
                <div className="">
                  <label className="block text-gray-800 font-medium capitalize">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={yourProfileEditData.name}
                    onChange={handleEditInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div className="">
                  <label className="block text-gray-800 font-medium capitalize">
                    Expertise:
                  </label>
                  <input
                    type="text"
                    name="expertise"
                    required
                    value={yourProfileEditData.expertise}
                    onChange={handleEditInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="">
                  <label className="block text-gray-800 font-medium capitalize">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={yourProfileEditData.email}
                    onChange={handleEditInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="">
                  <label className="block text-gray-800 font-medium capitalize">
                    Password:
                  </label>
                  <input
                    type="text"
                    name="password"
                    required
                    value={yourProfileEditData.password}
                    onChange={handleEditInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="">
                  <label className="block text-gray-800 font-medium capitalize">
                    Contact No:
                  </label>
                  <input
                    type="text"
                    name="contactNo"
                    required
                    value={yourProfileEditData.contactNo}
                    onChange={handleEditInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="">
                  <label className="block text-gray-800 font-medium capitalize">
                    Landline No:
                  </label>
                  <input
                    type="text"
                    name="landlineNo"
                    required
                    value={yourProfileEditData.landlineNo}
                    onChange={handleEditInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => EditYourProfileModal.current.close()}
                  className={`rounded px-[13px] py-[6px]
                      bg-transparent min-w-[75px] border-[2px] border-solid  border-blue-500  text-gray-900 cursor-pointer`}
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className={`rounded px-[13px] py-[6px]
                      bg-zinc-900 min-w-[75px] text-white cursor-pointer`}
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </motion.dialog>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AdminHome;
