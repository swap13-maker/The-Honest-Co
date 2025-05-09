import React, { useState } from 'react';
import './Community.css';

const images = [
  { url: '/community/slides/image1.png' },
  { url: '/community/slides/image2.png' },
  { url: '/community/slides/image3.png' },
  { url: '/community/slides/image4.png' },
  { url: '/community/slides/image5.png' },
  { url: '/community/slides/image6.png' },
  { url: '/community/slides/image7.png' },
];

const avatars = [
  {
    img: '/community/avatars/avatar1.png',
    name: 'Air bnb',
    title: 'CEO, Hanlaka',
  },
  {
    img: '/community/avatars/avatar2.png',
    name: 'Dollar',
    title: 'CEO, Kante',
  },
  {
    img: '/community/avatars/avatar3.png',
    name: 'MacMohan',
    title: 'CEO, Witsel',
  },
  {
    img: '/community/avatars/avatar4.png',
    name: 'Spotify',
    title: 'CEO, Zabaleta',
  },
  {
    img: '/community/avatars/avatar5.png',
    name: 'Telegram',
    title: 'CEO, Bandra',
  },
  {
    img: '/community/avatars/avatar6.png',
    name: 'Timbaktoo',
    title: 'CEO, Mykolenko',
  },
  {
    img: '/community/avatars/avatar7.png',
    name: 'Sanchez',
    title: 'CEO, Alexis',
  },
];

const CommunityCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create visible items for the infinite effect
  const getVisibleItems = (list) => {
    const length = list.length;
    const visibleItems = [];

    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + length) % length;
      visibleItems.push(list[index]);
    }

    return visibleItems;
  };

  const visibleImages = getVisibleItems(images);
  const visibleAvatars = getVisibleItems(avatars);

  return (
    <section className="container py-md-5 pt-5">
      <div className="container">
        <div className="row py-md-5 pt-5">
          <div className="col-12 col-md-5 col-lg-7">
            <div className="text-uppercase">
              <h1 className="left-aligned section-heading">Our Community</h1>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-5 d-flex">
            <div className="sub-heading d-flex align-items-center">
              <p className="m-0 font-size-15">
                Don't take our word for it!
                <br></br>
                Hear what our 100+ satisfied clients have to say.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-container">
        <div className="carousel images-carousel">
          {visibleImages.map((image, index) => (
            <div key={index} className="slide">
              <div className="carousel-card-info">
                <img
                  src={image.url}
                  alt={`Slide ${index + 1}`}
                  className={`carousel-image ${
                    index === 2 ? '' : 'grayscale'
                  } ${index === 2 ? 'active' : ''}`}
                />
                {index === 2 && (
                  <div className="active-image-info">
                    <div className="active-image-title-container">
                      <img
                        src={avatars[currentIndex].img}
                        alt={avatars[currentIndex].name}
                        className="active-avatar"
                      />

                      <div className="active-title">
                        <p className="active-name">
                          {avatars[currentIndex].name}
                        </p>
                        <p>{avatars[currentIndex].title}</p>
                      </div>
                    </div>
                    <div className="active-description">
                      <p>
                        The Honest Company exceeded our expectations with our
                        new website! Their team truly understood our vision,
                        delivering a stunning and user-friendly design. We
                        couldn’t be happier—thank you!".
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="carousel avatars-carousel">
          {visibleAvatars.map((avatar, index) => (
            <div
              key={index}
              className={`slide ${index === 2 ? 'active' : ''}`}
              onClick={() => {
                const newIndex =
                  (currentIndex + index - 2 + avatars.length) % avatars.length;
                setCurrentIndex(newIndex);
              }}
            >
              {index === 2 ? (
                <div className="chip">
                  <img src={avatar.img} alt={avatar.name} />
                  <span className="chip-name">{avatar.name}</span>
                </div>
              ) : (
                <img
                  src={avatar.img}
                  alt={avatar.name}
                  className="carousel-avatar"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityCarousel;
