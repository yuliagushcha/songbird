import React, { Component } from 'react'
import Header from '../header'
import Quiz from '../quiz'
import birdsData from '../../data'
import Finish from '../finish'

export class Root extends Component {
  constructor(props) {
    super(props)
    this.state = { level: 0, score: 0, data: [] }
  }

  componentDidMount() {
    this.setState({
      data: this.randomData(birdsData),
    })
  }

  randomData = datas => {
    return datas.map(data => data.sort(() => Math.random() - 0.5))
  }

  handleNextLevel = () => {
    const { level } = this.state
    this.setState({ level: level + 1 })
  }

  handleScore = newScore => {
    const { score } = this.state
    this.setState({ score: score + newScore })
  }

  renderQuiz = () => {
    const { level, score, data } = this.state
    return data.length === level ? (
      <Finish
        score={score}
        handleRestart={() => {
          this.setState({
            data: this.randomData(data),
            level: 0,
            score: 0,
          })
        }}
      />
    ) : (
        <Quiz
          data={data[level]}
          handleNextLevel={this.handleNextLevel}
          handleScore={this.handleScore}
          key={level}
        />
      )
  }

  render() {
    const { level, score } = this.state

    return (
      <>
        <Header data={birdsData} level={level} score={score} />
        {this.renderQuiz()}
      </>
    )
  }
}

export default Root
