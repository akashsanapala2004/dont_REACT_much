import {useState} from 'react';
import { Card ,CardContent } from '@/components/ui/button';
import {Button} from '@/components/ui/input';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/Label';
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
        <Card className="max-w-md mx-auto p-6 shadow-lg">
        <CardContent>
            <h2 className="text-xl font-bold mb-4">Membership Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label>Name</Label>
                <Input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full" />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
                <Label>Email</Label>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
                <Label>Password</Label>
                <Input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full" />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div>
                <Label>Membership Type</Label>
                <select name="membership" value={formData.membership} onChange={handleChange} className="w-full p-2 border rounded">
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
                </select>
            </div>
            <Button type="submit" className="w-full">Submit</Button>
            </form>
        </CardContent>
        </Card>
    );
    }
export default MembershipForm;