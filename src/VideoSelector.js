import { useState, useRef, useEffect } from 'react';
import { frames } from './arrays';
import './styles.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import toast, { Toaster } from 'react-hot-toast';

export const VideoSelector = () => {
  const [audioList, setAudioList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [playCounts, setPlayCounts] = useState({});
  const audioRef = useRef(new Audio());

  const notify = () => toast('Audio agregado a la lista');

  const handleAddToQueue = (index) => {
    setPlayCounts((prevCounts) => {
      const currentCount = prevCounts[index] || 0;
      const nextAudioIndex = currentCount < frames[index].audios.length - 1 ? currentCount : 1;

      setAudioList((prev) => [
        ...prev,
        { frameIndex: index, audioSrc: frames[index].audios[nextAudioIndex] },
      ]);

      notify();
      return {
        ...prevCounts,
        [index]: currentCount + 1,
      };
    });
  };

  const playAudioQueue = () => {
    if (audioList.length > 0 && currentAudioIndex < audioList.length) {
      const { audioSrc } = audioList[currentAudioIndex];
      audioRef.current.src = audioSrc;
      audioRef.current.play();
      setIsPlaying(true);

      audioRef.current.onended = () => {
        setIsPlaying(false);
        setCurrentAudioIndex((prevIndex) => prevIndex + 1);
      };
    } else {
      setIsPlaying(false);
      setCurrentAudioIndex(0);
    }
  };

  useEffect(() => {
    if (!isPlaying && currentAudioIndex < audioList.length) {
      playAudioQueue();
    }
  }, [currentAudioIndex, audioList, isPlaying]);

  return (
    <div>
      <div>
        <h1 style={{ color: 'white', fontFamily: 'sans-serif' }}>Un cuerpo expuesto</h1>
        <h3 style={{ color: 'white', fontFamily: 'sans-serif' }}>Selecciona un sonido</h3>
      </div>
      <div className="video-grid">
        {frames.map((frame, index) => (
          <div key={index} className="video-card" onClick={() => handleAddToQueue(index)}>
            <img src={frame.image} alt={`Frame ${frame.id}`} />
            <div>
              {audioList[currentAudioIndex]?.frameIndex === index && isPlaying ? (
                <div className="equalizer-bar-container">
                  <div className="equalizer-bar"></div>
                  <div className="equalizer-bar"></div>
                  <div className="equalizer-bar"></div>
                </div>
              ) : (
                <PlayCircleOutlineIcon fontSize="large" className="icon-overlay" />
              )}
              <Toaster
                toastOptions={{ style: { fontFamily: 'sans-serif' } }}
                position="bottom-center"
                reverseOrder={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
