import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 16
};

const startContainerStyle = {
  display: 'flex'
};

const starStyle = {
  width: 48,
  height: 48,
  display: 'block',
  cursor: 'pointer',
  border: 0,
  background: 'none',
  padding: 0
};

interface IStar
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  full: boolean;
  color: string;
  size: number;
}

function Star(props: IStar) {
  const { full, color, size, ...rest } = props;
  return (
    <button style={starStyle} {...rest}>
      {full ? (
        <svg
          width={size}
          height={size}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          width={size}
          height={size}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </button>
  );
}

interface IStarRating {
  defaultRating?: number;
  maxRating?: number;
  color?: string;
  size?: number;
  className?: string;
  onSetRating: (rating: number) => void;
}

export default function StarRating(props: IStarRating) {
  const {
    defaultRating = 0,
    maxRating = 10,
    color = '#fcc419',
    size = 40,
    className = '',
    onSetRating
  } = props;
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: 1,
    margin: 0,
    fontSize: size * 0.8
  };

  function handleRating(newRating: number) {
    setRating(newRating);
    onSetRating(rating);
  }

  return (
    <div style={containerStyle} className={className}>
      <div style={startContainerStyle}>
        {Array.from({ length: maxRating }).map((_, i) => {
          return (
            <Star
              key={i}
              color={color}
              size={size}
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              onClick={() => handleRating(i + 1)}
              onMouseEnter={() => setTempRating(i + 1)}
              onMouseLeave={() => setTempRating(0)}
            />
          );
        })}
      </div>
      <p style={textStyle}>{tempRating || rating || ''}</p>
    </div>
  );
}
