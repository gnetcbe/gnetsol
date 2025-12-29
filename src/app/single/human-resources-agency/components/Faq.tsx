'use client'
import faq1 from '@/assets/img/others/faq6-image1.png'
import faq2 from '@/assets/img/others/faq6-image2.png'
import shape from '@/assets/img/shapes/faq6-text-shape.png'
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
      <div className="faq6 sp sec-bg5" id="faq">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="heading6 _mt-50">
                <span className="sub-title">Strategy</span>
                <h2 className="text-anime-style-3">Strategic Staffing Solutions for Modern Businesses</h2>
                <div className="faq6-area pt-16">
                  <Accordion className="accordion1 accordion-flush" id="accordionFlushExample">
                    {faqData.map((item, idx) => (
                      <AccordionItem eventKey={`${idx}`} key={idx} onClick={() => toggleFaq(idx)} className={activeIndex === idx ? 'active' : ''}>
                        <AccordionHeader as={'h2'} id="flush-headingOne">
                          {item.question}
                        </AccordionHeader>
                        <div
                          id="flush-collapseOne"
                          className={`accordion-collapse collapse ${activeIndex === idx ? 'show' : ''}`}
                          aria-labelledby={`flush-heading${idx}`}
                          data-bs-parent="#accordionFlushExample">
                          <AccordionBody>{item.answer}</AccordionBody>
                        </div>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="faq6-images sm:mt-30 md:mt-30">
                <div className="image1">
                  <Image src={faq1} alt="" />
                </div>
                <div className="image2">
                  <Image src={faq2} alt="" />
                </div>
                <div className="text-count">
                  <div className="shape-bg">
                    <Image src={shape} alt="" />
                  </div>
                  <h3>18+</h3>
                  <p>Years Of Experience</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Faq
