const CARDS = [
  {
    img: '/LumenNew/scanifly/card0.png',
    title: 'Install Tracker',
    desc: 'Track leads, manage customer pipelines, store documents, and automate follow-ups across your business.',
  },
  {
    img: '/LumenNew/scanifly/card1.png',
    title: 'Taskboard',
    desc: 'Manage your daily, weekly, and monthly workflow in a crystal-clear, user-friendly interface.',
  },
  {
    img: '/LumenNew/scanifly/card2.png',
    title: 'Service Calendar',
    desc: "Schedule your crew's work with drag-and-drop simplicity and readability.",
  },
  {
    img: '/LumenNew/scanifly/card3.png',
    title: 'Commission Tracker',
    desc: "Calculate your team's payout with pinpoint, automatic precision.",
  },
  {
    img: '/LumenNew/scanifly/card4.png',
    title: 'Proposal Presentations',
    desc: 'Build a contract-winning presentation in minutes. Tailored for both standalone battery and full solar proposals.',
  },
  {
    img: '/LumenNew/scanifly/card5.png',
    title: 'Solar Design Tool',
    desc: 'Design a highly-accurate solar installation with our easy-to-use, in-depth app.',
  },
  {
    img: '/LumenNew/scanifly/card6.png',
    title: 'Users & Offices',
    desc: 'Manage your global workforce and office infrastructure in one place.',
  },
]

export function AboutCarousel() {
  return (
    <div className="preview-carousel">
      <ul className="cards">
        {CARDS.map((card, i) => (
          <li key={i} className="card">
            <div className="visual">
              <img src={card.img} alt={card.title} className="img" />
            </div>
            <div className="content">
              <div className="content-wrapper">
                <h3 className="title">{card.title}</h3>
                <p className="desc">{card.desc}</p>
              </div>
              <a href="#" className="card-link">
                Learn more
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
