import React, { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  //   //single selection

  //   const [selected, setSelected] = useState(null);

  //   let handleSingleSelection = (getCurrentId) => {
  //     setSelected(getCurrentId === selected ? null : getCurrentId);
  //   };

  //   return (
  //     <div className="wrapper">
  //       <div className="accordian">
  //         {data && data.length > 0 ? (
  //           data.map((item) => (
  //             <div className="item">
  //               <div
  //                 onClick={() => handleSingleSelection(item.id)}
  //                 className="title"
  //               >
  //                 <h3>{item.question}</h3>
  //                 <span>+</span>
  //               </div>
  //               {selected === item.id ? (
  //                 <div className="content">{item.answer}</div>
  //               ) : null}
  //             </div>
  //           ))
  //         ) : (
  //           <div className="red">No Data Found</div>
  //         )}
  //       </div>
  //     </div>
  //   );
  // }

  //single selection

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  let handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  let handleMultiSelection = (getCurrentId) => {
    let copyMultiSelect = [...multiSelect];
    const findIndexOfCurrentId = copyMultiSelect.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      copyMultiSelect.push(getCurrentId);
    } else {
      copyMultiSelect.splice(findIndexOfCurrentId, 1);
    }

    setMultiSelect(copyMultiSelect);
  };

  console.log(selected, multiSelect);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable MultiSelection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiSelect.indexOf(item.id) !== -1 && (
                    <div className="content">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="content">{item.answer}</div>
                  )}
              {/* {selected === item.id || multiSelect.indexOf(item.id) !== -1 ? (
                <div className="content">{item.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div className="red">No Data Found</div>
        )}
      </div>
    </div>
  );
}
