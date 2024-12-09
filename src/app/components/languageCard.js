import { Card, CardHeader, CardBody } from "@nextui-org/react";
import java from 'programming-languages-logos/src/java/java.png';
import javascript from 'programming-languages-logos/src/javascript/javascript.png';
// Import other language logos as needed

const languageLogos = {
    java: java,
    javascript: javascript,
    // Add other languages and their logos here
};

const LanguageCard = ({ language }) => {
    const logo = languageLogos[language.toLowerCase()];

    if (!logo) {
        return <p>Logo for {language} not found</p>;
    }

    return (
        <Card>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{language}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <img src={logo} alt={`${language} logo`} style={{ width: '50px', height: '50px' }} />
            </CardBody>
        </Card>
    );
};

export default LanguageCard;