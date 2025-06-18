

type CounterDisplayProps = {
    count: number;
}

const CounterDisplay = ({count}: CounterDisplayProps) => {
    return (
        <>
        <div>
            <h1>{count}</h1>
        </div>
        </>
    )
}

export default CounterDisplay;