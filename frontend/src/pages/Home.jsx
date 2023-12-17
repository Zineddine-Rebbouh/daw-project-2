import React, { useState, useEffect } from "react";
import { delay, motion as m } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";
const Home = () => {
    const [ toggleScrollTop, setToggleScrollTop ] = useState( false );
    useEffect( () => {
        function handleScroll () {
            setToggleScrollTop( window.scrollY > 400 );
            console.log( toggleScrollTop );
        }
        window.addEventListener( "scroll", handleScroll );

        return () => {
            window.removeEventListener( "scroll", handleScroll );
        };
    }, [ toggleScrollTop ] );

    const Home = () => {
        return (
            <div></div>
        )
    }
    const ScrollTop = () => {
        window.scrollTo( {
            top: 0,
            behavior: "smooth",
        } );
        setToggleScrollTop( false );
    };
    const ScrollDown = () => {
        window.scrollTo( {
            top: 600,
            behavior: "smooth",
        } );
    };
    return (
        <m.div exit={ { x: "-100vw", position: 'fixed', transitionDuration: 3 } } className="bg-blue-600 ">
            <div className="p-4 rounded-lg flex min-h-screen  flex-col justify-around  items-center ">
                <m.h1
                    className=" sm:text-5xl lg:text-8xl text-4xl z-10 text-white  link-underline  "
                    animate={ {
                        opacity: 1,
                        transition: { delay: 0.5, duration: 0.7 },
                    } }
                    initial={ { opacity: 0 } }
                >
                    Video games addiction
                </m.h1>

                <m.img
                    drag dragConstraints={ { top: 0, left: 0, right: 0, bottom: 0 } } dragElastic={ 1 }

                    src="src\assets\images\—Pngtree—vector illustration of play video_6603689.png"
                    alt="video games addiction"
                    width={ 350 }
                    className="mb-4"
                    animate={ { opacity: 1, y: 0, transition: { delay: 0.5, type: 'spring', stiffness: 120 } } }
                    initial={ { opacity: 0, y: -500 } }

                    whileTap={ { rotate: 4 } }
                />
                <m.button
                    initial={ { opacity: 0 } }
                    animate={ { opacity: 1, transition: { delay: 1 } } }
                    className="  text-[#00df9a] p-1  rounded-full bg-[#06193B] flex justify-center items-center animate-bounce"
                    onClick={ ScrollDown }
                >
                    <FaAngleDoubleDown size={ 70 } />
                </m.button>
            </div>

            <m.div className=" w-full flex justify-center items-center flex-col p-4 lg:px-16">
                <m.p
                    className="text-3xl  text-white "
                    whileInView={ { scale: 1, transition: { delay: 0.01 } } }
                    initial={ { scale: 0.1 } }
                >
                    welcome to our platform dedicated to video game addiction awareness
                    and support , for patients seeking guidance or doctors exploring
                    treatment options .{ " " }
                </m.p>

                <div className="flex flex-wrap  justify-around">
                    <m.img
                        whileInView={ { opacity: 1, transitionDelay: 0.5, scale: 1 } }
                        initial={ { opacity: 0, scale: 0.5 } }
                        className=" rounded-xl m-4"
                        src="src\assets\images\game.webp"
                        whileHover={ { scale: 1.1 } }
                        alt=""
                        width={ "20%" }
                    />
                    <m.img
                        whileInView={ { opacity: 1, transitionDelay: 0.5, scale: 1 } }
                        initial={ { opacity: 0, scale: 0.5 } }
                        className=" rounded-xl m-4"
                        src="src\assets\images\3809149.jpg"
                        whileHover={ { scale: 1.1 } }
                        alt=""
                        width={ "20%" }
                    />

                    <m.img
                        whileInView={ { opacity: 1, transitionDelay: 0.5, scale: 1 } }
                        initial={ { opacity: 0, scale: 0.5 } }
                        className=" rounded-xl m-4"
                        src="src\assets\images\3771628.jpg"
                        alt=""
                        whileHover={ { scale: 1.1 } }
                        width={ "20%" }
                    />
                </div>
                <m.p
                    className="text-3xl  text-white "
                    whileInView={ { scale: 1, transition: { delay: 0.01 } } }
                    initial={ { scale: 0.1 } }
                >
                    we provide resources , expert insights , and a supportive community to
                    navigate the journey toward a balanced and healthy relationship with
                    gaming .
                </m.p>

                <m.img
                    whileInView={ { opacity: 1, transitionDelay: 0.5, scale: 1 } }
                    initial={ { opacity: 0, scale: 0.5 } }
                    className=" rounded-xl m-4"
                    src="src\assets\images\3622721.jpg"
                    alt=""
                    whileHover={ { scale: 1.05 } }
                    width={ "70%" }
                />

                <m.p
                    className="text-5xl p-8  text-white "
                    whileInView={ { scale: 1, transition: { delay: 0.01 } } }
                    initial={ { scale: 0.1 } }
                >
                    together , let`s level up towards a life well played.
                </m.p>
            </m.div>
            export default Home
            { toggleScrollTop && (
                <m.button
                    className=" fixed bottom-4  right-4 rotate-180 bg-[#00df9a] p-1  rounded-full text-[#06193B]"
                    onClick={ ScrollTop }
                >
                    <FaAngleDoubleDown size={ 40 } />
                </m.button>
            ) }
        </m.div>
    );
};

export default Home
