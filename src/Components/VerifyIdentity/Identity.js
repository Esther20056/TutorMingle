import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import './Identity.css';

function Identity() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [stream, setStream] = useState(null);
    const [cameraActive, setCameraActive] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const signupStep = localStorage.getItem('signupStep');
        if (signupStep && signupStep !== 'step5') {
            navigate(`/signup/${signupStep}`);
        }
    }, [navigate]);
    

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            setStream(stream);
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setCameraActive(true);
        } catch (error) {
            console.error('Error accessing camera:', error);
            Swal.fire({
                icon: 'error',
                title: 'Camera Access Denied',
                text: 'Please grant access to the camera and try again.',
            });
        }
    };

    const captureImage = async () => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = canvas.toDataURL('image/jpeg');
            try {
                await axios.post('http://localhost:8000/capturedimage/', { image: imageData });
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: '🎉 Your image was successfully captured! 🎉',
                    customClass: {
                        popup: 'custom-swal-popup',
                        title: 'custom-swal-title',
                        content: 'custom-swal-content',
                        confirmButton: 'custom-swal-confirm',
                    },
                    confirmButtonText: 'Continue',
                }).then(() => {
                    navigate('/educator_dashboard');
                });
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed!',
                    text: 'Failed to submit image. Please try again.',
                });
            }
        }
    };

    const stopCamera = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
            setCameraActive(false);
        }
    };

    return (
        <div className="Image_main_Wrapper">
            <Link to='/signup/step4' className="back-link">Back</Link>
            <div className='identity-wrapper'>
                <h3>Identity Verification</h3>
                <div className='button-containers'>
                    <button className='buttons' onClick={startCamera} disabled={cameraActive}>Start Camera</button>
                    <button className='buttons' onClick={captureImage} disabled={!cameraActive}>Capture Image</button>
                    <button className='buttons' onClick={stopCamera} disabled={!cameraActive}>Stop Camera</button>
                </div>
                <div>
                    {stream && <video ref={videoRef} autoPlay width={640} height={480} />}
                </div>
                <div>
                    <canvas ref={canvasRef} width={640} height={480} style={{ display: 'none' }} />
                </div>
            </div>
        </div>
    );
}

export default Identity;
