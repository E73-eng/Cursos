import Part from './Part'

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((p, index) => (
        <Part key={index} part={p.name} exercises={p.exercises} />
      ))}
    </div>
  )
}

export default Content