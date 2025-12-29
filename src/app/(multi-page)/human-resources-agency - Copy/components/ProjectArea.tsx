import project1 from '@/assets/img/work/project6-image1.png'
import project2 from '@/assets/img/work/project6-image2.png'
import project3 from '@/assets/img/work/project6-image3.png'
import project4 from '@/assets/img/work/project6-image4.png'
import project5 from '@/assets/img/work/project6-image5.png'
import project6 from '@/assets/img/work/project6-image6.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const ProjectArea = () => {
  return (
    <>
      <div className="project6 sp sec-bg6">
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="heading6-w _mt-50">
                <span className="sub-title">Projects</span>
                <h2 className="text-anime-style-3">Innovative Solutions Our Project Highlights</h2>
              </div>
            </Col>
            <Col lg={7}>
              <div className="buttons text-end sm:text-start md:text-start sm:mt-20 md:mt-20">
                <Link href="/service" className="theme-btn11">
                  <span className="theme-btn11__shape" />
                  <span className="theme-btn11__shape" />
                  <span className="theme-btn11__shape" />
                  <span className="theme-btn11__shape" />
                  <span className="theme-btn11__text">View All Service </span>
                  <span className="arrow1">
                    <FaArrowRight className="fa-solid" />
                  </span>
                  <span className="arrow2">
                    <FaArrowRight className="fa-solid" />
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            <Col lg={4} md={6}>
              <div className="project6-box mt-30">
                <div className="image">
                  <Image className="w-full" src={project1} alt="" height={303} />
                </div>
                <div className="content-box">
                  <h4>
                    <Link href="#">Talent Connect Initiative</Link>
                  </h4>
                  <p className="mt-10">
                    we take pride in delivering tailored staffing solution that drive success for our clients projects showcase.
                  </p>
                  <Link href="#" className="learn">
                    Read More
                    <span className="arrow1">
                      <FaArrowRight className="fa-solid" />
                    </span>
                    <span className="arrow2">
                      <FaArrowRight className="fa-solid" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="project6-box mt-30">
                <div className="image">
                  <Image className="w-full" src={project2} alt="" height={469} />
                </div>
                <div className="content-box">
                  <h4>
                    <Link href="#">Talent Connect Initiative</Link>
                  </h4>
                  <p className="mt-10">
                    we take pride in delivering tailored staffing solution that drive success for our clients projects showcase.
                  </p>
                  <Link href="#" className="learn">
                    Read More
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
            <Col lg={4} md={6}>
              <div className="project6-box mt-30">
                <div className="image">
                  <Image className="w-full" src={project3} alt="" height={449} />
                </div>
                <div className="content-box">
                  <h4>
                    <Link href="#">Talent Connect Initiative</Link>
                  </h4>
                  <p className="mt-10">
                    we take pride in delivering tailored staffing solution that drive success for our clients projects showcase.
                  </p>
                  <Link href="#" className="learn">
                    Read More
                    <span className="arrow1">
                      <FaArrowRight className="fa-solid" />
                    </span>
                    <span className="arrow2">
                      <FaArrowRight className="fa-solid" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="project6-box mt-30">
                <div className="image">
                  <Image className="w-full" src={project4} alt="" height={323} />
                </div>
                <div className="content-box">
                  <h4>
                    <Link href="#">Talent Connect Initiative</Link>
                  </h4>
                  <p className="mt-10">
                    we take pride in delivering tailored staffing solution that drive success for our clients projects showcase.
                  </p>
                  <Link href="#" className="learn">
                    Read More
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
            <Col lg={4} md={6}>
              <div className="project6-box mt-30">
                <div className="image">
                  <Image className="w-full" src={project5} alt="" height={303} />
                </div>
                <div className="content-box">
                  <h4>
                    <Link href="#">Talent Connect Initiative</Link>
                  </h4>
                  <p className="mt-10">
                    we take pride in delivering tailored staffing solution that drive success for our clients projects showcase.
                  </p>
                  <Link href="#" className="learn">
                    Read More
                    <span className="arrow1">
                      <FaArrowRight className="fa-solid" />
                    </span>
                    <span className="arrow2">
                      <FaArrowRight className="fa-solid" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="project6-box mt-30">
                <div className="image">
                  <Image className="w-full" src={project6} alt="" height={469} />
                </div>
                <div className="content-box">
                  <h4>
                    <Link href="#">Talent Connect Initiative</Link>
                  </h4>
                  <p className="mt-10">
                    we take pride in delivering tailored staffing solution that drive success for our clients projects showcase.
                  </p>
                  <Link href="#" className="learn">
                    Read More
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
    </>
  )
}

export default ProjectArea
