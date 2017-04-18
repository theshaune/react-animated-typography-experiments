import React, { Component } from 'react';

class DirectionFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      direction: 'down',
      pageYOffset: -1,
    };

    this.getScrollDirection = this.getScrollDirection.bind(this);
  }

  componentDidMount() {
    this.attachListener();
  }

  componentWillUnmount() {
    this.removeListener();
  }

  getScrollDirection() {
    const direction = this.state.pageYOffset > window.pageYOffset
      ? 'down'
      : 'up';

    this.setState({ direction, pageYOffset: window.pageYOffset });
  }

  attachListener() {
    window.addEventListener('scroll', this.getScrollDirection);
  }

  removeListener() {
    window.removeEventListener('scroll', this.getScrollDirection);
  }

  render(props) {
    return (
      <div>
        {React.Children.map(
          this.props.children,
          child => React.cloneElement(child, {
            ...props,
            ...this.state,
          }),
        )}
      </div>
    );
  }
}

export default DirectionFilter;
