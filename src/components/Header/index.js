import React from 'react';
import logo from '../../assets/img/logo.JPG';
import facebook from '../../assets/img/facebook.JPG';
import whatsapp from '../../assets/img/whatsapp.JPG';
import instagram from '../../assets/img/instagram.JPG';
import parte1 from '../../assets/img/1.JPG';
import './style.scss';
import '../../styles/globals.scss';
import { Carousel } from '../Carousel';

export function CustomHeader() {
    return (
        <div className='header-p'>
            <header>
                <img src={logo} alt="logo" />

                <p>Passa na BOX e deixe o seu carro novo!</p>
                <div className='nav'>
                    <nav className="header-content">
                        <div className="header-icons" data-aos="fade-down">
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

                    <nav className='menu-nav'>
                        <ul className='menu-items'>
                            <li className='menu-item'><a href='#sobre'>Sobre</a></li>
                            <li className='menu-item'><a href='#diferenciais'>Diferenciais</a></li>
                            <li className='menu-item'><a href='#servicos'>Serviços</a></li>
                            <li className='menu-item'><a href='#localizacao'>Localização</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/* <div className='folder'>
                <div className='bg-folder'>
                    <img src={parte1} alt="parte1" />
                </div>
            </div>*/}
            <div className='folder'>
                <Carousel />
            </div>


        </div>
    );
}
