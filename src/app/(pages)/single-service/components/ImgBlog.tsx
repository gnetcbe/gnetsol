import detail2 from '@/assets/img/blog/blog-details-image2.png'
import detail3 from '@/assets/img/blog/blog-details-image3.png'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'

const ImgBlog = () => {
  return (
    <>
      <Row>
        <Col md={6}>
          <div className="image mt-40">
            <Image className="w-full" src={detail2} alt="" height={278} />
          </div>
        </Col>
        <Col md={6}>
          <div className="image mt-40">
            <Image className="w-full" src={detail3} alt="" height={278} />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default ImgBlog
