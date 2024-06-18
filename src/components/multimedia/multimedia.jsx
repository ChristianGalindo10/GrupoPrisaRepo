import "./multimedia.css";
const Multimedia = () => {
    return (
        <>
            <h3>Galería</h3>
            <div className="gallery-container">
                <div className="gallery-item" style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/GreenMountainWindFarm_Fluvanna_2004.jpg/350px-GreenMountainWindFarm_Fluvanna_2004.jpg')",
                    backgroundSize: 'cover'
                }}></div>
                <div className="gallery-item" style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsj0QqgK9JmxEPnft7nOh41sNwn0vP81X9yQ&s')",
                    backgroundSize: 'cover'
                }}></div>
                <div className="gallery-item" style={{backgroundImage: "url('https://twenergy.com/wp-content/uploads/2019/11/biomasa-en-colombia.jpg')",
                    backgroundSize: 'cover'
                }}></div>
                <div className="gallery-item" style={{backgroundImage: "url('https://assets.nabaliaenergia.com/site/blog/que-tipos-de-energia-hidraulica-existen.webp')",
                    backgroundSize: 'cover'
                }}></div>
                <div className="gallery-item" style={{backgroundImage: "url('https://www.wradio.com.co/resizer/v2/2MCXFJLSHRBWRBJ5VXRS6PPVMI.jpg?auth=914de0d2ca83d9f901faa6236abb7c696fd7c9f50c0760e0435f71f91e4a3c18&width=650&height=488&quality=70&smart=true')",
                    backgroundSize: 'cover'
                }}></div>
                <div className="gallery-item" style={{backgroundImage: "url('https://cdn0.ecologiaverde.com/es/posts/1/9/0/el_petroleo_es_un_recurso_renovable_3091_600_square.jpg')",
                    backgroundSize: 'cover'
                }}></div>
            </div></>
    )
}

export default Multimedia;