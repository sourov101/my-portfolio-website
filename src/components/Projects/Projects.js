import React from 'react';

const Projects = () => {
    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20'>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Phone Mania</h2>
                    <p> 1. Phone Mania is a used products resale website. <br />
                        2. Users can create an account or signup by google to book and buy  products, sellers can add, delete and advertise their products. <br />
                        3. Admin can delete any users (buyer/seller) and make other users admin also delete any reported product. <br />
                        <br />
                        Technologies: React Js, React Router, React Hooks, Tailwind CSS, Firebase, DaisyUI, NodeJs, ExpressJs, MongoDB, and React Stripe.</p>
                    <div className="card-actions justify-end">
                        <a href="https://phone-menia.web.app/"><button className="btn btn-primary">Live site</button></a>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Paradise Travel</h2>
                    <p>1. Paradise travel is a travel review site where users can review the services they have chosen to travel.<br />
                        2. Users can sign up or log in with Google to add services they want to provide or review the services provided on the website.<br />
                        3. In the My review section, the user can see only his/her reviews and also can delete or edit it.<br />
                        <br />
                        Technologies: React Js, React Router, Firebase, Node Js, Express Js, Tailwind CSS, DaisyUI, and  MongoDB.
                    </p>
                    <div className="card-actions justify-end">
                        <a href="https://paradice-travel.web.app/"> <button className="btn btn-primary">Live site</button></a>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">IT Source</h2>
                    <p>1. IT source is ICT related learning website.<br />
                        2. There are 6 courses a person can learn, also provided with a PDF file download system.<br />
                        3. Learners also can check out courses if they wish to.<br />
                        <br />
                        Technologies: React Js, React Router, React Hooks, Tailwind CSS, DaisyUI  Node Js, Firebase, and MongoDB.</p>
                    <div className="card-actions justify-end">
                        <a href="https://it-source-f7e77.web.app/"><button className="btn btn-primary">Live site</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;