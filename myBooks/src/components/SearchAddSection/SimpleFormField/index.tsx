export default function SimpleFormField({ label, inputValue, setInputValue, placeholder }) {
    return (
        <fieldset>
            <label htmlFor="input">{label}</label>
            <input 
                type="text" 
                name="input" 
                value={inputValue} 
                onChange={(input) => setInputValue(input.target.value)}
                placeholder={placeholder}
                required
            />
            <style jsx>{`
                fieldset {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 0.5rem;
                }
                label {
                    font-weight: 700;
                }
                input {
                    padding: 0.5rem;
                }
            `}</style>
        </fieldset>
    )
}