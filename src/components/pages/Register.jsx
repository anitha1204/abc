// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import toast from "react-hot-toast";
// // import axios from "axios";

// // const Register = () => {
// //   const navigate = useNavigate();
// //   const [values, setValues] = useState({
// //     Username: "",
// //     Useremail: "",
// //     Password: "",
// //     Useraddress:null
  
// //   });

// //   const generateError = (err) => toast.error(err, {
// //     position: "bottom-right",
// //   });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const { data ,token} = await axios.post("http://localhost:2000/api/register",{
// //         headers:{
// //           // Authorization:token
          
// //         }
// //       }, {
// //         ...values,
// //       }, {
// //         withCredentials: true,
// //       });

// //       // console.log(data);
// //       if (data) {
// //         if (data.errors) {
// //           const { Useremail, Password } = data.errors;
// //           if (Useremail) generateError(Useremail);
// //           else if (Password) generateError(Password);
// //         } else {
// //           navigate("/")
// //           toast.success("Registration successful!", {
// //             position: "bottom-right",
// //           });
// //         }
// //       }
// //     } catch (error) {
// //       console.log(error);
// //       generateError("Network error. Please try again later.");
// //     }
// //   };

// //   return (
// //     <>
// //     <div className="flex justify-center items-center min-h-screen bg-gray-100">
// //       <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
// //         <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 duration-200 w-[400px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
// //           <form className="space-y-6" onSubmit={handleSubmit}>
// //             <p className="text-center text-primary text-2xl font-medium">
// //               Register Account
// //             </p>
// //             <div>
// //               <label htmlFor="UserName" className="text-lg">UserName</label>
// //               <input
// //                 type="text"
// //                 name="Username"
// //                 placeholder="Enter UserName"
// //                 value={values.Username}
// //                 onChange={(e) =>
// //                   setValues({ ...values, [e.target.name]: e.target.value })
// //                 }
// //                 className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
// //               />
// //             </div>

// //             <div>
// //               <label htmlFor="email" className="text-lg">Email</label>
// //               <input
// //                 type="email"
// //                 name="Useremail"
// //                 placeholder="Enter email"
// //                 value={values.Useremail}
// //                 onChange={(e) =>
// //                   setValues({ ...values, [e.target.name]: e.target.value })
// //                 }
// //                 className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
// //               />
// //             </div>
// //             <div>
// //               <label htmlFor="password" className="text-lg">
// //                 Password
// //               </label>
// //               <input
// //                 type="password"
// //                 name="Password"
// //                 placeholder="Password"
// //                 value={values.Password}
// //                 onChange={(e) =>
// //                   setValues({ ...values, [e.target.name]: e.target.value })
// //                 }
// //                 className="w-full rounded-lg border-gray-200 p-3 text-sm shadow-sm"
// //               />
// //             </div>

// //             <button
// //               type="submit"
// //               className="block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white"
// //             >
// //               Submit
// //             </button>
// //             <span className="block text-center">
// //               Already have an account?
// //               <Link to="/login" className="text-primary">
// //                 Login
// //               </Link>
// //             </span>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //     </>
// //   );
// // };

// // export default Register;



// import React, { useState } from "react";
// import { Form, Input, Button } from 'antd';
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { toast } from 'react-hot-toast';

// function Register() {
//     const [userData, setUserData] = useState({
//         Username: "",
//         Useremail: "",
//         Password: "",
//         Useraddress: null
//     });

//     const navigate = useNavigate();

//     const handleOnChange = (e) => {
//         setUserData((prevUserData) => ({
//             ...prevUserData,
//             [e.target.name]: e.target.value
//         }));
//     };

//     const handleSubmit = async (values) => {
//         try {
//             const response = await axios.post("http://localhost:2000/api/signin", values, {
//                 withCredentials: true,
//             });
//             console.log(response.data.message);
//             toast.success(response.data.message);
//             navigate('/login');
//         } catch (err) {
//             console.log(err);
//             toast.error("Registration failed. Please try again.");
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//                 <h1 className="text-2xl font-bold mb-4">NICE TO MEET YOU</h1>
//                 <Form layout='vertical' onFinish={handleSubmit}>
//                     <Form.Item label='Name' name='Username'>
//                         <Input 
//                             placeholder="Name" 
//                             name="Username" 
//                             onChange={handleOnChange} 
//                             value={userData.Username} 
//                             className="w-full p-2 border border-gray-300 rounded-md"
//                         />
//                     </Form.Item>
//                     <Form.Item label='Email' name='Useremail'>
//                         <Input 
//                             placeholder="Email" 
//                             name="Useremail" 
//                             onChange={handleOnChange} 
//                             value={userData.Useremail} 
//                             className="w-full p-2 border border-gray-300 rounded-md"
//                         />
//                     </Form.Item>
//                     <Form.Item label='Password' name='Password'>
//                         <Input.Password 
//                             placeholder="Password" 
//                             name="Password" 
//                             onChange={handleOnChange} 
//                             value={userData.Password} 
//                             className="w-full p-2 border border-gray-300 rounded-md"
//                         />
//                     </Form.Item>
//                     <Button type="primary" htmlType="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">REGISTER</Button>
//                     <Link to='/login' className="block mt-4 text-center text-blue-500">CLICK HERE TO LOGIN</Link>
//                 </Form>
//             </div>
//         </div>
//     );
// }

// export default Register;
// import React, { useState } from "react";
// import { Form, Input, Button } from 'antd';
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { toast } from 'react-hot-toast';

// function Register() {
//     const [userData, setUserData] = useState({
//         Username: "",
//         Useremail: "",
//         Password: "",
//         Useraddress: null
//     });

//     const navigate = useNavigate();

//     const handleOnChange = (e) => {
//         setUserData((prevUserData) => ({
//             ...prevUserData,
//             [e.target.name]: e.target.value
//         }));
//     };

//     const handleSubmit = async (values) => {
//         try {
//             const response = await axios.post("https://food-ipp7.onrender.com", values, {
//                 withCredentials: true,
//             });
//             console.log(response.data.message);
//             toast.success(response.data.message);
//             navigate('/login');
//         } catch (err) {
//             if (err.response) {
//                 // Server responded with a status other than 200 range
//                 console.error('Error response:', err.response.data);
//                 console.error('Error status:', err.response.status);
//                 console.error('Error headers:', err.response.headers);
//                 toast.error("Registration failed. Please try again.");
//             } else if (err.request) {
//                 // Request was made but no response was received
//                 console.error('Error request:', err.request);
//                 toast.error("Network error. Please check your connection.");
//             } else {
//                 // Something happened in setting up the request that triggered an Error
//                 console.error('Error message:', err.message);
//                 toast.error("An unexpected error occurred. Please try again.");
//             }
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//                 <h1 className="text-2xl font-bold mb-4">NICE TO MEET YOU</h1>
//                 <Form layout='vertical' onFinish={handleSubmit}>
//                     <Form.Item label='Name' name='Username'>
//                         <Input 
//                             placeholder="Name" 
//                             name="Username" 
//                             onChange={handleOnChange} 
//                             value={userData.Username} 
//                             className="w-full p-2 border border-gray-300 rounded-md"
//                         />
//                     </Form.Item>
//                     <Form.Item label='Email' name='Useremail'>
//                         <Input 
//                             placeholder="Email" 
//                             name="Useremail" 
//                             onChange={handleOnChange} 
//                             value={userData.Useremail} 
//                             className="w-full p-2 border border-gray-300 rounded-md"
//                         />
//                     </Form.Item>
//                     <Form.Item label='Password' name='Password'>
//                         <Input.Password 
//                             placeholder="Password" 
//                             name="Password" 
//                             onChange={handleOnChange} 
//                             value={userData.Password} 
//                             className="w-full p-2 border border-gray-300 rounded-md"
//                         />
//                     </Form.Item>
//                     <Button type="primary" htmlType="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">REGISTER</Button>
//                     <Link to='/login' className="block mt-4 text-center text-blue-500">CLICK HERE TO LOGIN</Link>
//                 </Form>
//             </div>
//         </div>
//     );
// }

// export default Register;
import React, { useState } from "react";
import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-hot-toast';

function Register() {
    const [userData, setUserData] = useState({
        Username: "",
        Useremail: "",
        Password: "",
        Useraddress: null
    });

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setUserData((prevUserData) => ({
            ...prevUserData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async () => {
        console.log("User Data:", userData); // Debug log
        try {
            const response = await axios.post(`https://food-ipp7.onrender.com/api/register`, userData, {
                withCredentials: true
              });
            console.log("Response Data:", response.data); // Debug log
            toast.success(response.data.message);
            navigate('/login');
        } catch (err) {
            if (err.response) {
                // Server responded with a status other than 200 range
                console.error('Error response:', err.response.data);
                console.error('Error status:', err.response.status);
                console.error('Error headers:', err.response.headers);
                toast.error("Registration failed. Please try again.");
            } else if (err.request) {
                // Request was made but no response was received
                console.error('Error request:', err.request);
                toast.error("Network error. Please check your connection.");
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', err.message);
                toast.error("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">NICE TO MEET YOU</h1>
                <Form layout='vertical' onFinish={handleSubmit}>
                    <Form.Item label='Name' name='Username'>
                        <Input 
                            placeholder="Name" 
                            name="Username" 
                            onChange={handleOnChange} 
                            value={userData.Username} 
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </Form.Item>
                    <Form.Item label='Email' name='Useremail'>
                        <Input 
                            placeholder="Email" 
                            name="Useremail" 
                            onChange={handleOnChange} 
                            value={userData.Useremail} 
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </Form.Item>
                    <Form.Item label='Password' name='Password'>
                        <Input.Password 
                            placeholder="Password" 
                            name="Password" 
                            onChange={handleOnChange} 
                            value={userData.Password} 
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">REGISTER</Button>
                    <Link to='/login' className="block mt-4 text-center text-blue-500">CLICK HERE TO LOGIN</Link>
                </Form>
            </div>
        </div>
    );
}

export default Register;


