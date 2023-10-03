import Image from 'next/image'
import '../../scss/components/footer.scss'

export default function Footer() {
    return (
        <section id='Footer'>
            <div className='FooterImg'>
                <div className="separation">
                    <div className="line"></div>
                    <h2>Boutique en suisse | Oberon</h2>
                    <div className="line"></div>
                </div>
            </div>
            {/* <div className="separation">
                <div className="line"></div>
                <h2>Boutique en suisse | Oberon</h2>
                <div className="line"></div>
            </div> */}
            <div className='FooterInfo'>
                <div>Contact
                    <div></div>
                </div>
                <div>Service
                    <div></div>
                </div>
                <div>Terme legaux
                    <div></div>
                </div>
                <div>Nous suivre
                    <div></div>
                </div>

            </div>
            <div>Copyright© 2023. Tous droits réservés Oberon</div>
        </section>
    )
}
