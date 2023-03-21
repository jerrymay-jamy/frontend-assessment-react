import React from "react";
import { motion } from "framer-motion";
import { colors, fonts } from "../assets/themed";

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

type PageContainerProps = {
    children: React.ReactNode;
};

const PageContainer = (props: PageContainerProps) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            style={{
                backgroundColor: colors.primary,
                color: colors.text,
                fontFamily: fonts.body,
                minHeight: "100vh",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                paddingTop: '100px'
            }}>
                {props.children}
            </div>
            <div style={{ marginTop: "auto" }}>
                <p style={{ fontSize: "1rem", textAlign: "center" }}>
                    © 2023 GGamez. All rights reserved.
                </p>
            </div>
        </motion.div>
    );
};

export default PageContainer;
