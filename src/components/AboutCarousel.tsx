const CARDS = [
  {
    title: 'Organized Sales Flow',
    desc: 'Track every lead, proposal, and installation in one place. Keep your sales team aligned with full access to the work pipeline at every step.',
    color: '#2A85FF',
  },
  {
    title: 'Easy for Teams',
    desc: 'With minimal training required, everyone – from your internal staff to external vendors and collaborators – can keep track of what’s happening in your business.',
    color: '#14B8A6',
  },
  {
    title: 'Customizable Interface',
    desc: 'Each business has different needs. Lumentrack® can fit them all. Whether you’re tracking a solar installation, keeping in touch with your workforce, or drafting a new proposal, this is the only CRM solution you’ll ever need.',
    color: '#CB30E0',
  },
  {
    title: 'Smart Integrations',
    desc: 'The age of having several accounts for distinct tools is over. Lumentrack® allows you to centralize and streamline your previous workflow thanks to easy-to-implement connections with some of the industry’s leading software and solutions.',
    color: '#FF8D28',
  },
]

export function AboutCarousel() {
  return (
    <div className="preview-carousel relative">
      <ul className="cards">
        {CARDS.map((card, i) => (
          <li key={i} className="card card--flat" style={{ '--card-glow-color': card.color } as React.CSSProperties}>
            <div
              className="card-gradient-bg"
              style={{
                background: `linear-gradient(160deg, ${card.color}, color-mix(in srgb, ${card.color} 45%, black))`,
              }}
            />
            <div className="content">
              <div className="content-wrapper">
                <h3 className="title">{card.title}</h3>
                <p className="desc">{card.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
