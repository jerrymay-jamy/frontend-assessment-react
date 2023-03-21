import React from "react";
import { motion } from "framer-motion";
import PageContainer from "./PageContainer";
import { colors, fonts } from "../assets/themed";
import ParallaxText from "./component/ParallaxText";

const Home: React.FC = () => {
    return (
        <PageContainer>
            <section>
                <ParallaxText baseVelocity={-5}>GGamez Incorporation. Exam - Frontend Developer Assessment</ParallaxText>
                <ParallaxText baseVelocity={5}>Jamy - Frontend Developer - VueJS - React - Typescript</ParallaxText>
            </section>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                style={{ fontFamily: fonts.heading, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px'  }}
            >
                <h1
                    style={{
                        fontSize: "4vh",
                        marginBottom: "2rem",
                        textAlign: "center",
                    }}
                >
                    Welcome to our Gaming Website!
                </h1>
                <p
                    style={{
                        fontSize: "2.5vh",
                        marginBottom: "2rem",
                        textAlign: "center",
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    fringilla nulla ac tellus tempor, vel ultricies est lobortis.
                    Vestibulum sit amet nisl ullamcorper, iaculis magna eu, viverra
                    justo. In hac habitasse platea dictumst. Sed sit amet tellus vel
                    odio vulputate blandit. Fusce lacinia velit dolor, in sodales
                    enim eleifend nec.
                </p>
                <motion.button
                    style={{
                        backgroundColor: colors.accent,
                        border: "none",
                        borderRadius: "0.25rem",
                        color: colors.secondary,
                        cursor: "pointer",
                        fontSize: "2.5vh",
                        fontFamily: fonts.heading,
                        marginTop: "2rem",
                        padding: "1rem",
                        width: "50vh",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Start Gaming Now
                </motion.button>
            </motion.div>
            <section>
                <ParallaxText baseVelocity={-5}>GGamez Incorporation. Exam - Frontend Developer Assessment</ParallaxText>
                <ParallaxText baseVelocity={5}>Jamy - Frontend Developer - VueJS - React - Typescript</ParallaxText>
            </section>
        </PageContainer>
    );
};

export default Home;
