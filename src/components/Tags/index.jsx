function Tags({ tags }) {
  return (
    <div className="tagsDiv">
      {tags.map((tag, index) => (
        <div key={`${tag}-${index}`} className="tag">
          <span>{tag}</span>
        </div>
      ))}
    </div>
  )
}

export default Tags
