import React from 'react'
import PropTypes from 'prop-types'

class Dropdown extends React.Component {
    static defaultProps = {
        chevron: false
    }

    static propTypes = {
        selected: PropTypes.string,
        options: PropTypes.array
    }

    constructor(props) {
        super(props)
        this.state = {isActive: false}
    }

    render() {
        const {width, selected, options, onClick, chevron, textAlign} = this.props
        const { isActive } = this.state
        return (
            <div style={{width}} className={`dropdown ${isActive ? "is-active" : ""}`}>
                <div style={{width}} className="dropdown-trigger">
                    <button
                        className="button is-fullwidth"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                        onClick={() => this.setState({isActive: true})}
                        onBlur={() => setTimeout(() => this.setState({isActive: false}), 200)}
                    >
                        <span style={{width, textAlign, color: "#393C41"}}>{selected}</span>
                        {chevron ? <div style={{borderStyle: "solid",
                            borderWidth: "0.25em 0.25em 0 0",
                            display: "inline-block",
                            height: "1.45em",
                            position: "relative",
                            verticalAlign: "top",
                            width: "1.45em",
                            color: "#467AB9",
                            top: "-.25em",
                            transform: "rotate(135deg)"}}
                        />: null }
                    </button>
                </div>
                <div className="dropdown-menu" role="menu" id="dropdown-menu">
                    <div className="dropdown-content">
                        {options.map(option => {
                            return (
                                <a
                                    href="#"
                                    key={option}
                                    className="dropdown-item"
                                    onClick={() => {
                                        this.setState({isActive: false})
                                        onClick(option)
                                    }}
                                >
                                    <span>{option}</span>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dropdown
