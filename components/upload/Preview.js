import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style/preview.js'

export default class Preview extends Component {
  constructor (props) {
    super(props)
    this.state = {
      extraClass: '',
      style: {},
      imgLoaded: false
    }
    this.imgRef = React.createRef()
  }

  static propTypes = {
    src: PropTypes.string,
    show: PropTypes.bool,
    onClose: PropTypes.func
  }

  shouldComponentUpdate (nextProps, nextState) {
    return !!nextProps.src || this.props.show
  }

  onClose () {
    this.setState({
      style: {},
      extraClass: '',
      imgLoaded: false
    })
    this.props.onClose && this.props.onClose()
  }

  imgOnLoad () {
    const radio = 0.6
    const imgWidth = this.imgRef.current.clientWidth
    const imgHeight = this.imgRef.current.clientHeight
    const windowRadio = window.innerWidth / window.innerHeight
    const imgRadio = imgWidth / imgHeight
    if (isNaN(imgRadio)) {
      return {}
    }
    let extraClass
    let style = {}
    if (imgRadio > windowRadio) {
      extraClass = 'hi-preview--width'
      const width = window.innerWidth * radio > imgWidth ? imgWidth : window.innerWidth * radio
      const height = width * 1 / imgRadio
      style = { width, height }
    } else {
      extraClass = 'hi-preview--height'
      const height = window.innerHeight * radio > imgHeight ? imgHeight : window.innerHeight * radio
      const width = height * imgRadio
      style = { width, height }
    }

    this.setState({
      extraClass,
      style,
      imgLoaded: true
    })
  }

  render () {
    const { show, src } = this.props
    const {
      extraClass,
      style,
      imgLoaded
    } = this.state

    return (
      <ReactCSSTransitionGroup
        transitionName='hi-preview'
        transitionEnterTimeout={50}
        transitionLeaveTimeout={50}
        component='div'
      >
        <div key={1} className={classNames('hi-preview', extraClass, {'hi-preview--hide': !show})} onClick={this.onClose.bind(this)}>
          <div className={classNames('hi-preview-image', {'hi-preview-image--hide': !imgLoaded})} style={style}>
            <img
              ref={this.imgRef}
              src={src}
              onLoad={this.imgOnLoad.bind(this)}
            />
          </div>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}
