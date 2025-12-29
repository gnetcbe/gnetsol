const Map = () => {
  return (
    <div className="contact-map-page">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15664.309210867616!2d77.013104!3d11.032827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582ed0d8f311%3A0xbeaa7dffd4185677!2sg-net%20solutions%20coimbatore%20private%20limited!5e0!3m2!1sen!2sus!4v1766139440178!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="G-Net Solutions Location"
      />
    </div>
  )
}

export default Map
