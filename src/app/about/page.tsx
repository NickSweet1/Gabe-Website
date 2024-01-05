import React from 'react';
import Image from 'next/image';
import goober from '../../../public/goober-gabe.jpg';

const AboutPage = () => {
  return (
    <div>
      <h2>About Gabe</h2>
      <p>Meet Gabe, the friendly goober!</p>
      <p>Let me make your buildings big and strong!</p>
      <Image src={goober} alt="Gabe the goober" />
    </div>
  );
}

export default AboutPage;