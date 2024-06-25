


// import React, { useState } from "react";
// import { Form, Input, Button } from 'antd';
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import toast from 'react-hot-toast';



// function Login() {
//     const [userData, setUserData] = useState({
//         Useremail: "",
//         Password: ""
//     });

//     const navigate = useNavigate();

//     const handleOnChange = (e) => {
//         setUserData(prevUserData => ({
//             ...prevUserData,
//             [e.target.name]: e.target.value
//         }));
//     };

//     const handleSubmit = async (values) => {
//         try {
//             const response = await axios.post(`https://food-1-psa1.onrender.com/api/login`, values);
//             if (response.data.success) {
//                 toast.success(response.data.message);
//                 toast("Redirecting to home page");
//                 localStorage.setItem("token", response.data.data);
//                 navigate('/');
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             if (error.response) {
//                 // Server responded with a status other than 200 range
//                 toast.error(`Error: ${error.response.data.message}`);
//             } else if (error.request) {
//                 // Request was made but no response was received
//                 toast.error("Network error. Please check your connection.");
//             } else {
//                 // Something happened in setting up the request that triggered an Error
//                 toast.error("An unexpected error occurred. Please try again.");
//             }
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//                 <h1 className="text-2xl font-bold mb-4">WELCOME BACK</h1>
//                 <Form layout='vertical' onFinish={handleSubmit}>
//                     <Form.Item
//                         label='Email'
//                         name='Useremail'
//                         rules={[{ required: true, message: 'Please enter your email!' }]}
//                     >
//                         <Input
//                             placeholder="Email"
//                             name="Useremail"
//                             onChange={handleOnChange}
//                             value={userData.Useremail}
//                             className="w-full p-2 border border-gray-300 rounded-md"
//                             autoComplete="email"
//                         />
//                     </Form.Item>
//                     <Form.Item
//                         label='Password'
//                         name='Password'
//                         rules={[{ required: true, message: 'Please enter your password!' }]}
//                     >
//                         <Input.Password
//                             placeholder="Password"
//                             name="Password"
//                             onChange={handleOnChange}
//                             value={userData.Password}
//                             className="w-full p-2 border border-gray-300 rounded-md"
//                             autoComplete="current-password"
//                         />
//                     </Form.Item>
//                     <Button type="primary" htmlType="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
//                         Login
//                     </Button>
//                     <Link to='/register' className="block mt-4 text-center text-blue-500">
//                         CLICK HERE TO REGISTER
//                     </Link>
//                 </Form>
//             </div>
//         </div>
//     );
// }

// export default Login;


import React, { useState } from "react";
import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
    const [userData, setUserData] = useState({
        Useremail: "",
        Password: ""
    });

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setUserData(prevUserData => ({
            ...prevUserData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`https://food-1-psa1.onrender.com/api/login`, userData);
            if (response.data.success) {
                // toast.success(response.data.message);
                // toast("Redirecting to home page");
                console.log("Token received:", response.data.data);
                localStorage.setItem("token", response.data.data);
                navigate('/'); // Redirect to home page upon successful login
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            if (error.response) {
                // Server responded with a status other than 200 range
                toast.error(`Error: ${error.response.data.message}`);
            } else if (error.request) {
                // Request was made but no response was received
                toast.error("Network error. Please check your connection.");
            } else {
                // Something happened in setting up the request that triggered an Error
                toast.error("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">WELCOME BACK</h1>
                <Form layout='vertical' onFinish={handleSubmit}>
                    <Form.Item
                        label='Email'
                        name='Useremail'
                        rules={[{ required: true, message: 'Please enter your email!' }]}
                    >
                        <Input
                            placeholder="Email"
                            name="Useremail"
                            onChange={handleOnChange}
                            value={userData.Useremail}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            autoComplete="email"
                        />
                    </Form.Item>
                    <Form.Item
                        label='Password'
                        name='Password'
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                    >
                        <Input.Password
                            placeholder="Password"
                            name="Password"
                            onChange={handleOnChange}
                            value={userData.Password}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            autoComplete="current-password"
                        />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
                        Login
                    </Button>
                    <Link to='/register' className="block mt-4 text-center text-blue-500">
                        CLICK HERE TO REGISTER
                    </Link>
                </Form>
            </div>
        </div>
    );
}

export default Login;


