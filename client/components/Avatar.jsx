import React from 'react'

function Avatar (props) {
  return (
    <section className="avatarContainer" id={props.id}>

      <div className="head">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 253.9">
          <path id="headPath" className="faceColour" d="M162.1,136c0-35.3-26.6-64-62-64a63.81,63.81,0,0,0-48,21.7A56.62,56.62,0,0,0,36.3,131c-.1,1.6-.2,3.3-.2,5,0,1.4.1,2.9.2,4.3v6.4a60,60,0,0,0,.5,7.4,30,30,0,0,0-7.2,19.5h0a30.3,30.3,0,0,0,30.2,30.2h58c14.7,0,25.6-5.4,32.2-14.3C162.1,172.7,162.1,152.6,162.1,136Z" />
        </svg>
      </div>
      <div className="hairBox">
        <svg className="hair" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 253.9">
          <path className="chooseHair" d="M190.8,98.5a15.63,15.63,0,0,0-2.6-24.4,16.16,16.16,0,0,0,1-5.4A15.66,15.66,0,0,0,177,53.4a17.05,17.05,0,0,0,.9-5.1,15.66,15.66,0,0,0-15.7-15.7h-.1A15.84,15.84,0,0,0,146.5,19a16.16,16.16,0,0,0-5.4,1,15.61,15.61,0,0,0-26.2-4.8,15.68,15.68,0,0,0-26.5-2.7A15.25,15.25,0,0,0,77.5,8,15.63,15.63,0,0,0,61.9,22.5a15.36,15.36,0,0,0-7.4-1.9A15.67,15.67,0,0,0,38.9,34.9,15.74,15.74,0,0,0,20.1,50.3,16.45,16.45,0,0,0,21.6,57,15.68,15.68,0,0,0,11.4,71.7a16.12,16.12,0,0,0,2.2,8.1,15.62,15.62,0,0,0,1,28.8,15.17,15.17,0,0,0-3.1,9.4,15.56,15.56,0,0,0,10.1,14.6,9.7,9.7,0,0,0-.1,1.7c0,5.7,10.6,9.9,13.8,9.1.2-.1.4-.1.6-.2,0,0,2.9-23.5,3.4-26.9h0c5.9-.3,8.2-3.4,10.7-8.5a18.44,18.44,0,0,0,4.1.6,15.82,15.82,0,0,0,13-6.9,16.29,16.29,0,0,0,5.5,1A15.09,15.09,0,0,0,81,100a15.73,15.73,0,0,0,9.3,3.1,15.47,15.47,0,0,0,10.1-3.7,15.72,15.72,0,0,0,11.7,5.3,16.41,16.41,0,0,0,7.3-1.8,15.72,15.72,0,0,0,12.5,6.3,17.52,17.52,0,0,0,4-.5v.5a15.59,15.59,0,0,0,12.8,15.4,15.43,15.43,0,0,0,7.5,11.2,15,15,0,0,0-1.4,6.4,15.65,15.65,0,0,0,6,12.3,16.42,16.42,0,0,0,7.4,3.2,15,15,0,0,0,2.2.2A15.65,15.65,0,0,0,186,143.2a15.8,15.8,0,0,0,7.4-13.3,15.53,15.53,0,0,0-2.7-8.8,15.54,15.54,0,0,0,4.7-11.2A15.21,15.21,0,0,0,190.8,98.5Z" />
        </svg>
      </div>

    </section>
  )
}

export default Avatar