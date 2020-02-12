import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import Question from './question'
import Answers from './answer'
import AnswerList from './answer-list'
import Next from './next'

const score = 6

export class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = { isFind: false, answer: {}, answers: [], selectAnswer: null }
  }

  componentDidMount() {
    const { data } = this.props

    const getAnswer = data[Math.floor(Math.random() * data.length)]
    const isInsert = false
    if (!isInsert) {
      this.setState({ answer: getAnswer }, () => {
        const { answer } = this.state
        console.log(`Правильный ответ: ${answer.name}`)
      })
    }
  }

  handleAnswerClick = bird => {
    const { answers, isFind, answer } = this.state

    const { handleScore } = this.props
    if (!answers.includes(bird.id) && !isFind) {
      this.setState({ answers: [...answers, bird.id] }, () => {
        if (this.state.answers.includes(answer.id)) {
          this.setState({ isFind: true })
          handleScore(score - this.state.answers.length)
        }
      })
    }
    this.setState({ selectAnswer: bird })
  }

  render() {
    const { answer, isFind, answers, selectAnswer } = this.state
    const { data, handleNextLevel } = this.props

    return (
      <Container fluid className="no-padding">
        <Question answer={answer} isFind={isFind} />
        <Row>
          <Col sm={5}>
            <AnswerList
              birds={data}
              answer={answer}
              answers={answers}
              handleAnswerClick={this.handleAnswerClick}
            />
          </Col>
          <Col sm={7}>
            <Answers selectAnswer={selectAnswer} />
          </Col>
          <Col sm={12}>
            <Next isFind={isFind} handleNextLevel={handleNextLevel} />
          </Col>
        </Row>
      </Container>
    )
  }
}

Quiz.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      audio: PropTypes.string.isRequired,
    })
  ),
  handleNextLevel: PropTypes.func.isRequired,
  handleScore: PropTypes.func.isRequired,
}

Quiz.defaultProps = {
  data: [],
}

export default Quiz
