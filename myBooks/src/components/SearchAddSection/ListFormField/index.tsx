import { colors } from "../../../themes/theme";

export default function ListFormField({ 
    label, 
    inputValue, 
    setInputValue, 
    referenceList, 
    inputList, 
    setInputList, 
    placeholder 
}) {
    
    function addToInputList(event): void {
        event.preventDefault();
        if(inputValue.length != 0) {
            const reference = referenceList.filter((reference) => reference.name == inputValue)[0]
            setInputList([...inputList, reference]);
            setInputValue('');
        }
    }
    
    return (
        <fieldset>
            <label htmlFor={`input-${label.toLowerCase()}`}>{label}</label>
            <div>
                <input
                    id={`input-${label.toLowerCase()}`}
                    type="text"
                    name={`input-${label.toLowerCase()}`}
                    value={inputValue}
                    onChange={(input) => setInputValue(input.target.value)}
                    placeholder={placeholder}
                    list={label.toLowerCase()}
                />
                <datalist id={label.toLowerCase()} >
                    {referenceList.map((reference) => <option key={reference.id} value={reference.name}>{reference.name}</option>)}
                </datalist>
                <button 
                    type="button" 
                    onClick={addToInputList}
                    disabled={inputValue.length == 0 
                        ? true 
                        : referenceList.some((authorRegistered) => authorRegistered.name == inputValue)
                            ? false
                            : true
                    }
                >Adicionar</button>
            </div>
            <ul>
                {inputList.map((item, index) => <li key={index} >{item.name}</li>)}
            </ul>
            <style jsx>{`
                fieldset {
                    display: grid;
                    grid-template-column: 1fr;
                    gap: 0.5rem;
                }
                label {
                    font-weight: 700;
                }
                div {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                }
                input {
                    padding: 0.5rem;
                    width: 100%;
                }
            `}</style>
        </fieldset>
    )
}