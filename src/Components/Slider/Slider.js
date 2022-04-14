import '../Slider/Slider.scss';

const Slider = ({images}) => {
    return (
        <div className="slider">
            <img src={images[0]} alt="application"/>
        </div>
    )
}

export default Slider;