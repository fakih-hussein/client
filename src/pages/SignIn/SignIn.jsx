import React from "react";
import "./SignIn.css"
import logo from "./../../assets/images/logo.png"
import Glogo from "./../../assets/images/google-logo.png"
import "./../../ui/styles/base.css"
import SignUp from "../SignUp/SignUp";

import { useDispatch } from "react-redux";
import { showSignUp } from "../../redux/modalSlice";

const SignIn = () => {
    const dispatch = useDispatch();
    const handleSignUpClick = () => {
        dispatch(showSignUp());
    }

    const [errors, setErrors] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors({
            ...errors,
            [e.target.name]: '',
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', formData);
            console.log(response);
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                navigate("/newtrip")
            } else {
                setErrors(response.data.message);
                console.log(response.data.message);
            }
        } catch (error) {
            setErrors(error.response.data.message);
            console.log(error.response.data.message);
        }
    }

    useEffect(() => {
        console.log(form);
      }, [form]);
      
    return (

        <div className="form flex column center">

            <div className="flex column center">
                <div className="logo"><img src={logo} alt="logo" /></div>
                <p className="title bold">Sign In</p>
                <p className="subtitle">Sign in to save your trip plans and access them on any device.</p>
            </div>
            <p className="link">New to Plan Mate AI? <a className="bold" onClick={handleSignUpClick}>Sign Up</a></p>
            <div className="input flex column space-between">
                <input className="font-fam" type="email" placeholder="Email" />
                <input className="font-fam" type="password" placeholder="Password" />
                <button className="font-fam" type="submit">Continue</button>
            </div>

            <div className="google-div flex center ">
                <button className="flex row center"><img src={Glogo} />Continue with google</button>
            </div>

        </div>


    )
}

export default SignIn