import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    const onClick = (e) => {
        console.log("heqder button click");
    }

    
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? 'orange' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: "Interview Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
