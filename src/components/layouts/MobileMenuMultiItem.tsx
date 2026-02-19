'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa6'

const menuItems = [
  { title: 'Home', path: '/' },

  {
    title: 'Web Development',
    children: [
      { path: '/web-development', label: 'Custom Website Design' },
      { path: '/ecommerce-solutions', label: 'E-commerce Solutions' },
      { path: '/web-development', label: 'CMS Development' },
      { path: '/software-development', label: 'Web Applications' },
      { path: '/website-maintenance', label: 'Website Maintenance & Support' },
      { path: '/web-portfolio', label: 'Portfolio' },
    ],
  },

  {
    title: 'Web Hosting',
    children: [
      { path: '/web-hosting', label: 'Shared Hosting' },
      { path: '/web-hosting', label: 'Business Hosting' },
      { path: '/web-hosting', label: 'VPS Hosting' },
      { path: '/web-hosting', label: 'Dedicated Servers' },
      { path: '/web-hosting', label: 'Cloud Hosting' },
      { path: '/web-hosting', label: 'Compare Plans' },
    ],
  },

  { title: 'Email Solutions', path: '/email-services' },
  { title: 'Digital Marketing', path: '/digital-marketing-seo' },
  { title: 'Contact Us', path: '/contact' },
]

const MobileMenuMultiItem = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <nav>
      <ul className="nav flex-column">

        {menuItems.map((item, index) => {
          const isOpen = openIndex === index
          const hasDropdown = !!item.children

          return (
            <li className="nav-item border-bottom py-2" key={index}>

              {/* Normal Link */}
              {!hasDropdown && (
                <Link href={item.path} className="nav-link fw-semibold">
                  {item.title}
                </Link>
              )}

              {/* Dropdown Parent */}
              {hasDropdown && (
                <>
                  <button
                    type="button"
                    className="nav-link d-flex justify-content-between align-items-center w-100 text-start fw-semibold"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    <span>{item.title}</span>
                    {isOpen ? <FaChevronDown /> : <FaChevronRight />}
                  </button>

                  <Collapse in={isOpen}>
                    <ul className="list-unstyled ps-3 pt-2">

                      {item.children.map((child, i) => (
                        <li key={i} className="py-1">
                          <Link href={child.path} className="nav-link small">
                            {child.label}
                          </Link>
                        </li>
                      ))}

                    </ul>
                  </Collapse>
                </>
              )}

            </li>
          )
        })}

      </ul>
    </nav>
  )
}

export default MobileMenuMultiItem
