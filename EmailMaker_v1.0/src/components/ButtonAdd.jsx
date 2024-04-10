import React, { useState } from 'react';
function ButtonAdd() {
    const [val, setVal] = useState([]);
    const handleAdd = () => {
        const abc = [...val, []];
        setVal(abc);
    };
    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val];
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata);
    };
    const handleDelete = (i) => {
        const deletVal = [...val];
        deletVal.splice(i, 1);
        setVal(deletVal);
    };
    console.log(val, 'data-');
    return (
        <>
            <button type="button" onClick={() => handleAdd()}>
                Add
            </button>
            {val.map((data, i) => {
                return (
                    <div>
                        <input name="componente" value={data} onChange={(e) => handleChange(e, i)} />
                        <button type="button" onClick={() => handleAdd()}>
                            Add
                        </button>
                        <button
                            type="button"
                            onClick={() => handleDelete(i)}
                            className="px-4 py-3 bg-blue-600 rounded-lg text-2xl font-semibold shadow-sm cursor-pointer hover:bg-indigo-500 hover:scale-105 transition ease-in-out"
                        >
                            X
                        </button>
                    </div>
                );
            })}
        </>
    );
}
export default ButtonAdd;
