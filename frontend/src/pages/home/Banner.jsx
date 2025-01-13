import bannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
        <div className="md:w-1/2 w-full flex items-center md:justify-end">
            <img src={bannerImg} />
        </div>
        <div className="md:w-1/2 w-full">
            <h1 className="md:text-5xl text-2xl font-medium mb-7">Nuevo lanzamiento de esta semana.</h1>
            <p className="mb-10">Es hora de actualizar tu lista de lectura con algunos de los lanzamientos más recientes y destacados del mundo literario. Desde emocionantes thrillers hasta cautivadoras memorias, los nuevos lanzamientos de esta semana tienen algo para todos.</p>

            <button className='btn-primary'>Subscribe</button>
        </div>
    </div>
  )
}

export default Banner