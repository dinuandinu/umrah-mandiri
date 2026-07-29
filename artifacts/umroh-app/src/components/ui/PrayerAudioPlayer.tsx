import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2 } from 'lucide-react';

interface PrayerAudioPlayerProps {
  src: string;
  id: string;
}

// Global variable to keep track of the currently playing audio
let currentGlobalAudio: HTMLAudioElement | null = null;
let currentGlobalSetIsPlaying: ((playing: boolean) => void) | null = null;

export const PrayerAudioPlayer: React.FC<PrayerAudioPlayerProps> = ({ src, id }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;

    const handleCanPlay = () => setIsLoaded(true);
    const handleEnded = () => {
      setIsPlaying(false);
      if (currentGlobalAudio === audio) {
        currentGlobalAudio = null;
        currentGlobalSetIsPlaying = null;
      }
    };
    const handleError = () => {
      setError(true);
      console.error(`Audio failed to load: ${src}`);
    };

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    // Initial check
    fetch(src, { method: 'HEAD' }).catch(() => {
      setError(true);
    });

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.pause();
      if (currentGlobalAudio === audio) {
        currentGlobalAudio = null;
        currentGlobalSetIsPlaying = null;
      }
    };
  }, [src]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current || error) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Stop currently playing global audio if it's different
      if (currentGlobalAudio && currentGlobalAudio !== audioRef.current) {
        currentGlobalAudio.pause();
        if (currentGlobalSetIsPlaying) currentGlobalSetIsPlaying(false);
      }

      audioRef.current.play().catch(err => {
        console.error("Playback failed", err);
        setError(true);
      });
      setIsPlaying(true);
      currentGlobalAudio = audioRef.current;
      currentGlobalSetIsPlaying = setIsPlaying;
    }
  };

  return (
    <div className="audio-player-mini">
      <button
        onClick={togglePlay}
        className={`audio-btn ${isPlaying ? 'playing' : ''} ${error ? 'disabled' : ''}`}
        aria-label={isPlaying ? "Pause" : (error ? "Audio tidak tersedia" : "Putar Audio")}
        title={isPlaying ? "Pause" : (error ? "File audio belum tersedia" : "Putar Audio")}
        disabled={error}
      >
        {isPlaying ? <Pause size={14} /> : <Volume2 size={14} />}
        <span className="audio-label">
          {isPlaying ? "PAUSE" : (error ? "COMING SOON" : "PUTAR AUDIO")}
        </span>
      </button>
    </div>
  );
};
