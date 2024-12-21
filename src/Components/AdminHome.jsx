import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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

  const [status, setStatus] = useState(true);
  const EditTeacherModal = useRef();
  const AddTeacherModal = useRef();
  const DeleteTeacherModal = useRef();

  // Main Teacher Data
  const [formData, setFormData] = useState([
    {
      _id: 87667554345,
      name: "John Doe",
      age: 30,
      cnic: "12345-6789012-3",
      department: "Computer Science",
      joiningDate: "2020-01-15",
      degree: "MSc Computer Science",
      expertise: "Artificial Intelligence",
      email: "johndoe@example.com",
      password: "password123",
      contactNo: "123-456-7890",
      landlineNo: "01-2345678",
      Active: true,
    },
    {
      _id: 87676554435,

      name: "Shilok",
      age: 20,
      cnic: "12345-6782435672-3",
      department: "IIT",
      joiningDate: "2022-04-15",
      degree: "MSc IIT",
      expertise: "Coding",
      email: "shilok@example.com",
      password: "Shilok123",
      contactNo: "123-454-234",
      landlineNo: "01-43543543",
      Active: false,
    },
    {
      _id: 54765678454,

      name: "SAGAR",
      age: 30,
      cnic: "12345-6789012-3",
      department: "Financial",
      joiningDate: "2030-01-15",
      degree: "MSc Financial",
      expertise: "Trading",
      email: "sagar@example.com",
      password: "password123",
      contactNo: "123-456-7890",
      landlineNo: "01-2345678",
      Active: true,
    },
    {
      _id: 2437655676543,
      name: "Gm",
      age: 30,
      cnic: "12345-6789012-3",
      department: "software",
      joiningDate: "2020-01-15",
      degree: "MSc software",
      expertise: "Artificial Intelligence",
      email: "johndoe@example.com",
      password: "password123",
      contactNo: "123-456-7890",
      landlineNo: "01-2345678",
      Active: false,
    },
    {
      _id: 876547654345,
      name: "John Doe",
      age: 30,
      cnic: "12345-6789012-3",
      department: "Computer Science",
      joiningDate: "2020-01-15",
      degree: "MSc Computer Science",
      expertise: "Artificial Intelligence",
      email: "johndoe@example.com",
      password: "password123",
      contactNo: "123-456-7890",
      landlineNo: "01-2345678",
      Active: true,
    },
    {
      _id: 8775643654435,

      name: "Shilok",
      age: 20,
      cnic: "12345-6782435672-3",
      department: "IIT",
      joiningDate: "2022-04-15",
      degree: "MSc IIT",
      expertise: "Coding",
      email: "shilok@example.com",
      password: "Shilok123",
      contactNo: "123-454-234",
      landlineNo: "01-43543543",
      Active: false,
    },
    {
      _id: 54543678454,

      name: "SAGAR",
      age: 30,
      cnic: "12345-6789012-3",
      department: "Financial",
      joiningDate: "2030-01-15",
      degree: "MSc Financial",
      expertise: "Trading",
      email: "sagar@example.com",
      password: "password123",
      contactNo: "123-456-7890",
      landlineNo: "01-2345678",
      Active: true,
    },
    {
      _id: 243565676543,
      name: "Gm",
      age: 30,
      cnic: "12345-6789012-3",
      department: "software",
      joiningDate: "2020-01-15",
      degree: "MSc software",
      expertise: "Artificial Intelligence",
      email: "johndoe@example.com",
      password: "password123",
      contactNo: "123-456-7890",
      landlineNo: "01-2345678",
      Active: false,
    },
    {
      _id: 878754654345,
      name: "John Doe",
      age: 30,
      cnic: "12345-6789012-3",
      department: "Computer Science",
      joiningDate: "2020-01-15",
      degree: "MSc Computer Science",
      expertise: "Artificial Intelligence",
      email: "johndoe@example.com",
      password: "password123",
      contactNo: "123-456-7890",
      landlineNo: "01-2345678",
      Active: true,
    },
    {
      _id: 87564654435,

      name: "Shilok",
      age: 20,
      cnic: "12345-6782435672-3",
      department: "IIT",
      joiningDate: "2022-04-15",
      degree: "MSc IIT",
      expertise: "Coding",
      email: "shilok@example.com",
      password: "Shilok123",
      contactNo: "123-454-234",
      landlineNo: "01-43543543",
      Active: false,
    },
    {
      _id: 5467438454,

      name: "SAGAR",
      age: 30,
      cnic: "12345-6789012-3",
      department: "Financial",
      joiningDate: "2030-01-15",
      degree: "MSc Financial",
      expertise: "Trading",
      email: "sagar@example.com",
      password: "password123",
      contactNo: "123-456-7890",
      landlineNo: "01-2345678",
      Active: true,
    },
    {
      _id: 243543676543,
      name: "Gm",
      age: 30,
      cnic: "12345-6789012-3",
      department: "software",
      joiningDate: "2020-01-15",
      degree: "MSc software",
      expertise: "Artificial Intelligence",
      email: "johndoe@example.com",
      password: "password123",
      contactNo: "123-456-7890",
      landlineNo: "01-2345678",
      Active: false,
    },
  ]);

  // Filtering Teacher Data According to Active and non Active
  const [FilteredTeachersData, setFilteredTeachersData] = useState(
    formData.filter((items) => items.Active === status)
  );

  // Current Editing and Deleting teacher

  const [currentTeacher, setCurrentTeacher] = useState({
    _id: 0,
    name: "",
    age: 0,
    cnic: "",
    department: "",
    joiningDate: "",
    degree: "",
    expertise: "",
    email: "",
    password: "",
    contactNo: "",
    landlineNo: "",
    Active: false,
  });

  // Current Adding New teacher

  const [currentNewTeacher, setCurrentNewTeacher] = useState({
    _id: 0,
    name: "",
    age: 0,
    cnic: "",
    department: "",
    joiningDate: "",
    degree: "",
    expertise: "",
    email: "",
    password: "",
    contactNo: "",
    landlineNo: "",
    Active: false,
  });

  // Editing a Teacher Logic

  const handleEdit = (data) => {
    EditTeacherModal.current.showModal();
    setCurrentTeacher(data);
  };

  const handleEditInputsChange = (e) => {
    setCurrentTeacher({
      ...currentTeacher,
      [e.target.name]: e.target.value,
    });
  };

  const onEditActiveChange = (e) => {
    setCurrentTeacher({
      ...currentTeacher,
      [e.target.name]: !currentTeacher.Active,
    });
  };

  const handleSave = (e, data) => {
    e.preventDefault();
    setFormData((prevItems) =>
      prevItems.map((item) =>
        item._id === data._id ? { ...item, ...data } : item
      )
    );
    notify("Successfully Edited The Teacher");
    EditTeacherModal.current.close();
  };

  // Deleting a Teacher Logic

  const confirmDelete = (data) => {
    DeleteTeacherModal.current.showModal();
    setCurrentTeacher(data);
  };
  const handleDelete = (data) => {
    DeleteTeacherModal.current.close();
    notify("Successfully Deleted The Teacher");

    setFormData((prevItems) =>
      prevItems.filter((items) => items._id !== data._id)
    );
  };

  // Adding a Teacher logic

  const handleAdd = () => {
    AddTeacherModal.current.showModal();
    setCurrentNewTeacher({
      ...currentNewTeacher,
      Active: true,
    });
  };
  const handleAddNewInputsChange = (e) => {
    setCurrentNewTeacher({
      ...currentNewTeacher,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddNewTeacher = (e) => {
    e.preventDefault();
    AddTeacherModal.current.close();
    notify("Successfully Add a Teacher");
    currentNewTeacher._id = Math.floor(1000000000 + Math.random() * 9000000000);
    setFormData(formData.concat(currentNewTeacher));
  };

  // refreshing the teacher's data whenever Main data change

  useEffect(() => {
    setFilteredTeachersData(
      formData.filter((items) => items.Active === status)
    );
  }, [formData]);

  // Function to toggle the Add new teacher's Active State
  const onActiveChange = (e) => {
    setCurrentNewTeacher({
      ...currentNewTeacher,
      [e.target.name]: !currentNewTeacher.Active,
    });
  };

  // Filtering the teacher's Data whenever user use filter option

  const handleStatusChange = async (event) => {
    const ActiveStatus = event.target.value === "false" ? false : true;
    setStatus(ActiveStatus);
    setFilteredTeachersData(
      formData.filter((items) => items.Active === ActiveStatus)
    );
  };

  return (
    <div className={`md:px-12 max-md:px-4 font-poppins_Regular`}>
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
              Total Teachers {FilteredTeachersData.length}
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
              onClick={handleAdd}
            >
              Add a New Teacher
            </motion.button>
            <motion.select
              initial={{ x: 20, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  ease: [0.6, -0.05, 0.01, 0.99],
                  delay: 0.9,
                },
              }}
              viewport={{ once: true }}
              value={status}
              onChange={handleStatusChange}
              className="border border-gray-300 text-gray-700 py-2 px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              style={{ marginRight: "1px" }}
            >
              <option value={true}>Active</option>
              <option value={false}>Non-Active</option>
            </motion.select>
          </div>

          {/* Showing Teachers Data */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-[1650px]:grid-cols-4 min-[2050px]:grid-cols-5 min-[2450px]:grid-cols-6 gap-y-8 gap-x-2 pt-2">
            {FilteredTeachersData.map((data) => {
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
                  <p className=" text-gray-600">
                    <span className="text-gray-800 font-medium capitalize">
                      Age:
                    </span>{" "}
                    {data.age}
                  </p>
                  <p className="text-gray-600">
                    <span className="text-gray-800 font-medium capitalize">
                      CNIC:
                    </span>{" "}
                    {data.cnic}
                  </p>
                  <p className="text-gray-600">
                    <span className="text-gray-800 font-medium capitalize">
                      Department:
                    </span>{" "}
                    {data.department}
                  </p>
                  <p className="text-gray-600">
                    <span className="text-gray-800 font-medium capitalize">
                      Date of Joining:
                    </span>{" "}
                    {data.joiningDate}
                  </p>
                  <p className="text-gray-600">
                    <span className="text-gray-800 font-medium capitalize">
                      Latest Academic Degree:
                    </span>{" "}
                    {data.degree}
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
                  <p className="text-gray-600">
                    <span className="text-gray-800 font-medium capitalize">
                      Password:
                    </span>{" "}
                    {data.password}
                  </p>
                  <p className="text-gray-600">
                    <span className="text-gray-800 font-medium capitalize">
                      Contact No:
                    </span>{" "}
                    {data.contactNo}
                  </p>
                  <p className="text-gray-600">
                    <span className="text-gray-800 font-medium capitalize">
                      Landline No:
                    </span>{" "}
                    {data.landlineNo}
                  </p>
                  {/* Action Buttons  */}
                  <div className="flex space-x-4 justify-end pt-1">
                    <button
                      onClick={() => {
                        handleEdit(data);
                      }}
                      className={`rounded min-h-[39px] px-[13px] py-[6px]
                          bg-zinc-900 min-w-[75px] text-white cursor-pointer`}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        confirmDelete(data);
                      }}
                      className={`rounded min-h-[39px] px-[13px] py-[6px]
                        bg-red-500 min-w-[75px] text-white cursor-pointer`}
                    >
                      Delete
                    </button>
                  </div>
                </motion.div>
              );
            })}
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
            ref={EditTeacherModal}
            className="sm:w-[330px] max-sm:w-[288px] bg-white p-6 rounded"
          >
            <h1 className="text-center pb-[30px] pt-1 px-3 text-2xl font-medium text-gray-900">
              Edit The Teacher Information
            </h1>
            <form
              onSubmit={(e) => {
                handleSave(e, currentTeacher);
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
                    value={currentTeacher.name}
                    onChange={handleEditInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="">
                  <label className="block text-gray-800 font-medium capitalize">
                    Age:
                  </label>
                  <input
                    type="number"
                    name="age"
                    required
                    value={currentTeacher.age}
                    onChange={handleEditInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="">
                  <label className="block text-gray-800 font-medium capitalize">
                    CNIC:
                  </label>
                  <input
                    type="text"
                    name="cnic"
                    required
                    value={currentTeacher.cnic}
                    onChange={handleEditInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="">
                  <label className="block text-gray-800 font-medium capitalize">
                    Department:
                  </label>
                  <input
                    type="text"
                    name="department"
                    required
                    value={currentTeacher.department}
                    onChange={handleEditInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="">
                  <label className="block text-gray-800 font-medium capitalize">
                    Date of Joining:
                  </label>
                  <input
                    type="text"
                    name="joiningDate"
                    required
                    value={currentTeacher.joiningDate}
                    onChange={handleEditInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="">
                  <label className="block text-gray-800 font-medium capitalize">
                    Latest Academic Degree:
                  </label>
                  <input
                    type="text"
                    name="degree"
                    required
                    value={currentTeacher.degree}
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
                    value={currentTeacher.expertise}
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
                    value={currentTeacher.email}
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
                    value={currentTeacher.password}
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
                    value={currentTeacher.contactNo}
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
                    value={currentTeacher.landlineNo}
                    onChange={handleEditInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="flex gap-x-1 items-center">
                  <label className="block text-gray-800 font-medium capitalize">
                    Active:
                  </label>

                  <input
                    type="checkbox"
                    className="theme-checkbox"
                    name="Active"
                    checked={currentTeacher.Active}
                    onChange={onEditActiveChange}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => EditTeacherModal.current.close()}
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

          {/* Add teacher Modal */}

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
            ref={AddTeacherModal}
            className="sm:w-[330px] max-sm:w-[288px] bg-white p-6 rounded"
          >
            <h1 className="text-center pb-[30px] pt-1 px-3 text-2xl font-medium text-gray-900">
              Add a Teacher
            </h1>
            <form onSubmit={handleAddNewTeacher}>
              <div className="space-y-3">
                <div className="">
                  <label className="block text-gray-800 font-medium capitalize">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter The Name"
                    onChange={handleAddNewInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="">
                  <label className="block text-gray-800 font-medium capitalize">
                    Age:
                  </label>
                  <input
                    type="number"
                    name="age"
                    required
                    placeholder="Enter The Age"
                    onChange={handleAddNewInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="">
                  <label className="block text-gray-800 font-medium capitalize">
                    CNIC:
                  </label>
                  <input
                    type="text"
                    name="cnic"
                    required
                    placeholder="Enter The CNIC Number"
                    onChange={handleAddNewInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="">
                  <label className="block text-gray-800 font-medium capitalize">
                    Department:
                  </label>
                  <input
                    type="text"
                    name="department"
                    required
                    placeholder="Enter The Department"
                    onChange={handleAddNewInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="">
                  <label className="block text-gray-800 font-medium capitalize">
                    Date of Joining:
                  </label>
                  <input
                    type="text"
                    name="joiningDate"
                    required
                    placeholder="Enter The Joining Date"
                    onChange={handleAddNewInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="">
                  <label className="block text-gray-800 font-medium capitalize">
                    Latest Academic Degree:
                  </label>
                  <input
                    type="text"
                    name="degree"
                    placeholder="Enter The Degree"
                    required
                    onChange={handleAddNewInputsChange}
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
                    placeholder="Enter The Expertise"
                    required
                    onChange={handleAddNewInputsChange}
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
                    placeholder="Enter The Email"
                    required
                    onChange={handleAddNewInputsChange}
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
                    placeholder="Enter The Password"
                    required
                    onChange={handleAddNewInputsChange}
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
                    placeholder="Enter The Contact No"
                    required
                    onChange={handleAddNewInputsChange}
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
                    placeholder="Enter The Landline No"
                    required
                    onChange={handleAddNewInputsChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="flex gap-x-1">
                  <label className="block text-gray-800 font-medium capitalize">
                    Active:
                  </label>
                  <input
                    type="checkbox"
                    className="theme-checkbox"
                    name="Active"
                    checked={currentNewTeacher.Active}
                    onChange={onActiveChange}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => AddTeacherModal.current.close()}
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
                  Add
                </button>
              </div>
            </form>
          </motion.dialog>

          {/* Delete teacher Modal */}

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
            ref={DeleteTeacherModal}
            className="sm:w-[330px] max-sm:w-[288px] bg-white p-6 rounded"
          >
            <h1 className="text-center pb-[26px] pt-1 px-3 text-2xl font-medium text-gray-900">
              Are you sure?
            </h1>
            <div
              className=" bg-white rounded-lg pb-3 space-y-4 break-words"
              key={currentTeacher._id}
            >
              <p className="text-[21px] text-center font-medium text-gray-800">
                {currentTeacher.name}
              </p>

              <p className="text-gray-600">
                <span className="text-gray-800 font-medium capitalize">
                  Latest Academic Degree:
                </span>{" "}
                {currentTeacher.degree}
              </p>
              <p className="text-gray-600">
                <span className="text-gray-800 font-medium capitalize">
                  Expertise:
                </span>{" "}
                {currentTeacher.expertise}
              </p>
              <p className="text-gray-600">
                <span className="text-gray-800 font-medium capitalize">
                  Email:
                </span>{" "}
                {currentTeacher.email}
              </p>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => DeleteTeacherModal.current.close()}
                className={`rounded px-[13px] py-[6px]
                      bg-transparent min-w-[75px] border-[2px] border-solid  border-blue-500  text-gray-900 cursor-pointer`}
              >
                Cancel
              </button>
              <button
                className={`rounded min-h-[39px] px-[13px] py-[6px]
                        bg-red-500 min-w-[75px] text-white cursor-pointer`}
                onClick={() => handleDelete(currentTeacher)}
              >
                Delete
              </button>
            </div>
          </motion.dialog>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AdminHome;
