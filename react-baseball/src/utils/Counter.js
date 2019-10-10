//Counter function using our useLocalStorageState hook.

export default function Counter () {
    const [count, setCount] = useLocalStorageState('key', 0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    );
}