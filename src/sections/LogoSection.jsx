import { logoIconsList } from "../constants";
import { useState } from "react";

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    );
};

const LogoSection = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="md:my-20 my-10 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="gradient-edge" />
            <div className="gradient-edge" />

            <div className="marquee h-52">
                <div
                    className={`marquee-box md:gap-12 gap-5 ${
                        isHovered ? "pause-animation" : ""
                    }`}
                >
                    {logoIconsList.map((icon, index) => (
                        <LogoIcon key={index} icon={icon} />
                    ))}

                    {logoIconsList.map((icon, index) => (
                        <LogoIcon key={index} icon={icon} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoSection;
