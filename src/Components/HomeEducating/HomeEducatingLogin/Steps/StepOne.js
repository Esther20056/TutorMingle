import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import './Step2.css';

function StepOne() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const validationErrors = {};
        if (!data.state) validationErrors.state = 'State of residence is required.';
        if (!data.home_address) validationErrors.home_address = 'Street address is required.';
        if (!data.region) validationErrors.region = 'Region is required.';
        if (!data.nearest_bus_stop) validationErrors.nearest_bus_stop = 'Nearest bus stop is required.';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: '🎉 Congratulations! You have successfully completed Part 3 of the form! 🎉',
            customClass: {
                popup: 'custom-swal-popup',
                title: 'custom-swal-title',
                content: 'custom-swal-content',
                confirmButton: 'custom-swal-confirm',
                cancelButton: 'custom-swal-cancel',
                icon: 'custom-swal-icon'
            }
        }).then(() => {
            navigate("/third-step");
        }).finally(() => {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        });
    }

    return (
        <div className='step2-mainwrapper cream'>
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <div className="step2-first-inner-wrapper-form">
                    <p>Location</p>
                    <div className="form-input">
                        <label htmlFor=''>State of Residence</label>
                        <select name='state'>
                            <option value="">Select State</option>
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
                        {errors.state && <span className='error'>{errors.state}</span>}
                    </div>
                    <div className="form-input">
                        <label htmlFor="">Street Address</label>
                        <input type="text" name='home_address' placeholder='e.g plot 345 Norus close, Omole phase 1, Ikeja, Lagos state'/>
                        {errors.home_address && <span className='error'>{errors.home_address}</span>}
                    </div>
                    <div className="form-input">
                        <label htmlFor="">Region</label>
                        <input name='region' type="text" placeholder='e.g Ikeja, Ikorodu'/>
                        {errors.region && <span className='error'>{errors.region}</span>}
                    </div>
                    <div className="form-input">
                        <label htmlFor="">Nearest bus stop to your home</label>
                        <input type="text" name='nearest_bus_stop' placeholder='closest busstop to your house'/>
                        {errors.nearest_bus_stop && <span className='error'>{errors.nearest_bus_stop}</span>}
                    </div>
                    <button type='submit' disabled={loading}>{loading ? 'Submitting...' : 'Save and Continue'}</button>
                    <button><Link to="/second-step" className='back-btn'>Back</Link></button>
                </div>
            </form>
        </div>
    );
}

export default StepOne;
