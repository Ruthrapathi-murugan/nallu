import React from "react";
import "./Courses.css";

const Courses = () => {
    return (
        <div className="courses-container">
            <h1>Choose Your Course to Drive With Confidence On The Road</h1>
            <p>
                Our meticulously designed courses help transform beginners into skilled and confident drivers. 
                Choose your desired course from a range of driving training courses and master the skill of driving 
                at Nallu Driving School.
            </p>
            <p>
                Want to check out which of our courses would be most suitable for you? Take a short quiz below
            </p>
            <button className="quiz-button">Get Recommended Courses</button>
            
            <div className="course-card">
                <h2>Learner Standard Track Course</h2>
                <p>
                    If you've never been behind the steering wheel, this course is for you. 
                    At the end of 21 days, you'll know the basic traffic rules and have a hands-on 
                    driving experience through simulators and on-road driving. What's more, you'll 
                    have the confidence of taking the RTO driving exam to obtain a permanent driving license.
                </p>
                <button className="explore-button">Explore Now</button>
                <button className="interest-button">I AM INTERESTED</button>
            </div>

            <div className="course-card">
                <h2>Learner Extended Track Course</h2>
                <p>
                    If you've never been behind the steering wheel, this course is for you. 
                    At the end of 26 days, you'll know the basic traffic rules and have a hands-on 
                    driving experience through simulators and on-road driving. What's more, you'll 
                    have the confidence of taking the RTO driving exam to obtain a permanent driving license.
                </p>
                <button className="explore-button">Explore Now</button>
                <button className="interest-button">I AM INTERESTED</button>
            </div>

            <div className="course-card">
                <h2>Learner Detailed Track Course</h2>
                <p>
                    If you've never been behind the steering wheel, this course is for you. 
                    At the end of 31 days, you'll know the basic traffic rules and have a hands-on 
                    driving experience through simulators and on-road driving. What's more, you'll 
                    have the confidence of taking the RTO driving exam to obtain a permanent driving license.
                </p>
                <button className="explore-button">Explore Now</button>
                <button className="interest-button">I AM INTERESTED</button>
            </div>

            <div className="course-card">
                <h2>Advance Course</h2>
                <p>
                    If you’re the one who has a license but feels under-confident while driving alone, 
                    this course is for you. At the end of these exciting 8 days, you’ll take on the roads effortlessly. 
                    How? By training under proficient trainers, of course.
                </p>
                <button className="explore-button">Explore Now</button>
                <button className="interest-button">I AM INTERESTED</button>
            </div>

            <div className="course-card">
                <h2>Corporate Course</h2>
                <p>
                    Hiring a driver? Or Looking to brush up the skills of your executives? Have them take this course. 
                    By the end of it, you’ll be able to assess the proficiency of the driver on 25 parameters like the 
                    ability to manage cars, adherence to traffic rules and practice of safety norms, among others. 
                    For the executives, special emphasis is laid on changing their attitude and road culture.
                </p>
                <button className="explore-button">Explore Now</button>
                <button className="interest-button">I AM INTERESTED</button>
            </div>
        </div>
    );
};

export default Courses;
