
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
        
    });

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setUserData((prevUserData) => ({
            ...prevUserData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post("https://food-1-psa1.onrender.com/signin", values, {
                withCredentials: true,
            });
            console.log(response.data.message);
            toast.success(response.data.message);
            navigate('/login');
        } catch (err) {
            console.log(err);
            toast.error("Registration failed. Please try again.");
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
