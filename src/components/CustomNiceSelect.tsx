'use client'
import NiceSelect from 'nice-select2'
import { useEffect, useRef } from 'react'

type PropsType = {
  children: React.ReactNode
  className?: string
  options?: object
}

const CustomNiceSelect = ({ children, className, options }: PropsType) => {
  const element = useRef<HTMLSelectElement | null>(null)

  useEffect(() => {
    if (element.current) {
      const select = new NiceSelect(element.current, options)

      return () => {
        select.destroy()
      }
    }
  }, [])

  return (
    <select ref={element} className={className}>
      {children}
    </select>
  )
}

export default CustomNiceSelect
