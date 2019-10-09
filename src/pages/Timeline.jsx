import React from 'react';
import PropTypes from 'prop-types';

class Timeline extends React.Component {
  getClass = (id, length) => {
    if (length === 1) {
      return 'left';
    }
    if (id % 2 === 0) {
      return 'left';
    }
    return 'right';
  }

  timelineItems = experiences => experiences.map(experience => (
    <div
      className={`timeline-post wow fadeInUp timeline-post-${this.getClass(experience.id, experiences.length)}`}
      data-wow-duration="0.8s"
      data-wow-delay="0.3s"
      key={experience.id}
    >
      <div className="timeline-post-content-holder">
        <div className="timeline-post-icon" />
        <div className="timeline-post-title">
          <h4>{experience.title}</h4>
        </div>
        <div className="timeline-post-subtitle">
          <p>
            <span>{experience.company}</span>
            <span className="timeline-duration">{experience.timeline}</span>
          </p>
        </div>
        <div className="timeline-post-content" dangerouslySetInnerHTML={{ __html: experience.description }} />
      </div>
    </div>
  ));

  render() {
    const { stories } = this.props;
    return (
      <section
        id="mh-experience"
        className="mh-experince image-bg featured-img-one"
      >
        <div className="img-color-overlay">
          <div className="container section-separator">
            <div className="section-title">
              <h2
                className="wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                Developer Story
              </h2>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="timeline">
                  <div
                    className="timeline-category exp-category wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                  >
                    <div className="timeline-category-icon">
                      <div className="iconspace">
                        <i className="fa fa-laptop" />
                      </div>
                    </div>
                  </div>

                  {this.timelineItems(stories.experiences)}

                  <div
                    className="timeline-category edu-cagegory wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                  >
                    <div className="timeline-category-icon">
                      <div className="iconspace">
                        <i className="fa fa-book" />
                      </div>
                    </div>
                  </div>

                  {this.timelineItems(stories.studies)}

                  <div className="timeline-end-icon">
                    <span>
                      {' '}
                      <div className="iconspace"><i className="fa fa-circle" /></div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Timeline.propTypes = {
  stories: PropTypes.objectOf(PropTypes.array).isRequired
};

export default Timeline;
