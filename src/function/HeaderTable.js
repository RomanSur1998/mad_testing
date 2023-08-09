export function HeaderTable(header) {
  return (
    <tr>
      {header.map((item) => (
        <th key={item.id} style={{ textAlign: item.align }}>
          {item.caption}
        </th>
      ))}
    </tr>
  );
}
