import { useState } from 'react'
import Chevron from '../../assets/chevronDown.svg'

function Collapse({ title, content, type }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <article className="Collapse">
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
    </article>
  ) : (
    <article className="Collapse">
      <div className="CollapseHeader" onClick={() => setIsOpen(true)}>
        <h2>{title}</h2>
        <img src={Chevron} alt="chevron" className="chevronUp" />
      </div>
    </article>
  )
}

export default Collapse
