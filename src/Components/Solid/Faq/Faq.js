import React from 'react';

const Faq = () => {
    return (
        <div className='mid-container  '>
            <h1 className='text-2xl border-b-2 pb-3 mt-20 font-bold'>FREQUENTLY ASKED QUESTIONS?</h1>
            <div className="mt-12">
                <div tabIndex={0} className="  collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl  font-medium">
                        What is online learning like?
                    </div>
                    <div className="collapse-content">
                        <p>For those who have never encountered online learning, the biggest question is often what it is actually like. The caveat, as you know, is that online learning comes in several forms. Therefore, this is your chance to explain that to people. Point out that there are</p>
                    </div>
                </div>
                <div tabIndex={0} className=" mt-3 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                    Can I learn at my own pace?
                    </div>
                    <div className="collapse-content">
                        <p>This is another common question that people have about online courses. There are usually self-paced programs and traditional classroom or meeting-style programs available. Today’s world is full of busy people that want to better themselves, so the</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mt-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                    Are you accredited or licensed by educational organizations?
                    </div>
                    <div className="collapse-content">
                        <p>There isn’t always a need for licensing or accreditation for online courses. However, some programs do require it. Either way, people will usually ask what type of training or background you have, as well as any licensing that’s available if that’s relevant. Make</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mt-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                    What types of assignments do you give?
                    </div>
                    <div className="collapse-content">
                        <p>Like knowing the format of online learning, people often want to know the type of work they’ll be doing when they take online courses. Be sure to provide a glimpse of what you offer here and link to previous projects or assignments if you can. You can</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mt-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                    What are the requirements to take the courses or sign up with your website?
                    </div>
                    <div className="collapse-content">
                        <p>People will want to know how to get started. You can link them to the pages on your website that help them through that process, but you’ll also want to take the time to explain it to them here. If you have certain enrollment windows, for example, list those.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Faq;