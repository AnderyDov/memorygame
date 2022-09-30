import React from "react";

export default function Results({ results }) {
  let rows = [...results].map((el, i) => {
    return (
      <tr key={i}>
        <td>{el.level}</td>
        <td>{el.result}s</td>
      </tr>
    );
  });

  let out = (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>level</th>
            <th>result</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );

  return out;
}
