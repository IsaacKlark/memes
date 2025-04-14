import { useState, useEffect } from 'react';
import { defaultMemes } from './memes';

export function useMemes() {
  const [memes, setMemes] = useState(() => {
    const saved = localStorage.getItem('memes');
    return saved ? JSON.parse(saved) : defaultMemes;
  });

  useEffect(() => {
    
    localStorage.setItem('memes', JSON.stringify(memes));
  }, [memes]);

  return [memes, setMemes];
}
