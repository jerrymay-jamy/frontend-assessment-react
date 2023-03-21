import React from "react";
import { motion } from "framer-motion";
import PageContainer from "./PageContainer";
import { colors, fonts } from "../assets/themed";

const AboutUs: React.FC = () => {
    return (
        <PageContainer>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                style={{ fontFamily: fonts.heading }}
            >
                <h1
                    style={{
                        fontSize: "4vh",
                        marginBottom: "2rem",
                        textAlign: "center",
                    }}
                >
                    About Us
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
                    justo. In hac habitasse platea dictumst. Sed sit amet tellus
                    vel odio vulputate blandit. Fusce lacinia velit dolor, in sodales enim eleifend nec.
                </p>
                <p
                    style={{
                        fontSize: "2.5vh",
                        marginBottom: "2rem",
                        textAlign: "center",
                    }}
                >
                    Nulla suscipit mi eu magna luctus, a aliquet metus faucibus. Nunc
                    quis justo id sapien bibendum eleifend. Sed lacinia augue eu velit
                    faucibus, vel sodales nisi imperdiet.
                </p>
            </motion.div>
        </PageContainer>
    );
};

export default AboutUs;