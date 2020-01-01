// react library
import React from 'react'

// styles
import './Content.scss'

// components
import BorderBox from '../BorderBox/index'

// mock data
import file from '../../mockData/employees.js'

export default class Content extends React.Component {
  render() {
    let department = file.data;

    const colors = ['#bd10e0', '#4a90e2', '#50e3c2', '#b8e986', '#7ed321', '#417505', '#f8e71c', '#f5a623', '#9b9b9b']
    const totalEmployees = Object.values(department).reduce((acc, data) => acc + data.length, 0)

    return (
      <div className="content-container">
        <div className="content-container__content">
          <h1 className="content-container__content__heading">Departments</h1>
          <div className="content-container__content__items">
            {
              Object.entries(department).map(([key, value], index) => {
                const boxHeight = `${(value.length / totalEmployees) * 100}%`
                // use the dom height to get padding for each box
                const padding = `${51 * (index)}px`;
                return <BorderBox
                  padding={padding}
                  colors={colors[index % colors.length]}
                  boxHeight={boxHeight}
                  key={index}
                  data={value}
                  name={key}
                />
              })}
          </div>
        </div>
      </div>
    )
  }
}
