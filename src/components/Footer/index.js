import logo from '../../assets/img/logo.JPG';
import facebook from '../../assets/img/facebook.JPG';
import whatsapp from '../../assets/img/whatsapp.JPG';
import instagram from '../../assets/img/instagram.JPG';
import './style.scss';
export function Footer() {
    return (
        <div className='footer-main'>

            <div className="footer">
                <div className="footer-principal">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <p>Há mais de 10 anos contribuindo nos serviços
                        <br />de mecânica e estética automotiva bem como<br />
                        na satisfação dos nossos clientes. </p> na satisfação


                    <p>Passa na BOX e deixe o seu carro novo!</p>
                    <div className='nav'>
                        <nav className="footer-content">
                            <div className="footer-icons" data-aos="fade-down">
                                <a href="https://www.instagram.com/boxexpressautocentermanaus/" target="_blank">
                                    <img className="i-instagram" src={instagram} alt="instagram" />
                                </a>

                                <a href="https://www.facebook.com/boxautocentermanaus" target="_blank">
                                    <img className="i-facebook" src={facebook} alt="facebook" />
                                </a>

                                <a href="https://api.whatsapp.com/send?phone=%2B559294949292&data=ARBM5vR2JTExDBOyXzVM8ew9fEeOb_lwgQ8qo5lYGr9GcI_zRQbPxn7NXQYSEBhYf25lQvaQ3iitqIVK1J1p5WbNhWrJwjIZmljswVMDKidsljPdJmZW7vxIM8KljO_nsjt-7VxPixp5xD3l0whzwAK4Sw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR2siO2H72b9VTJf428osgQhS04bGkFTqHqhoCj7vwDsX94lQ-xEQPMVk9E" target="_blank" >
                                    <img className="i-whatsapp" src={whatsapp} alt="whatsapp" />
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className='menu'>
                    <nav className='menu-nav'>
                        <ul className='menu-items'>
                            <li className='menu-item1'><a href='#sobre'>Sobre</a></li>
                            <li className='menu-item'><a href='#diferenciais'>Diferenciais</a></li>
                            <li className='menu-item'><a href='#servicos'>Serviços</a></li>
                            <li className='menu-item'><a href='#localizacao'>Localização</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='central-relacionamento'>
                    <h3>Central de relacionamento</h3>
                    <p>+55 (92) 99494-9292</p>
                    <p>boxexpressam@gmail.com</p>
                </div>
            </div>
            <div className='copy'>
                <p>© boxexpressautocentermanaus 2024. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}
