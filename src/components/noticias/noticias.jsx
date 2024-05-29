import "./noticias.css"
const Noticias = () => {


    let currentIndex = 0;

    function moveSlide(direction) {
        const carousel = document.querySelector('.carousel');
        const items = document.querySelectorAll('.news-item');
        const totalItems = items.length;

        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = totalItems - 1;
        } else if (currentIndex >= totalItems) {
            currentIndex = 0;
        }

        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    return (
        <>
            <h2>Noticias</h2>
            <div className="carousel-container">
                <div className="carousel">
                    <div className="news-item">
                        <h2>Noticia 1</h2>
                        <p>Descripción de la noticia 1. Esta es una breve descripción del contenido de la noticia.</p>
                        <img src="https://www.prisa.com/uploads/2024/05/resized/350_35019-38-240224-20240224-00d1d1d432dda8c25a2b877c8aa269341534e240.jpg" />
                    </div>
                    <div className="news-item">
                        <h2>Noticia 2</h2>
                        <p>Descripción de la noticia 2. Esta es una breve descripción del contenido de la noticia.</p>
                        <img src="https://www.prisa.com/uploads/2024/05/resized/350_350carlos-nunez-presidente-ejecutivo-de-prisa-media.jpg" />
                    </div>
                    <div className="news-item">
                        <h2>Noticia 3</h2>
                        <p>Descripción de la noticia 3. Esta es una breve descripción del contenido de la noticia.</p>
                        <img src="https://www.prisa.com/uploads/2024/05/resized/350_350el-pais-us.jpeg" />
                    </div>
                </div>
                <button className="button-noticias prev" onClick={() => { moveSlide(-1) }}>&#10094;</button>
                <button className="button-noticias next" onClick={() => { moveSlide(1) }}>&#10095;</button>
            </div>
        </>
    )
}

export default Noticias; 