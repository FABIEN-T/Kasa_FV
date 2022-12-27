import { useState } from 'react'
import Chevron from '../../assets/chevronDown.svg'

// import ChevronUp from '../../assets/chevronUp.svg'

function Collapse({ title, content, type }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className="Collapse">
      <div className="CollapseHeader" onClick={() => setIsOpen(false)}>
        <h2>{title}</h2>
        <img src={Chevron} alt="chevron" className="chevronDown" />
      </div>
      <div className="CollapseParagrah">
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
    <div className="Collapse">
      <div className="CollapseHeader" onClick={() => setIsOpen(true)}>
        <h2>{title}</h2>
        <img src={Chevron} alt="chevron" className="chevronUp" />
      </div>
    </div>
  )
}

export default Collapse
