import PhotoGallery from '@/components/gallery';
import '../../../styles/background.css';
import Reveal from '@/components/animation/reveal';

const Gallery = () => {
    return (
        <div id="galleryBackground">
                <div className=' h-auto' style={{marginTop: "6vh", width: "58%"}}>
                <Reveal del={0.15} dur={0.5} position={"relative"} height='auto' var1={{opacity: 0, x: -75}} var2={{opacity: 1,x: 0}} width='100%'>
                    <div>
                        <PhotoGallery />
                    </div>
                </Reveal>
                </div>
        </div>
    );
}

export default Gallery;