'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa6'

const menuItems = [
  { title: 'Home', path: '/' },
  { title: 'About Us', path: '/about' },
  {
    title: 'Web Development',
    children: [
      { path: '/software-development', label: 'Application Development' },
      { path: '/web-hosting', label: 'Domain Names & Web Hosting' },
      { path: '/web-development', label: 'Website Design / Redesign' },
      { path: '/ecommerce-solutions', label: 'E-Commerce / Shopping Cart' },
      { path: '/web-development', label: 'Content Management Systems (CMS)' },
      { path: '/website-maintenance', label: 'Website Maintenance & Support' },
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
            <li className="nav-item" key={index}>
              {/* NORMAL LINK */}
              {!hasDropdown && (
                <Link href={item.path} className="nav-link">
                  {item.title}
                </Link>
              )}

              {/* DROPDOWN PARENT */}
              {hasDropdown && (
                <>
                  <button
                    type="button"
                    className="nav-link d-flex justify-content-between align-items-center w-100 text-start"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    <span>{item.title}</span>
                    <span className="vl-menu-close">
                      {isOpen ? <FaChevronDown /> : <FaChevronRight />}
                    </span>
                  </button>

                  <Collapse in={isOpen}>
                    <ul className="list-unstyled ms-4">
                      {item.children.map((child, i) => (
                        <li key={i}>
                          <Link href={child.path} className="nav-link">
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
