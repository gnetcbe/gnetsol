import icon1 from '@/assets/img/icons/service-details-icon1.svg'
import icon2 from '@/assets/img/icons/service-details-icon2.svg'
import icon3 from '@/assets/img/icons/service-details-icon3.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'

const Blog = () => {
  return (
    <>
      <Row>
        <Col lg={4} md={6}>
          <div className="service-details-box1 text-center">
            <div className="icon">
              <Image src={icon1} alt="" />
            </div>
            <div className="heading2 mt-16">
              <h4>
                <Link href="#">SEO Optimization </Link>
              </h4>
              <p className="mt-10">Drive organic traffic and improve your online visibility </p>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className="service-details-box1 text-center sm:mt-30">
            <div className="icon">
              <Image src={icon2} alt="" />
            </div>
            <div className="heading2 mt-16">
              <h4>
                <Link href="#">PPC Advertising </Link>
              </h4>
              <p className="mt-10">Maximize ROI with targeted PPC campaigns designed </p>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className="service-details-box1 text-center md:mt-30 sm:mt-30">
            <div className="icon">
              <Image src={icon3} alt="" />
            </div>
            <div className="heading2 mt-16">
              <h4>
                <Link href="#">Content Marketing </Link>
              </h4>
              <p className="mt-10">content marketing services encompass everything</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Blog
