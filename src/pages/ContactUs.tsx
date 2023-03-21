import React from "react";
import { motion } from "framer-motion";
import PageContainer from "./PageContainer";
import { colors, fonts } from "../assets/themed";

const ContactUs: React.FC = () => {
    return (
        <PageContainer>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                style={{ fontFamily: fonts.heading }}
            >
                <span
                    style={{
                        fontSize: "4.5vh",
                        marginBottom: "2rem",
                        textAlign: "center",
                    }}
                >
                    Contact Us
                </span>
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <label htmlFor="name" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        style={{ marginBottom: "2rem", padding: "0.5rem", width: "100%" }}
                        required
                    />
                    <label htmlFor="email" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        style={{ marginBottom: "2rem", padding: "0.5rem", width: "100%" }}
                        required
                    />
                    <label htmlFor="message" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        style={{marginBottom: "2rem", padding: "0.5rem", width: "100%"}}
                        required
                        />
                    <motion.button
                        type="submit"
                        style={{
                            backgroundColor: colors.accent,
                            border: "none",
                            borderRadius: "0.25rem",
                            color: colors.secondary,
                            cursor: "pointer",
                            fontSize: "1.5rem",
                            marginTop: "2rem",
                            padding: "1rem",
                            width: "100%",
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>
        </PageContainer>
    );
};

export default ContactUs;