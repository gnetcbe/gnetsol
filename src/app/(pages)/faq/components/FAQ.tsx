'use client'
import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import { faq2Data, faqData } from '../data'

const FAQ = () => {
  const [active, setActive] = useState<number | null>(null)
  const faqToogle = (index: number) => {
    setActive(activeIndex === index ? null : index)
  }

  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  return (
    <>
      <div className="sp">
        <Container>
          <Row>
            <Col lg={7} className="m-auto">
              <div className="research-faq">
                <h3>Common Questions About SEOX Services</h3>
                <Accordion  className="accordion1" id="accordionExample">
                  {faqData.map((item, idx) => (
                    <AccordionItem eventKey={`${idx}`} key={idx} onClick={() => toggleFaq(idx)} className={activeIndex === idx ? 'active' : ''}>
                      <AccordionHeader as={'h2'}>{item.question}</AccordionHeader>
                        <AccordionBody>
                          <p>
                            The timeline for SEO results can vary depending on factors like the competitiveness of your industry, the condition of
                            your website, and the scope of the SEO strategy. On average, clients start seeing improvements in 3-6 months, though some
                            may see faster results depending on specific circumstances.
                          </p>
                        </AccordionBody>
                      
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="research-faq mt-40">
                <h3>Everything You Need to Know</h3>
                <Accordion className="accordion2" id="accordionExample2">
                  {faq2Data.map((item, idx) => (
                    <AccordionItem eventKey={`${idx}`} key={idx} onClick={() => faqToogle(idx)} className={active === idx ? 'active' : ''}>
                      <AccordionHeader as={'h2'}>{item.question}</AccordionHeader>
                        <AccordionBody>
                          <p>
                            We provide in-depth monthly reports that detail key performance metrics such as traffic, rankings, backlinks, and other
                            SEO KPIs. Our team ensures transparency, so you always know how your SEO efforts are progressing.
                          </p>
                        </AccordionBody>
                     
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default FAQ
