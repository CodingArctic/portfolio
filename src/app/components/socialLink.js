import React from 'react';
import Link from 'next/link';
import styles from "../page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const socialMediaLogos = {
    github: faGithub,
    linkedin: faLinkedin,
};

const SocialLink = ({ name, url }) => {
    const icon = socialMediaLogos[name.toLowerCase()];

    if (!icon) {
        return <p>Logo for {name} not found</p>;
    }

    return (
        <div className={styles.socialLink}>
            <Link href={url} target='_blank'>
                <FontAwesomeIcon width="30px" height="30px" icon={icon} />
            </Link>
        </div>
    );
};

export default SocialLink;