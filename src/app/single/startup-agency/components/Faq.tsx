'use client'
import bg10 from '@/assets/img/bg/sec-bg10.jpg'
import stapn10 from '@/assets/img/icons/span10.svg'
import faq10 from '@/assets/img/others/faq10-image.png'
import Image from 'next/image'
import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import { faqData } from '../data'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  return (
    <>
      <div className="faq10 sp bg-cover" style={{ backgroundImage: `url(${bg10.src})` }}>
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading10">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={stapn10} alt="" /> Our Process, Your Growth
                </span>
                <h2 className="text-anime-style-3">The Startup Growth Formula</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30 align-items-center">
            <Col md={6}>
              <div className="faq-content mt-30" data-aos="fade-right" data-aos-duration={800}>
                <Accordion defaultActiveKey={'1'} className="accordion1" id="accordionExample">
                  {faqData.map((item, idx) => (
                    <AccordionItem eventKey={`${idx}`} key={idx} onClick={() => toggleFaq(idx)} className={activeIndex === idx ? 'active' : ''}>
                      <AccordionHeader as={'h2'} id="headingOne">
                        {item.question}
                      </AccordionHeader>
                      <div
                        id="collapseOne"
                        className={`accordion-collapse collapse ${activeIndex === idx ? 'show' : ''}`}
                        aria-labelledby={`heading${idx}`}
                        data-bs-parent="#accordionExample">
                        <AccordionBody>{item.answer}</AccordionBody>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Col>
            <Col lg={6}>
              <div className="faq10-image mt-30 ml-60 sm:ml-0 md:md-0" data-aos="fade-right" data-aos-duration={1000}>
                <Image src={faq10} alt="" height={301} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Faq
