import { useState } from 'react';

interface ITextExpander {
  children: string;
  wordsToShow?: number;
  defaultExpanded?: boolean;
}

export default function TextExpander(props: ITextExpander) {
  const { children, defaultExpanded = false, wordsToShow = 20 } = props;
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const splitText =
    children.split(' ').reduce((acc, item, index) => {
      return index <= wordsToShow ? (acc += ' ' + item) : acc;
    }, '') + '... ';

  return (
    <div className="expender">
      <span id="lorem">{isExpanded ? children : splitText}</span>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        show {isExpanded ? 'less' : 'more'}
      </button>
    </div>
  );
}
