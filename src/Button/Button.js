import { forwardRef } from 'react';
import { cx, css } from '@emotion/css';
import { PropTypes } from 'prop-types';

const buttonStyles = (
  bgColor,
  color,
  width,
  height,
  borderRadius,
  bgColorHover,
  colorHover
) => css`
  background-color: ${bgColor};
  color: ${color};
  width: ${width};
  height: ${height};
  border-radius: ${borderRadius || '8px'};
  text-align: center;
  &:hover {
    background-color: ${bgColorHover};
    color: ${colorHover};
  }
`;

const Button = forwardRef((props, ref) => {
  const {
    bgColor,
    color,
    className,
    width,
    height,
    borderRadius,
    bgColorHover,
    colorHover,
    ...otherProps
  } = props;
  return (
    <button
      {...otherProps}
      ref={ref}
      type="button"
      className={cx(
        buttonStyles(
          bgColor,
          color,
          width,
          height,
          borderRadius,
          bgColorHover,
          colorHover
        ),
        className
      )}
    />
  );
});

Button.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  bgColorHover: PropTypes.string,
  colorHover: PropTypes.string,
};

export default Button;
