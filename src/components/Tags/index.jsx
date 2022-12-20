function Tags({ tags }) {
  return (
    <div className="tagsDiv">
      {tags.map((tag) => (
        <div key={tag} className="tag">
          <span>{tag}</span>
        </div>
      ))}
    </div>
  )
}

export default Tags
