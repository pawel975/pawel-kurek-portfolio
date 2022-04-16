import '../Slider/Slider.scss';

const Slider = ({images, liveVersionLink}) => {

    return (
        <>
            <div className="slider">
                <a 
                    href={liveVersionLink}
                    target='_blank'
                    rel="noreferrer"
                >
                    <img src={images[0]} alt="application"/>
                </a>
            </div>
        </>
    )
}

export default Slider;