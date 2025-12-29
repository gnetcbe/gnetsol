'use client'
import span5 from '@/assets/img/icons/span5.svg'
import workimg1 from '@/assets/img/work/work5-image1.png'
import workimg2 from '@/assets/img/work/work5-image2.png'
import workimg3 from '@/assets/img/work/work5-image3.png'
import Image from 'next/image'
import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import { faqData } from '../data'

const WorkArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  return (
    <>
      <div className="work5 sp" id="work">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="heading5">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span5} alt="" />
                  HOW WE WORK
                </span>
                <h2 className="text-anime-style-3">Streamlined Process, Measurable Results</h2>
                <div className="faq5-area pt-16">
                  <Accordion className="accordion1 accordion-flush" id="accordionFlushExample">
                    {faqData.map((item, idx) => (
                      <AccordionItem className={activeIndex === idx ? 'active' : ''} onClick={() => toggleFaq(idx)} eventKey={`${idx}`} key={idx}>
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
              <div className="work5-images ml-30 md:ml-0 sm:ml-0 md:mt-30 sm:mt-30">
                <Row>
                  <Col lg={6}>
                    <div className="image  reveal">
                      <Image src={workimg1} alt="" height={293} />
                    </div>
                    <div className="image mt-30  reveal">
                      <Image src={workimg2} alt="" height={293} />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="image mt-30  reveal">
                      <Image className="w-full" src={workimg3} alt="" height={582} />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default WorkArea
