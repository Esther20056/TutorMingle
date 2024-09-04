import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import './Identity.css';

function Identity() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [stream, setStream] = useState(null);
    const [cameraActive, setCameraActive] = useState(false);
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const signupStep = localStorage.getItem('signupStep');
        if (signupStep && signupStep !== 'step5') {
            navigate(`/signup/${signupStep}`);
        }
    }, [navigate]);

    useEffect(() => {
        const listDevices = async () => {
            try {
                const devices = await navigator.mediaDevices.enumerateDevices();
                console.log('Media Devices:', devices);
            } catch (error) {
                console.error('Error listing media devices:', error);
            }
        };
        listDevices();
    }, []);

    const startCamera = async () => {
        try {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                throw new Error('getUserMedia is not supported in this browser.');
            }

            console.log('Attempting to access camera...');
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            setStream(stream);

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.onloadedmetadata = () => {
                    videoRef.current.play().catch(error => console.error('Error playing video:', error));
                };
                videoRef.current.onerror = (error) => {
                    console.error('Video element error:', error);
                };
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

    const captureImage = () => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            
            if (context) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = canvas.toDataURL('image/jpeg');
                setImage(imageData); 

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
                    navigate('/educatordashboard');
                });
            } else {
                console.error('Canvas context is not available.');
            }
        } else {
            console.error('VideoRef or CanvasRef is null');
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
                    {stream && <video ref={videoRef} width={500} height={380} autoPlay />}
                </div>
                <div>
                    <canvas ref={canvasRef} width={500} height={380} style={{ display: 'none' }} />
                </div>
                {image && (
                    <div>
                        <h4>Captured Image:</h4>
                        <img src={image} alt="Captured" style={{ width: '640px', height: '480px' }} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Identity;
