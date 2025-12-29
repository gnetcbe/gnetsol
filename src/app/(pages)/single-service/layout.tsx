import { ChildrenType } from '@/types/component-props'
import AnalysisArea from './components/AnalysisArea'
import ContactUs from './components/ContactUs'
import CTA from './components/CTA'
import Service from './components/Service'

const layout = ({ children }: ChildrenType) => {
  return (
    <>
      <main>
        {children}
        <CTA />
        <AnalysisArea />
        <Service />
        <ContactUs />
      </main>
    </>
  )
}

export default layout
