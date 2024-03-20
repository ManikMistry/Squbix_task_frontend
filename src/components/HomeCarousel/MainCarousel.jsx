import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData} from './MainCarouselData';

const items = MainCarouselData.map((item)=><img className='cursor-pointer -z-10' role='presentation' alt='' src={item.image}/>)

const MainCarousel = () => (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
);
export default MainCarousel;