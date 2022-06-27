import React from 'react';

type styleProps = {
  styles: React.CSSProperties;
};

const StyleProps = (props: styleProps) => {
  return <div style={props.styles}>StyleProps</div>;
};

export default StyleProps;
