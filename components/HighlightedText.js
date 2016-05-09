import React from 'react';
import { Text } from 'react-native';

export default function HighlightedText({ tag, children, styles, style }) {
  let isNextHighlighted = false;
  const texts = children
    .split(tag)
    .map(t => {
      const style = isNextHighlighted ? styles.highlighted : styles.normal;
      isNextHighlighted = !isNextHighlighted;

      return <Text style={style}>{t}</Text>;
    });

  return <Text style={style}>{texts}</Text>;
}
