import '../styles/Nav.css'

export default function Nav() {
    return (
        <nav className="navbar">
            <div className="logo">Mopl</div>
            <div className="right">
                <div className="playground-btn">Playground</div>
                <div className="docs-btn">Docs</div>
            </div>
        </nav>
    )
}