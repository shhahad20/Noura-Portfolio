import React from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import "../styles/Contact.scss";

const containerVariants = {
	hidden: { opacity: 0, y: 60 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut } },
};
const itemVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: 0.2 + i * 0.15, duration: 0.7, ease: easeInOut },
	}),
};

const Contact: React.FC = () => {
	return (
		<motion.section
			className="contact-section"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			variants={containerVariants}
		>
			<motion.h2 className="contact-title" variants={itemVariants} custom={0}>
				Get In Touch
			</motion.h2>
			<motion.p className="contact-desc" variants={itemVariants} custom={1}>
				I'm always open to new opportunities, collaborations, or just a friendly chat.<br />
				Feel free to reach out via the form below or connect with me on social media!
			</motion.p>
			<motion.form
				className="contact-form"
				variants={itemVariants}
				custom={2}
				onSubmit={e => e.preventDefault()}
				autoComplete="off"
			>
				<div className="form-row">
					<input type="text" name="name" placeholder="Your Name" required />
					<input type="email" name="email" placeholder="Your Email" required />
				</div>
				<textarea name="message" placeholder="Your Message" required rows={4} />
				<motion.button
					type="submit"
					className="contact-btn"
				>
					Send Message
				</motion.button>
			</motion.form>
			<motion.div className="contact-glow" initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ duration: 1.2, delay: 0.5 }} />
		</motion.section>
	);
};

export default Contact;