import {useState} from 'react';
import  { Button ,Card ,CardContent } from '@mui/material'
import './MembershipForm.css'
function MembershipForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        membership: "basic"
    });
    
    const [errors, setErrors] = useState({});
    
    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email.includes("@")) newErrors.email = "Invalid email";
        if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
        alert("Membership form submitted successfully!");
        }
    };
    
    return (
        <div className="container">
        <Card className="form-container">
        <CardContent className="content"/>
        <CardContent className="form">
            <h2 >Membership Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label>Name</label>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="" />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" placeholder="e-mail" value={formData.email} onChange={handleChange} className="" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" placeholder="e-mail" value={formData.password} onChange={handleChange} className="" />
                {errors.password && <p className="errors">{errors.password}</p>}
            </div>
            <div>
                <label>Membership</label>
                <select name="membership" value={formData.membership} onChange={handleChange} className="Membership-Type">
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
                </select>
            </div>
            <Button type="submit" className="Btn">Submit</Button>
            </form>
        </CardContent>
        </Card>
        </div>
    );
    }
export default MembershipForm;