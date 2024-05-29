import React, { useState, useEffect } from 'react';
import "./home.css";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../../assets/icons/Prisa.png";
import region from "../../assets/icons/region-caribe.jpg";
import Lanzadores from '../../components/lanzadores/lanzadores';
import proyectosBanner from "../../assets/icons/proyectosBanner.png";
import potencialBanner from "../../assets/icons/potencialBanner.png";
import News from '../../components/news/news';



const Home = () => {

  const gif = [{
    link_url: "/potencialDepartamentos",
    img_url: potencialBanner
  },
  {
    link_url: "/filtros",
    img_url: proyectosBanner
  }
  ]
  const [gifI, setGifI] = useState(0);

  const [mapa, setMapa] = useState("potencial solar");

  useEffect(() => {
    let i = 0
    const gifInterval = setInterval(() => {
      // let i = gifI

      if (i <= 1) {
        setGifI(i)
        i = i + 1
      } else {
        i = 0
        setGifI(i)
      }

    }, 2000);


    return () => {
      clearInterval(gifInterval)
      i = 0
      setGifI(i)
    }

  }, [mapa]);



  return (

    <div className="Home" id="Home">
      <div className="home-main-background">
        <div className="home-main-title-overlay">
          {/* <Link style={{textDecoration: 'none'}} to={gif[gifI]?.link_url}><p className="bienvenido"><span style={{ fontWeight: 'bold' }}>Caribe Potencia Energética</span></p></Link> */}
        </div>
        <Link style={{ width: '100%' }} to={gif[gifI]?.link_url}>
          <img src={gif[gifI]?.img_url} alt="plano escaneado" />
        </Link>
        {/* <img src={region} alt="marca de agua Construyendo Civilidad"></img> */}
      </div>
      <div className="home-content">
        <div className="home-content-text">
          <p
            className="text-principal"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper sapien lacus, quis rhoncus neque tempus ac. Quisque nec pretium quam. Maecenas in neque porta, vulputate nisl in, mollis enim. Maecenas fringilla, turpis sit amet eleifend vulputate, nulla augue venenatis mauris, et egestas sapien risus vitae ipsum. Vivamus lacinia quis tortor ac auctor. Vestibulum commodo placerat placerat. Quisque et massa at lorem cursus volutpat ut nec nunc. Donec consectetur, arcu quis efficitur volutpat, nunc tortor porttitor purus, vel elementum massa velit non odio.
            <br />
            <br />
            Integer sem ex, tincidunt molestie libero sit amet, pharetra mattis neque. Nunc in magna euismod, placerat velit sit amet, sagittis tellus. Ut sem purus, mattis nec mauris eget, pulvinar pharetra turpis. Vivamus ac laoreet nibh, non mollis massa. Duis vulputate, magna a convallis lobortis, diam massa gravida odio, eu dignissim nisi diam id massa. Donec in nisl eu arcu fermentum suscipit. Nulla id quam vulputate, finibus lacus vitae, scelerisque neque. Ut nisi magna, aliquet et varius non, semper et leo. Nam luctus sagittis auctor. Nullam ornare neque neque, non laoreet diam auctor vel. Etiam ullamcorper pretium viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus sit amet nisl ante. Mauris posuere non massa vel tempor. Aliquam suscipit sollicitudin laoreet.
            <br />
            <br />
            Nulla sit amet tortor est. Nulla non purus interdum leo pretium viverra et a leo. Sed euismod lectus eget lorem tempus, at posuere lectus fermentum. Aliquam hendrerit erat nulla, sit amet varius ligula finibus at. Proin eu eros vulputate, porttitor mauris sit amet, venenatis tortor. Quisque sed lorem ac leo sodales placerat. Sed volutpat nulla nibh, ac rutrum orci sodales vel.
          </p>
        </div>
        <div className="home-content-video">
          <iframe width="914" height="514" src="https://www.youtube.com/embed/XHAouERmdSg" title="La sostenibilidad para PRISA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      {/*Noticias*/}

      <News></News>
      {/*Fin noticias*/}

      <div style={{ padding: '3rem' }}>
        <Lanzadores />
      </div>

    </div>
  );
};
export default Home;
