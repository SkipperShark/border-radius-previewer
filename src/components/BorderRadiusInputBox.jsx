export default function BorderRadiusInputBox({ value, onChange }) {

    return (
        <input
            onChange={onChange}
            type="number"
            value={value}
        />
    )
}