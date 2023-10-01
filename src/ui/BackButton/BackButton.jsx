import React from 'react'
import './BackButton.css'
import { useNavigate } from 'react-router';
export default function BackButton() {
    const navigaton = useNavigate()
    const goBack = () => {
        navigaton("/")
    }
  return (
    <button className="BackButton" onClick={goBack}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
      >
          <path
            d="M4.93934 10.9393C4.35355 11.5251 4.35355 12.4749 4.93934 13.0607L14.4853 22.6066C15.0711 23.1924 16.0208 23.1924 16.6066 22.6066C17.1924 22.0208 17.1924 21.0711 16.6066 20.4853L8.12132 12L16.6066 3.51472C17.1924 2.92893 17.1924 1.97919 16.6066 1.3934C16.0208 0.807611 15.0711 0.807611 14.4853 1.3934L4.93934 10.9393ZM23 10.5L6 10.5L6 13.5L23 13.5L23 10.5Z"
            fill="white"
          />
      </svg>
    </button>
  );
}
