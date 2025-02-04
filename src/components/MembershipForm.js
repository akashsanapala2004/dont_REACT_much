import {useState} from 'react';
import { Card ,CardContent } from '@/components/ui/button';
import {Button} from '@/components/ui/input';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/Label';
function MembershipForm(){
    const [formData , setFormData ] = useState({
        name:'',
        email:'',
        password:'',
        membership:'basic'
    });
    const [ errors , setErrors ] = useState({});
    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = 'Name is Required';
        if (!formData.email.includes('@')) newErrors.email = 'Invalid Email';
        if (formData.password.length < 6 ) newErrors.password = 'Password is Weak';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleChange = (e) => {
        setFormData({ ...formData ,
            [e.target.name] : e.target.value,
            [e.target.email] : e.target.value ,
            [e.target.password] : e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()){
            alert('Membership form submitted successfully');
        }
    };

    return (
    <div className='card'>
        <div className='card-content'>
            <h2 className='form-title'> Membership Form </h2>
            <form onSubmit={handleSubmit} className='form'>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                </div>
            </form>
        </div>
    </div>
    );
}
export default MembershipForm;