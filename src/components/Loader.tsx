import preloaderImg from '@/assets/img/logo/preloader-icon1.png'
import Image from 'next/image'

const Loader = () => {
  return (
    <div className="preloader1">
      <div id="preloader">
        <div className="progress-bar" />
        <div className="title-logo">
          <Image src={preloaderImg} alt="SEO Marketing Logo" />
        </div>
      </div>
    </div>
  )
}

export default Loader
