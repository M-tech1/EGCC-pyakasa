import Reveal from "@/components/shared/Reveal";
import Icon from "@/components/shared/Icon";
import { LOCATION, SITE, MAP_EMBED_URL, MAP_DIRECTIONS_URL } from "@/constants";

export default function LocationMap() {
  return (
    <section className="location pad" id="location">
      <div className="wrap center">
        <Reveal>
          <span className="eyebrow center">Come &amp; See</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="sec-title">Find Us</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="sec-sub">
            We&apos;re in the heart of Pyakasa, off Airport Road in Lugbe. There&apos;s free parking and a warm welcome
            team waiting to meet you.
          </p>
        </Reveal>
      </div>

      <div className="wrap">
        <div className="map-layout">
          <Reveal className="map-info">
            <div className="row">
              <Icon name="pin" />
              <div>
                <h4>Our Address</h4>
                <p>
                  {LOCATION.address}
                  <br />
                  {LOCATION.area}
                </p>
              </div>
            </div>
            <div className="row">
              <Icon name="clock" />
              <div>
                <h4>Service Times</h4>
                <p>Sun 7:30 &amp; 9:30 AM · Wed 5:30 PM · Fri 5:00 PM</p>
              </div>
            </div>
            <div className="row">
              <Icon name="phone" />
              <div>
                <h4>Get in Touch</h4>
                <p>
                  {SITE.phone}
                  <br />
                  {SITE.email}
                </p>
              </div>
            </div>
            <a className="btn btn-royal" href={MAP_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
              Get Directions
              <Icon name="arrowRight" />
            </a>
          </Reveal>

          <Reveal className="map-frame" delay={0.15}>
            <iframe
              title={`Map to ${SITE.name}`}
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
