import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import '../Components/HomeEducating/HomeEducatingLogin/Steps/Step2.css';

function Location() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        const formData = new FormData(e.currentTarget);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        console.log('Form Data Submitted:', formDataObject);
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: '🎉 Congratulations! You have successfully completed Part 4 of the form! 🎉',
            customClass: {
                popup: 'custom-swal-popup',
                title: 'custom-swal-title',
                content: 'custom-swal-content',
                confirmButton: 'custom-swal-confirm',
                cancelButton: 'custom-swal-cancel',
                icon: 'custom-swal-icon'
            }
        }).then(() => {
            navigate("/tech_dashboard");
        });

        setLoading(false);
    };

    return (
        <div className='step2-mainwrapper burgundy'>
            <form className='form' onSubmit={handleSubmit}>
                <div className="step2-second-inner-wrapper-form">
                    <p>Location</p>
                    <div className="form-input">
                        <label htmlFor=''>State of Residence</label>
                        <select name='state'>
                            <option value="Abia">Abia</option>
                            <option value="Adamawa">Adamawa</option>
                            <option value="Akwa Ibom">Akwa Ibom</option>
                            <option value="Anambra">Anambra</option>
                            <option value="Bauchi">Bauchi</option>
                            <option value="Bayelsa">Bayelsa</option>
                            <option value="Benue">Benue</option>
                            <option value="Borno">Borno</option>
                            <option value="Cross River">Cross River</option>
                            <option value="Delta">Delta</option>
                            <option value="Ebonyi">Ebonyi</option>
                            <option value="Edo">Edo</option>
                            <option value="Ekiti">Ekiti</option>
                            <option value="Enugu">Enugu</option>
                            <option value="Gombe">Gombe</option>
                            <option value="Imo">Imo</option>
                            <option value="Jigawa">Jigawa</option>
                            <option value="Kaduna">Kaduna</option>
                            <option value="Kano">Kano</option>
                            <option value="Katsina">Katsina</option>
                            <option value="Kebbi">Kebbi</option>
                            <option value="Kogi">Kogi</option>
                            <option value="Kwara">Kwara</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Nasarawa">Nasarawa</option>
                            <option value="Niger">Niger</option>
                            <option value="Ogun">Ogun</option>
                            <option value="Ondo">Ondo</option>
                            <option value="Osun">Osun</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Plateau">Plateau</option>
                            <option value="Rivers">Rivers</option>
                            <option value="Sokoto">Sokoto</option>
                            <option value="Taraba">Taraba</option>
                            <option value="Yobe">Yobe</option>
                            <option value="Zamfara">Zamfara</option>
                        </select>
                    </div>
                    <div className="form-input">
                        <label htmlFor="">Region</label>
                        <input name='region' type="text" placeholder='e.g Ikeja, Ikorodu'/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="">Street Address</label>
                        <input type="text" name='home_address' placeholder='e.g plot 345 Norus close, Omole phase 1, Ikeja, Lagos state'/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="">Nearest bus stop to your home</label>
                        <input type="text" name='nearest_bus_stop' placeholder='closest busstop to your house'/>
                    </div>
                    <button type='submit' disabled={loading}>
                        {loading ? 'Submitting...' : 'Save and Continue'}
                    </button>
                    <button>
                        <Link to='/tech_three' className='back-btn'>Back</Link>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Location;
