import '../styles/Header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="first">
                <h1>Code Effectively</h1>
            </div>
            <div className="second">
                <h3>
                    <span className="dash">&#8212;</span>
                    with our own programming language.
                </h3>
            </div>
        </div>
    )
}