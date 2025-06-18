type IncrementDisplayProps = {
    increment: () => void;
};

const IncrementButton = ({increment}: IncrementDisplayProps) => {
    return (
        <>
        <button onClick={increment}>Increment the counter!</button>
        </>
    )
}

export default IncrementButton;