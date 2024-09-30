import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Hero.css'
import './ResponsiveStyle.css'
import TMBanner from '../../Images/TMBanner.png'
import TMSecondBanner from '../../Images/TMSecondBanner.png'
import TeachingKids from '../../Images/TeachingKids.jpg'
import Teacher from '../../Images/Teacher.jpg'
import tutors from '../../../src/Tutordata'
import Testimony from '../Testimony/Testimony'

function Hero() {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [activeImage, setActiveImage] = useState(TeachingKids);
    const [activeBorderStyle, setActiveBorderStyle] = useState('0.7rem groove #9ACD32');
    const [activeBorderRadius, setActiveBorderRadius] = useState('3rem');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTutors, setFilteredTutors] = useState(tutors);
    const navigate = useNavigate();

    const handleAccordionClick = (index, image, borderStyle, borderRadius) => {
        setActiveAccordion(index === activeAccordion ? null : index);
        setActiveImage(image);
        setActiveBorderStyle(borderStyle);
        setActiveBorderRadius(borderRadius);

    };
    const handleSearch = (e) => {
        e.preventDefault();
        const query = searchQuery.toLowerCase();
        const filtered = tutors.filter(tutor =>
            (tutor.subject && tutor.subject.toLowerCase().includes(query)) ||
            (tutor.grade && tutor.grade.toLowerCase().includes(query)) ||
            (tutor.location && tutor.location.toLowerCase().includes(query))
        );
        setFilteredTutors(filtered);
        navigate('/educators', { state: { filteredTutors } });
    };

    const accordionItems = [
        {
            title: "Physical One-on-One Lecture",
            content: "Give your child hands-on tailored learning experience with the best educators in the comfort of your home.",
            image: TeachingKids,
            borderStyle: activeAccordion === 0 ? "0.7rem groove #9acd32" : "0.7rem groove #bce85d",
            borderRadius: "3rem"
        },
        {
            title: "Online One-on-One Lecture",
            content: "Give your child an Immersive className experience using our state-of-the-art digital tools with the best educators without any distractions.",
            image: TeachingKids,
            borderStyle: activeAccordion === 1 ? "0.7rem groove #800020" : "0.7rem groove #d15876",
            borderRadius: "3rem",
        },
        {
            title: "Home education",
            content: "Our dedicated educators bring the classnameroom to your home with lessons tailored to your child's individual needs.",
            image: TeachingKids,
            borderStyle: activeAccordion === 2 ? "0.7rem groove #778899" : "0.7rem groove #4c7daf",
            borderRadius: "3rem",
        },
        {
            title: "Early childhood education",
            content: "Our Early Years Foundation Educating Service is not just about catching up; it's about propelling your child forward. Give them the gift of a strong academic foundation that lasts a lifetime.",
            image: Teacher,
            borderStyle: activeAccordion === 3 ? "0.7rem groove #dfcd86" : "0.7rem groove  #cdc297",
            borderRadius: "3rem"

        },
        {
            title: "  Tech Skills",
            content: " Empower your child with an immersive tech learning experience, harnessing state-of-the-art digital tools guided by industry experts, free from any distractions, for unparalleled skill development.",
            image: Teacher,
            borderStyle: activeAccordion === 4 ? "0.7rem groove #888383" : "0.7rem groove #b4acac",
            borderRadius: "3rem",
        },
        {
            title: " Test readiness",
            content: "Help your child pass entrance exams into top schools. Prepare for Common Entrance, Checkpoint, 11+ Entrance Exam, IGCSE, SATs, SSCE, BECE, GCE, UTME/JAMB etc.",
            image: Teacher,
            borderStyle: activeAccordion === 5 ? "0.7rem groove #ffd700" : "0.7rem groove #ead662",
            borderRadius: "3rem"
        },
    ]
    return (
        <div>
            {/*  Banner starts here */}
            <div className="banner">
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators list-unstyled ">
                        <li
                            data-bs-target="#carouselId"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="First slide"
                        ></li>
                        <li
                            data-bs-target="#carouselId"
                            data-bs-slide-to="1"
                            aria-label="Second slide"
                        ></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img
                                src={TMBanner}
                                className="w-100 d-block"
                                alt="First slide"
                            />
                            <div className="carousel-body">
                                <p className="p-first">Trustworthy educators to help prepare your child for the future</p>
                                <button className="view-educators"><Link to='/educators'>View Educators</Link></button>
                                <p className="what-to-learn">What do you want to learn?</p>
                                <form className="form-container" onSubmit={handleSearch}>
                                    <input
                                        type="text"
                                        placeholder="Explore educators by subject and location"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <button className='btn' type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src={TMSecondBanner}
                                className="w-100 d-block"
                                alt="Second slide"
                            />
                            <div className="carousel-body">
                                <p>Empower learning. Expert educators, tailored for your child</p>
                                <button className="view-educators"><a href="">View Educators</a></button>
                                <p className="what-to-learn">What do you want to learn?</p>
                                <form className="form-container" onSubmit={handleSearch}>
                                    <input
                                        type="text"
                                        placeholder="Explore educators by subject and location"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <button className='btn"' type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev slide-btn"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden slide-btn-icon">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next slide-btn"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden slide-btn-icon">Next</span>
                    </button>
                </div>

            </div>
            {/* Banner ends here */}
            {/* first-content starts here */}
            <div className="first-content-container">
                <h2 className="header-text">Accessing assistance is simpler than you may imagine.</h2>
                <div className="wrapper">
                    <div className="first-content">
                        <h2>1</h2>
                        <div className="container">
                            <p className="f-p">Let us know where you need support and guidance</p>
                            <p>Link up with professionals proficient in various academic fields and technology.</p>
                        </div>
                    </div>
                    <div className="first-content">
                        <h2>2</h2>
                        <div className="container">
                            <p className="f-p">Choose The Educator You Want</p>
                            <p>Search online for a educators with the right qualifications, availability and hourly rates.</p>
                        </div>
                    </div>
                    <div className="first-content">
                        <h2>3</h2>
                        <div className="container">
                            <p className="f-p">Schedule your session</p>
                            <p>Tell your educator when you’d like to meet, and only pay for the time you need.</p>
                        </div>
                    </div>
                </div>
                <button><Link to="/homeducating">Get a home educator</Link></button>
            </div>
            {/* first-content ends here */}
            {/* second-content starts here */}
            <div className="second-content-container">
                <img src={TeachingKids} alt="" />
                <div className="first-content">
                    <p className="heaader-text">Become a Home Educator in Nigeria</p>
                    <p className="content-text">TutorMingle educators provide an avenue for experienced teachers to manage and grow their online and home tutoring business. Did you know that there are over 2,000 parents in Nigeria willing to pay premium (probably equal to or more than your regular school salary) to teach their children or even them according to professional standard?
                    </p>
                    <button><Link to="/becomeEducator">Become an Educator</Link></button>
                </div>
            </div>
            <div className="second-content-wrapper">
                <div className="first-content">
                    <p className="heaader-text">Become a Home Educator in Nigeria</p>
                    <p className="content-text">TutorMingle educators provide an avenue for experienced teachers to manage and grow their online and home tutoring business. Did you know that there are over 2,000 parents in Nigeria willing to pay premium (probably equal to or more than your regular school salary) to teach their children or even them according to professional standard?
                    </p>
                    <button><Link to="/becomeEducator" style={{ fontSize: "1rem", fontWeight: "600" }}>Become an Educator</Link></button>
                </div>
            </div>
            {/* Testimony-Section starts here */}
              <Testimony/>
              {/* Testimony-Section ends here */}
            {/* second-content ends here */}
            {/* third-content starts here */}
            <div className="third-content-container">
                <h2> Whatever your child's educational requirements, <br />we have a educator tailored just for them!   </h2>
                <p>We have all the solutions your child needs to excel in school.</p>
                <div className="wrapper">
                    <div className="text-container">
                        <div className="accordion" id="accordionExample">
                            {accordionItems.map((item, index) => (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header" id={`heading${index}`}>
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            onClick={() => handleAccordionClick(index, item.image, item.borderStyle, item.borderRadius)}
                                        >
                                            {item.title}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse${index}`}
                                        className={`accordion-collapse collapse ${activeAccordion === index ? 'show' : ''}`}
                                        aria-labelledby={`heading${index}`}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="img-container" id="imageContainer" style={{ border: activeBorderStyle, borderRadius: activeBorderRadius }}>
                        <img className="img-slide" src={activeImage} alt="" />
                    </div>
                </div>
                <div className="wrapper-two">
                    <div className="text-container">
                        <div className="accordion" id="accordionExample">
                            {accordionItems.map((item, index) => (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header" id={`heading${index}`}>
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            onClick={() => handleAccordionClick(index, item.image, item.borderStyle, item.borderRadius)}
                                        >
                                            {item.title}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse${index}`}
                                        className={`accordion-collapse collapse ${activeAccordion === index ? 'show' : ''}`}
                                        aria-labelledby={`heading${index}`}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            {item.content}
                                            <div className="img-container" id="imageContainer" style={{ border: activeBorderStyle, borderRadius: activeBorderRadius }}>
                                                <img className="img-slide" src={activeImage} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* third-content ends here */}
            {/* Last_content-container starts here  */}
            <div className="last-content-container">
    <h3>Get The Right Tutor For Your Child</h3>
    <div className="last-content-wrapper">
        <div className="content_first">
            <p id="class">Nursery and Preschool</p>
            <div className="overlay">
                <p className="overlay-p">Nursery and Preschool</p>
                <p>Engaging early learning with experts</p>
                <button><Link to="/homeducating">Get started</Link></button>
            </div>
        </div>
        <div className="content_first">
            <p id="class">Primary 1-6</p>
            <div className="overlay">
                <p className="overlay-p">Primary 1-6</p>
                <p>Focused support for primary students</p>
                <button><Link to="/homeducating">Get started</Link></button>
            </div>
        </div>
        <div className="content_first">
            <p id="class">JSS 1-3 & SSS 1-3</p>
            <div className="overlay">
                <p className="overlay-p">JSS 1-3 & SSS 1-3</p>
                <p>Prepare for secondary school challenges</p>
                <button><Link to="/homeducating">Get started</Link></button>
            </div>
        </div>
        <div className="content_first">
            <p id="class">Language</p>
            <div className="overlay">
                <p className="overlay-p">Language</p>
                <p>Improve reading, writing, and comprehension</p>
                <button><Link to="/languagesignup">Get started</Link></button>
            </div>
        </div>
        <div className="content_first">
            <p id="class">Tech Skills</p>
            <div className="overlay">
                <p className="overlay-p">Tech Skills</p>
                <p>Develop essential coding and digital skills</p>
                <button><Link to="/tech">Get started</Link></button>
            </div>
        </div>
        <div className="content_first">
            <p id="class">Exam Preparation</p>
            <div className="overlay">
                <p className="overlay-p">Exam Preparation</p>
                <p>Strategic practice for exam success</p>
                <button><Link to="/homeducating">Get started</Link></button>
            </div>
        </div>
    </div>
</div>

            {/* Last_content-container ends here  */}
        </div>
    )
}

export default Hero