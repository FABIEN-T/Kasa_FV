import { useState } from 'react'
import Chevron from '../../assets/chevronDown.svg'

// import ChevronUp from '../../assets/chevronUp.svg'

function Collapse({ title, content, type }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className="aboutCollapse">
      <div className="aboutCollapseHeader" onClick={() => setIsOpen(false)}>
        <h2>{title}</h2>
        <img src={Chevron} alt="chevron" className="chevronDown" />
      </div>
      <div className="aboutCollapseParagrah">
        {type === 'paragraph' ? (
          <p>{content}</p>
        ) : (
          <ul>
            {content.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  ) : (
    <div className="aboutCollapse">
      <div className="aboutCollapseHeader" onClick={() => setIsOpen(true)}>
        <h2>{title}</h2>
        <img src={Chevron} alt="chevron" className="chevronUp" />
      </div>
    </div>
  )
}

export default Collapse
