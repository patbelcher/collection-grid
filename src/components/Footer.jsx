const gitHubLink = "https://github.com/jsohndata";
const getFullYear = new Date().getFullYear();


export default function Footer() {
    return (
        <footer>
        <p>&copy; {getFullYear}</p>
        <p><a href={gitHubLink} target="_blank" rel="noreferrer">gitHub</a></p>
        </footer>
    )

}