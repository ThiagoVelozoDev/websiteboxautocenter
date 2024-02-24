import './style.scss';
import '../../styles/globals.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faOilWell, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { CustomHeader } from '../../components/Header';
import { Footer } from '../../components/Footer';
import alinhamento from '../../assets/img/alinhamento.PNG';
import pneu from '../../assets/img/pneu.jpg';
import oleo from '../../assets/img/oleo.PNG';
import injecao from '../../assets/img/injecao.jpg';
import motor from '../../assets/img/motor.PNG';
import suspencao from '../../assets/img/suspensao.PNG';
import cambio from '../../assets/img/cambio.jpg';
import freio from '../../assets/img/freio.jpg';
import eletrica from '../../assets/img/eletrica.PNG';





export function Home() {

    return (
        <>
            <CustomHeader />

            <main>
                <div className='main-principal'>
                    <div  id="diferenciais" className="diferenciais">
                        <h2 className='titulo-section'>Diferenciais</h2>
                        <div className="diferenciais-itens">
                            <div>
                                <div className='dif-card' data-aos="fade-up" data-aos-delay="50"><li><FontAwesomeIcon icon={faSquareCheck} style={{ color: 'rgb(179, 3, 3)', fontSize: '45px', marginRight: '20px' }} /> Profissionais Qualificados</li></div>
                                <div className='dif-card' data-aos="fade-up" data-aos-delay="250"><li><FontAwesomeIcon icon={faSquareCheck} style={{ color: 'rgb(179, 3, 3)', fontSize: '45px', marginRight: '20px' }} /> + de 10 anos de experiência</li></div>
                                <div className='dif-card' data-aos="fade-up" data-aos-delay="300"><li><FontAwesomeIcon icon={faSquareCheck} style={{ color: 'rgb(179, 3, 3)', fontSize: '45px', marginRight: '20px' }} /> Leitura computadorizada</li></div>
                                <div className='dif-card' data-aos="fade-up" data-aos-delay="450"><li><FontAwesomeIcon icon={faSquareCheck} style={{ color: 'rgb(179, 3, 3)', fontSize: '45px', marginRight: '20px' }} /> Equipamentos de última geração</li></div>
                                <div className='dif-card' data-aos="fade-up" data-aos-delay="500"><li><FontAwesomeIcon icon={faSquareCheck} style={{ color: 'rgb(179, 3, 3)', fontSize: '45px', marginRight: '20px' }} /> Orçamento dos Serviços impresso!</li></div>

                            </div>
                            <div>
                                <div className='dif-card' data-aos="fade-up" data-aos-delay="50"><li><FontAwesomeIcon icon={faSquareCheck} style={{ color: 'rgb(179, 3, 3)', fontSize: '45px', marginRight: '20px' }} /> Ambiente Climatizado para aguardar o serviços</li></div>
                                <div className='dif-card' data-aos="fade-up" data-aos-delay="250"><li><FontAwesomeIcon icon={faSquareCheck} style={{ color: 'rgb(179, 3, 3)', fontSize: '45px', marginRight: '20px' }} /> Agendamento antecipado</li></div>
                                <div className='dif-card' data-aos="fade-up" data-aos-delay="300"><li><FontAwesomeIcon icon={faSquareCheck} style={{ color: 'rgb(179, 3, 3)', fontSize: '45px', marginRight: '20px' }} /> Garantia no Serviço</li></div>
                                <div className='dif-card' data-aos="fade-up" data-aos-delay="450"><li><FontAwesomeIcon icon={faSquareCheck} style={{ color: 'rgb(179, 3, 3)', fontSize: '45px', marginRight: '20px' }} /> Peças a pronto entrega</li></div>
                                <div className='dif-card' data-aos="fade-up" data-aos-delay="500"><li><FontAwesomeIcon icon={faSquareCheck} style={{ color: 'rgb(179, 3, 3)', fontSize: '45px', marginRight: '20px' }} /> E muito mais, venha conferir!</li></div>

                            </div>
                        </div>
                    </div>
                    <div id="servicos" className="servicos" data-aos="fade-up" data-aos-delay="50">
                        <h2 className='titulo-section'>Serviços</h2>
                        <div className='cards-services'>
                            <div className='card'>
                                <div className='card-img'>
                                    <img src={alinhamento} />
                                </div>
                                <div className='card-text'><p>Alinhamento e balanceamento</p></div>
                            </div>

                            <div className='card' data-aos="fade-up" data-aos-delay="250">
                                <div className='card-img'>
                                    <img src={pneu} />
                                </div>
                                <div className='card-text'><p>Pneus</p></div>
                            </div>

                            <div className='card' data-aos="fade-up" data-aos-delay="350">
                                <div className='card-img'>
                                    <img src={oleo} />
                                </div>
                                <div className='card-text'><p>Troca de Óleo</p></div>
                            </div>

                            <div className='card' data-aos="fade-up" data-aos-delay="450">
                                <div className='card-img'>
                                    <img src={injecao} />
                                </div>
                                <div className='card-text'><p>Injeção eletrônica</p></div>
                            </div>

                            <div className='card' data-aos="fade-up" data-aos-delay="550">
                                <div className='card-img'>
                                    <img src={motor} />
                                </div>
                                <div className='card-text'><p>Motor</p></div>
                            </div>
                            <div className='card' data-aos="fade-up" data-aos-delay="650">
                                <div className='card-img'>
                                    <img src={suspencao} />
                                </div>
                                <div className='card-text'><p>Suspensão</p></div>
                            </div>
                            <div className='card' data-aos="fade-up" data-aos-delay="750">
                                <div className='card-img'>
                                    <img src={freio} />
                                </div>
                                <div className='card-text'><p>Freio</p></div>
                            </div>
                            <div className='card' data-aos="fade-up" data-aos-delay="850">
                                <div className='card-img'>
                                    <img src={eletrica} />
                                </div>
                                <div className='card-text'><p>Elétrica</p></div>
                            </div>
                            <div className='card' data-aos="fade-up" data-aos-delay="950">
                                <div className='card-img'>
                                    <img src={cambio} />
                                </div>
                                <div className='card-text'><p>Câmbio</p></div>
                            </div>
                        </div>
                    </div>
                    <div id="localizacao" className="localizacao">
                        <h2 className='titulo-section'>Localização</h2>

                        <div className='localizacao-item'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.907970458871!2d-60.0074407!3d-3.1190424999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c05663870cb95%3A0x906a1c691b798bb6!2sBox%20Express%20Auto%20Center%20-%20Oficina%20Mec%C3%A2nica%20em%20Manaus!5e0!3m2!1spt-BR!2sbr!4v1707785371469!5m2!1spt-BR!2sbr"
                                width="95%"
                                max-width="1450"
                                height="450"
                                style={{ border: '0' }}  // Correção aqui
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>

    )
}