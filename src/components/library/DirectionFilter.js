import React, { Component } from 'react';

function DirectionFilter(WrappedComponent) {
  return class extends Component {
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

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
}
export default DirectionFilter;
