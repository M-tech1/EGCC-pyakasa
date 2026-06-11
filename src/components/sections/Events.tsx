import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import Icon from "@/components/shared/Icon";
import { FEATURED_EVENT, EVENTS } from "@/data/site";
import eventsImg from "../../../public/assets/events/events.jpeg";

export default function Events() {
  return (
    <section className="events pad" id="events">
      <div className="wrap center">
        <Reveal>
          <span className="eyebrow center">Mark Your Calendar</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="sec-title">Upcoming Events</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="sec-sub">From revivals to community days, there&apos;s always something happening in the family.</p>
        </Reveal>
      </div>
      <div className="wrap">
        <div className="ev-layout">
          <Reveal className="ev-feature">
            <Image
              src={eventsImg}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt={FEATURED_EVENT.title}
              sizes="(max-width: 680px) 100vw, (max-width: 1024px) 100vw, 58vw"
            />
            <div className="ev-date">
              <b>{FEATURED_EVENT.day}</b>
              <span>{FEATURED_EVENT.month}</span>
            </div>
            <h3>{FEATURED_EVENT.title}</h3>
            <div className="meta">
              {FEATURED_EVENT.metaItems?.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <div style={{ marginTop: "1.6rem" }}>
              <a href="#" className="btn btn-gold">
                Register Now
                <Icon name="arrowRight" />
              </a>
            </div>
          </Reveal>

          <div className="ev-list">
            {EVENTS.map((e, i) => (
              <Reveal key={e.title} delay={(i + 1) * 0.1} className="ev-item">
                <div className="ev-mini">
                  <b>{e.day}</b>
                  <span>{e.month}</span>
                </div>
                <div>
                  <h4>{e.title}</h4>
                  <small>{e.meta}</small>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
