import { FaQuestion } from "react-icons/fa"
import { Link } from "react-router-dom"

const AboutLink = () => {
  return (
    <div className="about-link">
    <Link to="/about">
    {/* we can use link like this -> <Link to={{
      pathname: '/about',
      search: '?sort=name',
      hash: '#hello',
    }} */}
      <FaQuestion size={30} />
    </Link>
    </div>
  )
}

export default AboutLink