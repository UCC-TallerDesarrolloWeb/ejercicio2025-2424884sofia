export default function Card({ title, subtitle, children}) {

    return (
        <div className="activity-card">
            <h3>{title}</h3>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}