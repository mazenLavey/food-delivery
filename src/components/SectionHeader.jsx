import PrimaryBtn from './PrimaryBtn';
import SectionHeaderCSS from './SectionHeader.module.css';

const SectionHeader = ({ text, subText = "", button = true, buttonLink = "", buttonText = "Show All", buttonType = "gray", targetBlank = false }) => {
    return (
        <header className={SectionHeaderCSS.section__title}>
            <h2>{text} <span>{subText}</span></h2>
            {button && <PrimaryBtn text={buttonText} type={buttonType} link={buttonLink} rel='noopener noreferrer' target={targetBlank && '_blank'} />}
        </header>
    )
}

export default SectionHeader;