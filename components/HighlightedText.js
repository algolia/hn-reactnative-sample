import React from 'react';
import { Text } from 'react-native';

export default function HighlightedText({ tag, children, styles, style }) {
  let isNextHighlighted = false;
  const texts = children
    .split(tag)
    .map((t, i) => {
      const style = isNextHighlighted ? styles.highlighted : styles.normal;
      isNextHighlighted = !isNextHighlighted;

      return <Text key={i} style={style}>{t}</Text>;
    });

  return <Text style={style}>{texts}</Text>;
}
