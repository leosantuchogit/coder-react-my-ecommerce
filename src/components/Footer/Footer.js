
import SubscribeForm from "./SubscribeForm"

const Section = () => {
    
    return (

        <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
        </div>
    )

}


const Copyright = () => {
    
    return (
        <p>© 2023 Company, Inc. All rights reserved.</p>
    )

}


const SocialMedia = (props) => {

    const {icon, href} = props;

    return (

            <li className="ms-3">
                <a className="link-body-emphasis" target="_blank" href={href}>
                    <i className={icon} style={{ fontSize: 24 }}></i>
                </a>
            </li>

    )
}


const Footer = () => {

    return (   

            <div className="container">
                <footer class="py-5">
                    <div className="row">

                        <Section />
                        <Section />
                        <Section />
                        <SubscribeForm />
                        
                    </div>
                   
                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">

                        <Copyright />
                        
                        <ul className="list-unstyled d-flex">

                            <SocialMedia icon="bi bi-twitter" href="#" />
                            <SocialMedia icon="bi bi-instagram" href="#" />
                            <SocialMedia icon="bi bi-facebook" href="#" />
                        </ul> 

                    </div>
                </footer>
            </div>
   
    )

}


export default Footer;