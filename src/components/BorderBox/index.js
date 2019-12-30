// react library
import React from 'react'
// third-party libraries
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

// styles
import './BorderBox.scss'

const useStyles = createUseStyles({
  borderBox: props => ({
    borderTop: {
      width: 5,
      style: 'solid'
    },
    borderLeft: {
      width: 1,
      style: 'solid'
    },
    width: props.boxWidth,
    flexGrow: 0,
    flexShrink: 0,
    paddingTop: props.padding,
    borderColor: props.colors,
    height: props.boxHeight,
    // width: props.boxWidth,

    '@media (max-width: 600px)': {
      paddingTop: 5
    }
  }),
})



const BorderBox = ({ data, name, colors, padding, boxHeight, boxWidth }) => {
  // const divStyle = {
  //   borderColor: colors,
  //   width: boxSize,
  //   height: boxHeight,
  //   paddingTop: padding
  // }
  const classes = useStyles({ colors, padding, boxHeight, boxWidth })

  return (
    <article className={classes.borderBox}>
      <h2 className="borderbox-container__heading">
        {name}
      </h2>
      <p className="borderbox-container__text">
        {data[0].firstName + ' ' + data[0].lastName}
      </p>
      <p className="borderbox-container__text">
        {data.length} {data.length > 1 ? `employees` : `employee`}
      </p>
    </article>
  )
}

export default BorderBox

BorderBox.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  colors: PropTypes.string.isRequired,
  // boxWidth: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
  boxHeight: PropTypes.string.isRequired
}
