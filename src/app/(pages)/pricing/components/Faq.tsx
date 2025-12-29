'use client'
import span3 from '@/assets/img/icons/span3.svg'
import Image from 'next/image'
import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'

export type FaqType = {
  question: string
}

export const faqData: FaqType[] = [
  {
    question: 'Can I upgrade my plan later?',
  },
  {
    question: 'Are there any additional costs?',
  },
  {
    question: 'How long does it take to see results?',
  },
]

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  return (
    <>
      <div className="pricing-faq sp sec-bg2">
        <Container>
          <Row>
            <Col lg={8} className="m-auto text-center">
              <div className="heading2">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span3} alt="" /> FAQ’S{' '}
                </span>
                <h2 className="text-anime-style-3">Frequently Asked Question</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30">
            <Col lg={8} className="m-auto research-faq2">
              <Accordion className="accordion1" id="accordionExample">
                {faqData.map((item, idx) => (
                  <AccordionItem eventKey={`${idx}`} key={idx} onClick={() => toggleFaq(idx)} className={activeIndex === idx ? 'active' : ''}>
                    <AccordionHeader as="h2">{item.question}</AccordionHeader>
                    <div
                      id="collapseOne"
                      className={`accordion-collapse collapse ${activeIndex === idx ? 'show' : ''}`}
                      data-bs-parent="#accordionExample">
                      <AccordionBody>
                        <p>
                          SEO is a long-term strategy. You’ll start seeing improvements in a few months, but the best results usually take 4–6 months.
                        </p>
                      </AccordionBody>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Faq
