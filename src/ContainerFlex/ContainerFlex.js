import { forwardRef } from 'react';
import { cx, css } from '@emotion/css';
import { PropTypes } from 'prop-types';

const ContainerFlexStyles = (
  width,
  height,
  bgColor,
  flexDirection,
  justifyContent,
  alignItems,
  gap
) => css`
  width: ${width || '100%'};
  height: ${height || '100%'};
  display: flex;
  background-color: ${bgColor};
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  gap: ${gap};
`;

const ContainerFlex = forwardRef((props, ref) => {
  const {
    width,
    bgColor,
    height,
    justifyContent,
    alignItems,
    gap,
    flexDirection,
    className,
    ...otherProps
  } = props;
  return (
    <section
      ref={ref}
      {...otherProps}
      className={cx(
        ContainerFlexStyles(
          width,
          height,
          bgColor,
          flexDirection,
          justifyContent,
          alignItems,
          gap
        ),
        className
      )}
    />
  );
});

ContainerFlex.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-around',
    'space-between',
    'space-evently',
  ]),
  flexDirection: PropTypes.oneOf([
    'column',
    'column-reverse',
    'row',
    'row-reverse',
  ]),
  alignItems: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'stretch']),
  gap: PropTypes.string,
};

export default ContainerFlex;
