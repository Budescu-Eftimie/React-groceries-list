const Header = () => {
    const handleNameChange = () => {
        const names = ["Timi", "Andreea", "Andrei", "Kuku"];
        const int = Math.floor(Math.random() * 4);
        return names[int];
    };
    return <header className="App-header">Hello, {handleNameChange()}</header>;
};

export default Header;
