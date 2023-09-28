import Image from 'next/image'
import '../../scss/components/footer.scss'

export default function Footer() {
    return (
        <footer>
            <section className='FooterInner'>
                <div className='FooterContainer'>
                    <div><a href="mailto:Email-Ici">Nom de lEmail ici</a></div>
                    <span>Name</span>
                    <span>Name</span>
                    <span>Name</span>
                    <span>Name</span>
                </div>
                <div className='Title'>OBERON</div>
                <div>By Lucas Raffalli</div>
            </section>
        </footer>
    )
}
