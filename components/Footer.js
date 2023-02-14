import Link from "next/link";
import Image from "next/image";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faFacebookF,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

// library.add(faFacebookF, faTwitter, faInstagram);

// library.add(fas);

const Footer = () => (
  <footer className='bg-dark text-white py-3'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <Image
            src='https://cfstatic.safaribookings.com/img/logos/logo-240x35@2x.png'
            alt='Logo'
            width={240}
            height={35}
          />

          <div className='d-flex flex-column mt-3'>
            <a className='fab fa-facebook-f fa-2x mx-3 text-white' href='#'>
              Facebook
            </a>
            <a className='fab fa-twitter fa-2x mx-3 text-white' href='#'>
              Twitter
            </a>
            <a className='fab fa-instagram fa-2x mx-3 text-white' href='#'>
              Instagram
            </a>
          </div>

          {/* <div className='d-flex flex-column mt-3'>
            <Link className='fa-2x mx-3 text-white' href='#'>
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </Link>
            <Link className='fa-2x mx-3 text-white' href='#'>
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </Link>
            <Link className='fa-2x mx-3 text-white' href='#'>
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </Link>
          </div> */}
        </div>
        <div className='col-md-4'>
          <h5 className='text-uppercase'>Quick links</h5>
          <ul className='list-unstyled'>
            <li>
              <Link className='text-white' href='#'>
                About
              </Link>
            </li>
            <li>
              <Link className='text-white' href='#'>
                Safaris
              </Link>
            </li>
            <li>
              <Link className='text-white' href='#'>
                Destinations
              </Link>
            </li>
            <li>
              <Link className='text-white' href='#'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='col-md-4'>
          <h5 className='text-uppercase'>Subscribe to our newsletter</h5>
          <form action='#'>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                placeholder='Your email'
              />
            </div>
            <div className='form-group mt-3'>
              <button type='submit' className='btn btn-danger'>
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
