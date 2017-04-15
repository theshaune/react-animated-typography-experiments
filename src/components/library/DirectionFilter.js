import React, { Component } from 'react';

class DirectionFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      direction: 'down',
    };

    this.getScrollDirection = this.getScrollDirection.bind(this);
    this.setEl = ref => {
      this.el = ref;
    };
    this.previousTop = 0;
  }

  componentDidMount() {
    this.attachListener();
  }

  componentWillUnmount() {
    this.removeListener();
  }

  getScrollDirection() {
    const rect = this.el.getBoundingClientRect();
    const direction = this.previousTop > rect.top ? 'down' : 'up';

    this.previousTop = rect.top;

    if (direction !== this.state.direction) {
      this.setState({ direction });
    }
  }

  attachListener() {
    window.addEventListener('scroll', this.getScrollDirection);
  }

  removeListener() {
    window.removeEventListener('scroll', this.getScrollDirection);
  }

  render(props) {
    return (
      <div ref={this.setEl}>
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
