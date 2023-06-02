import GalleryCSS from "./Gallery.module.css";
import insta01 from "../../assets/insta01.png";
import insta02 from "../../assets/insta02.png";
import insta03 from "../../assets/insta03.png";
import insta04 from "../../assets/insta04.png";
import PhotoCard from "../../components/PhotoCard";
import { nanoid } from "nanoid";
import SectionHeader from "../../components/SectionHeader";

function Gallery() {
    const ArrayImages = [insta01, insta02, insta03, insta04]
    const imgElements = ArrayImages.map(el => <PhotoCard key={nanoid()} src={el} />)

    return (
        <section className={`${GalleryCSS.section} container`} id="gallery">
            <SectionHeader text="#YellowKitchens" subText="in Instagram" button={true} buttonLink="https://www.instagram.com/" buttonText="Visit" buttonType="gray" targetBlank={true} />
            <div className={GalleryCSS.photos}>
                {imgElements}
            </div>
        </section>
    );
}

export default Gallery;