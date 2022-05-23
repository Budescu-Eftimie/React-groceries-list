const Content = () => {
    const handleNameChange = () => {
        const names = ["Timi", "Andreea", "Andrei", "Kuku"];
        const int = Math.floor(Math.random() * 4);
        return names[int];
    };
    return <main>Hello, {handleNameChange()}</main>;
};

export default Content;
