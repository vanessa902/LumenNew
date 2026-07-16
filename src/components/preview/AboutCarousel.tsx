const CARDS = [
  {
    img: '/LumenNew/scanifly/card0.png',
    title: 'Install Tracker / CRM',
    desc: 'Track leads, manage customer pipelines, store documents, and automate follow-ups across your entire team.',
  },
  {
    img: '/LumenNew/scanifly/card1.png',
    title: 'Taskboard',
    desc: 'Visual workflow management for every stage of the job.',
  },
  {
    img: '/LumenNew/scanifly/card2.png',
    title: 'Install Calendar',
    desc: 'Schedule and track every install phase from one view.',
  },
  {
    img: '/LumenNew/scanifly/card3.png',
    title: 'Commission Tracker',
    desc: 'Automatic payout calculation for setters, closers, managers.',
  },
  {
    img: '/LumenNew/scanifly/card4.png',
    title: 'Proposal Presentations',
    desc: 'Build and export standalone battery or solar proposals for your customers.',
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
