import { WeatherIframe } from "../../styles/weatherData";

export const YouTubeEmbed = () => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <WeatherIframe
        src="https://www.youtube.com/embed/jfKfPfyJRdk?si=Zw7cR1Qr6e2LQd5k"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></WeatherIframe>
    </div>
  );
};
