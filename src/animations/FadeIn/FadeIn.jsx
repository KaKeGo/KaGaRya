import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const FadeInAnimation = ({ children, delay=0 }) => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(0px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 600, delay },
  });

  return (
    <animated.div style={{ ...animationProps }}>
      {children}
    </animated.div>
  );
};

export default FadeInAnimation;