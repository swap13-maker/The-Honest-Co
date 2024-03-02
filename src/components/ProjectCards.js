import { Link } from "react-router-dom";
const ProjectCards = ({
  cardClass,
  marginTopClass,
  image,
  name,
  description,
  width,
  alt,
  url,
}) => {
  return (
    <div
      className={`col-md-${
        width ?? "6"
      } col-12 pb-3 portfolio__card ${cardClass} ${marginTopClass}`}
    >
      <div className="border__fade">
        <div className="wrapper">
          <div className="zoom-effect-container">
            <Link to={url}>
              <div className="image-card">
                <img className="card-img-top img-fluid" src={image} alt={alt} />
              </div>
            </Link>
            <div className="pb-5 translate__down">
              <div className="blog-heading">
                {name}
                <svg
                  width="20"
                  height="14"
                  viewBox="-10 0 25 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M1.80778 13.8701L1.81026 13.8657L2.14145 13.5492L2.80382 12.9161L13.4018 2.78909L13.2658 8.77368L14.6105 8.80423L14.7986 0.523957L6.51835 0.335805L6.48779 1.68051L12.4724 1.81649L1.87444 11.9435L1.21207 12.5764L0.880888 12.8929L1.80778 13.8701Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="blog-title blog-hide w-85">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
