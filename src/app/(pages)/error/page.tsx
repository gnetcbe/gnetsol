import bg from '@/assets/img/bg/inner-hero-bg.jpg'
import errorimg from '@/assets/img/others/error.png'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight, FaArrowRight } from 'react-icons/fa6'
import Script from 'next/script'

import logo from '@/assets/img/logo/title2.svg'

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Page Not Found | G-Net Solutions',
  description:
    'Sorry, the page you are looking for does not exist or has been moved. Return to the G-Net Solutions homepage.',
  icons: {
    icon: logo.src,
  },
  alternates: {
    canonical: 'https://g-netsolutions.com/',
  },
  robots: {
    index: false, // prevent indexing of error page
    follow: true,
  },
}

const Error = () => {
  return (
    <>
      {/* 🔍 STRUCTURED DATA – BREADCRUMB */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://g-netsolutions.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Error',
                item: 'https://g-netsolutions.com/error',
              },
            ],
          }),
        }}
      />

      {/* 🔍 STRUCTURED DATA – WEBPAGE ERROR */}
      <Script
        id="errorpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Error Page',
            description:
              'This is an error page indicating the requested content was not found.',
            url: 'https://g-netsolutions.com/error',
            specialty: 'ErrorPage',
          }),
        }}
      />

      <main>
        <div
          className="inner-hero"
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <Container>
            <Row>
              <Col lg={8} className="m-auto text-center">
                <div className="inner-main-heading">
                  <h1>Page Not Found</h1>
                  <div className="breadcrumbs-pages">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li className="angle">
                        <FaAngleRight className="fa-solid" />
                      </li>
                      <li>Error</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="error sp">
          <Container>
            <Row>
              <Col lg={7} className="m-auto text-center">
                <div className="error-image">
                  <Image src={errorimg} alt="Error illustration" />
                </div>
                <div className="error-content-area mt-50 heading2">
                  <h2>Sorry! Page Not Found!</h2>
                  <p className="mt-16">
                    The page you are looking for doesn’t exist or has been moved.
                    Please use the helpful link below.
                  </p>
                  <div className="button mt-30">
                    <Link className="theme-btn3" href="/">
                      Back To Home{' '}
                      <span className="arrow1">
                        <FaArrowRight className="fa-solid" />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight className="fa-solid" />
                      </span>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </>
  )
}

export default Error
