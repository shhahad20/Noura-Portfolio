import '../styles/InfiniteScrollText.scss';

const InfiniteScrollText = () => {
  const texts = [
    "App Developer",
    "Enterpreneur", 
    "Educator",
    "Artist",
  ];

  return (
    <div className="infinite-scroll-page">
      <div className="scroll-container">
        <div className="scroll-wrapper">
          <div className="scroll-content">
            {texts.map((text, index) => (
              <div key={index} className="scroll-item">
                {text}
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="scroll-content" aria-hidden="true">
            {texts.map((text, index) => (
              <div key={`duplicate-${index}`} className="scroll-item">
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollText;