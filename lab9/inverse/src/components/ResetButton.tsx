type ResetDisplayProps = {
    reset: () => void;
};

const ResetButton = ({reset}: ResetDisplayProps) => {
    return (
        <>
        <button onClick={reset}>Reset to 0</button>
        </>
    )
}

export default ResetButton;