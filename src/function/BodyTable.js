import { StyleHook } from "../hooks/Styleshook";
export function BodyTable(data) {
  return (
    <tbody>
      {data.data.data.map((item, index) => (
        <tr key={index}>
          {item.map((elem, index) => (
            <td
              key={index}
              style={{
                textAlign: StyleHook(
                  data.data.header[index].type,
                  data.data.header[index].align
                ),
                backgroundColor: StyleHook(elem.color),
              }}
            >
              {typeof elem === "object"
                ? elem.d
                : typeof elem === "boolean"
                ? elem === true
                  ? "Active"
                  : "Unactive"
                : elem}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
